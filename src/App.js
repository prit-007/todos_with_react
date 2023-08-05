
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { AddTodoItem } from './AddTodoItem';

function App() {
  let initTodo;
  if (localStorage.getItem("todosArray")) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todosArray"))
  }

  const addTodo = (title, desc) => {
    let id;
    localStorage.setItem("todosArray", JSON.stringify(todosArray))
    if (todosArray.length == 0) {
      id = 0;
    }
    else {
      id = todosArray[todosArray.length - 1].id + 1;
    }
    const newTodo = {
      id: id,
      title: title,
      desc: desc
    }
    console.log(newTodo)
    setTodos([...todosArray, newTodo])
    console.log(todosArray);
    
  }

  const onDelete = (item) => {
    // console.log("Deleted",item);
    // let index = todosArray.indexOf(item);
    // todosArray.splice(index, 1);

    //sweet Alert start
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        setTodos(todosArray.filter(
          (e) => { return e != item; }
        ))
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }//sweet alert end

  // array of Todo Object
  //with method setTodos
  const [todosArray, setTodos] = useState([initTodo])

  //useEffect is hook 
  //Arrow function is called when any effects applied on todosArray 

  useEffect(() => {
    localStorage.setItem("todosArray", JSON.stringify(todosArray))
  }, [todosArray])


  return (
    <div className="App">
      <Header />
      <AddTodoItem addTodo={addTodo} />
      <Body todosArray={todosArray} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
