import { useSelector, useDispatch } from "react-redux"
import { delComment } from "../features/tasks/Storage";

export default function CommentList() {

    const comment = useSelector(state => state.comment);
    //console.log(comment);

    const Dispch = useDispatch();

    const HDelete = (id) => {
        //id.preventDefault();
        Dispch(delComment(id));
        console.log(id);
    }

    return (<>
    <h1> Hola </h1>
    {
        comment.map((task, index) => (
            <div key={index}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <button onClick={() => HDelete(task.id)}>Delete</button>
            </div>
        ))
    }
    </>)
}