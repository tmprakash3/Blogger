import axios from 'axios';
import Error from 'next/error'

const Todo = ({ todo, error }) => {
    console.log(error);
    if (error) {
        return <Error title={error.errorMessage} statusCode={error.statusCode}></Error>
    }
    return (
        <div className="todo">
            <h1>Todo View</h1>
            <span>{todo.id}</span> &nbsp; <span>{todo.title}</span>
        </div>
    );
}
export const getServerSideProps = async ({ query }) => {
    try {
        const result = await axios.get(`http://jsonplaceholder.typicode.com/todos/${query.todoId}`);

        console.log(result);
        // const todos =  result.data.splice(0, 10);


        return {
            props: { todo: result.data }
        }
    }

    catch (error) {
        console.log(error);
        return {
            props: {
                error: {
                    errorMessage: error.response?.statusText ? error.response?.statusText : 'There is an error',
                    statusCode: error.response?.status ? error.response?.status : 500
                }
            }
        }

    }
}
export default Todo;