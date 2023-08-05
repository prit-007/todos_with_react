import TodoItem from "./TodoItem";

function Body({todosArray,onDelete}) {
    const myStyle ={
        minHeight : "70vh",
        margin : "40px auto"
    }
    return (
        <>
            <div className="container" style={myStyle}>
                
                <h2 className="text-center text-primary">Todos List</h2>
                {todosArray.length === 0 ?
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"></svg>
                    <div className="text-center">
                      No ToDos To Display
                    </div>
                  </div> :
                    todosArray.map(
                        (todo) => {
                            return <>
                                <TodoItem item={todo} key={todo.id} onDelete={onDelete} /><hr />    
                            </>
                        }   
                    )
                }
            </div>
        </>
    );
}

export default Body;