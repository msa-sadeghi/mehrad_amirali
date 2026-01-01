import { useState } from "react";

function TodoList(){
        const [newTask, setNewTask] = useState('')
        const [tasks, setTasks] = useState([
            {id:1, text:'learn react basics', completed:false},
            {id:2, text:'learn Django basics', completed:true},
        ])
        const addTask = () => {
            setTasks(
                [
                    ...tasks,
                    {id:Date.now(),  text:newTask, completed:false}
                ]
            )
            setNewTask('')
        }

        const removeTask = (id) => {
            setTasks(
                tasks.filter(task=>task.id !== id)
            )
        }

        const toggleCompleted = (id)=>{
            setTasks(
                tasks.map((task)=>(
                    task.id === id ?{...task, completed:!task.completed}:task
                ))
            )
        }
        return(
            <div>
                <h2>Tasks List</h2>
                <div>
                    <input type="text" 
                    value={newTask}
                    onChange={(e)=>setNewTask(e.target.value)}
                    style={{padding:'10px', width:'300px'}}
                    />
                    <button
                    style={{padding:'10px 20px', marginLeft:'10px'}}
                    onClick={addTask}
                    >Add Task</button>
                </div>
                <ul style={{listStyle:'none', padding:0}}>
                    {
                        tasks.map(task=>(
                            <li 
                            key={task.id}
                            style={{
                                padding:'10px',
                                borderBottom:'1px solid #eee',
                                display:'flex',
                                justifyContent:'space-between',
                                alignItems:'center'

                            }}
                            >
                                <div
                                style={{
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'space-between',
                                    flexGrow:1
                                }}
                                >
                                    <input 
                                    type="checkbox" 
                                    checked={task.completed}
                                    onChange={()=>toggleCompleted(task.id)}
                                    />
                                    <span
                                    style={{
                                        textDecoration: task.completed ? 'line-through' :  'none'
                                    }}
                                    >
                                        {task.text}
                                    </span>
                                    <button
                                    onClick={()=>removeTask(task.id)}
                                    >remove</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
}

export default TodoList;