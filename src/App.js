
import Swal from 'sweetalert2'
import { useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { AddTodoItem } from './AddTodoItem';

function App() {
  const addTodo = (title, desc) => {
    let id;
    if(todosArray.length ==0)
    {
      id = 0;
    }
    else{
      id = todosArray[todosArray.length - 1 ].id + 1;
    }
    const newTodo = {
      id: id,
      title: title,
      desc: desc
    }
    console.log(newTodo)
    setTodos([...todosArray,newTodo])
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
  const [todosArray, setTodos] = useState([
    {
      id: 1,
      title: "Go to Movie",
      desc: "MovieTime Oppenhiemer"
    },
    {
      id: 2,
      title: "Lunch",
      desc: "Lunch At Mad Over Grills on 12"
    },
    {
      id: 3,
      title: "Go to RaceCource",
      desc: "Chill out With Friends"
    }
  ])
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
