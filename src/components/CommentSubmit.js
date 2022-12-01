import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addComment, editComment } from "../features/tasks/Storage";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

export default function CommentSubmit() {

    const [titlecoment, setTitlecoment] = useState({
        title: '',
        description: '',
        complete: false
    });

    const Navigate = useNavigate();
    const Dispch = useDispatch();
    // bring id for edit
    const params = useParams();
    // bring comment
    const comentarios = useSelector(state => state.comment);

    const handleInputChange = (e) => {
        
        // Lectura para saber que guarda
        //(e.target.name, e.target.value);

        setTitlecoment({
            ...titlecoment,
            [e.target.name]: e.target.value
        })
    }

    const HSubmit = (e) => {
        e.preventDefault();

        if (params.id)  
        {
            Dispch(editComment(titlecoment));
        } 
        else 
        {
            Dispch(addComment({...titlecoment,id: uuid()}));
        }
        Navigate("/");
    }


    useEffect(() => {

        if (params.id) {
            setTitlecoment(comentarios.find((comment) => comment.id === params.id));
            //console.log(comentarios);
            console.log(comentarios.find((comment) => comment.id === params.id))
        }
        /*
                if (params.id) {
            const commentFound = comentarios.find((titlecoment) => titlecoment.id === params.id);
            console.log(titlecoment);
            console.log(comentarios)
            if (commentFound) {
                setTitlecoment({
                    title: commentFound.title,
                    description: commentFound.description
                })
            }
        }
        */

   
    }, [])


    return (
        <> 
            <form onSubmit={HSubmit}> 

                <input name='title' type="text" placeholder={comentarios.titlecoment} onChange={handleInputChange}/>
                <textarea name='description' type="text" placeholder={comentarios.description} onChange={handleInputChange}/>
                <button type="submit">Add Task</button>
            
            </form>
            
        </>
    )
};
