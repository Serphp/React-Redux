import { useState } from "react"
import { useDispatch } from "react-redux";
import { addComment } from "../features/tasks/Slice";

export default function TaskForm() {

    const [title, setTitle] = useState({
        title: '',
        description: ''
    });

    const Dispch = useDispatch();

    const handleInputChange = (e) => {
        
        // Lectura para saber que guarda
        //(e.target.name, e.target.value);

        setTitle({
            ...title,
            [e.target.name]: e.target.value
        })
    }

    const handletest = (e) => {
        //console.log(title);
        console.log(Dispch(addComment(title)));
        // e.preventDeafault evita refrescar la pagina
        e.preventDefault();
    }


    return (
        <> 
            <form onSubmit={handletest}> 
                <input name='title' type="text" placeholder="Task Title" onChange={handleInputChange} />
                <textarea name='description' placeholder="Task Description" onChange={handleInputChange}/>
                <button type="submit">Add Task</button>
            </form>
            
        </>
    )
};
