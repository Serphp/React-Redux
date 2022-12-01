import { useState } from "react"
import { useDispatch } from "react-redux";
import { addComment } from "../features/tasks/Storage";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export default function CommentSubmit() {

    const [title, setTitle] = useState({
        title: '',
        description: ''
    });

    const Navigate = useNavigate();
    const Dispch = useDispatch();

    const handleInputChange = (e) => {
        
        // Lectura para saber que guarda
        //(e.target.name, e.target.value);

        setTitle({
            ...title,
            [e.target.name]: e.target.value
        })
    }

    const HSubmit = (e) => {
        //console.log(title);
        Dispch(addComment({
            ...title,
            id: uuid(),
            //completed: false or true
        }));
        Navigate("/");
        // e.preventDeafault evita refrescar la pagina
        e.preventDefault();
    }


    return (
        <> 
            <form onSubmit={HSubmit}> 
                <input name='title' type="text" placeholder="Task Title" onChange={handleInputChange} />
                <textarea name='description' placeholder="Task Description" onChange={handleInputChange}/>
                <button type="submit">Add Task</button>
            </form>
            
        </>
    )
};
