import { useSelector } from "react-redux"


export default function TaskList() {

    const tasks = useSelector(state => state.tasks);
    console.log(tasks);

    return (<>
    <h1> Hola </h1>
    {
        tasks.map(task => (
            <div key={task.id}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
        ))
    }
    </>)
}