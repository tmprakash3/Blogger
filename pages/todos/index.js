import axios from 'axios';
import { Fragment } from 'react';
import Link from 'next/link';

const Todos = ({ todos }) => {
    // 
    return (

        <div>
            <h1>Todos list</h1>
            {
                todos.map((todo, index) => {
                    return (
                        <div key={todo.id} className="card-view">
                            <Link href="/todos/[todoId]" as={`/todos/${todo.id}`}>
                                <a>
                                    <span>{todo.id}</span> &nbsp;
                                    <span>{todo.title}</span>
                                </a>
                            </Link>
                        </div>
                    )
                })
            }
            <style global jsx>{`
           .card-view {
            border: 1px solid #d4d6d8;
            box-shadow: 0 2px 2px 0 rgb(0 0 0 / 7%);
            background-color: #edf0f1;
            margin-bottom: 8px;
            padding: 12px;
           }
           .todo {
               color: red;
           }
      `}</style>
        </div>
    );
}

export const getServerSideProps = async () => {
    const result = await axios.get('http://jsonplaceholder.typicode.com/todos');
    const todos = result.data.splice(0, 10);

    if (!result.data) {
        return {
          redirect: {
            destination: '/404',
            notFound: true,
          },
        }
      }

    return {
        props: { todos }
    }
}


export default Todos;