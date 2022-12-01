import { useState } from "react"

export default function TaskForm() {

    const [title, setTitle] = useState({
        title: '',
        description: ''
    });

    const handleInputChange = (e) => {
        
        // Lectura para saber que guarda
        //(e.target.name, e.target.value);

        setTitle({
            ...title,
            [e.target.name]: e.target.value
        })
    }

    const handletest = (e) => {
        console.log(title);
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
