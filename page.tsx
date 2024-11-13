import react from 'react';
import type {NextPage } from 'next';
import TodoList from './components/todo';
 const Home: NextPage=()=>{
    return(
        <div className="bg-blue-400 text-center text-4xl text-orange-900  font-bold justify-center" >
Next JS Build a ToDo Application
<TodoList/>
        </div>
    )
}
export default Home