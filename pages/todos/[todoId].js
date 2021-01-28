import axios from 'axios';
const Todo = ({todo}) => {
    return (
        <div className="todo">
        <h1>Todo View</h1>
        <span>{todo.id}</span> &nbsp; <span>{todo.title}</span>
        </div>
    );
}
export const getServerSideProps = async ({query}) => {
    const result = await axios.get(`http://jsonplaceholder.typicode.com/todos/${query.todoId}`);
    // const todos =  result.data.splice(0, 10);

    return {
        props: { todo: result.data }
    }
}
 
export default Todo;