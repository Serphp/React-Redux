import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { delComment } from "../features/tasks/Storage";

export default function CommentList() {

    const comment = useSelector(state => state.comment);
    //console.log(comment);

    const Dispch = useDispatch();

    const HDelete = (id) => {
        //id.preventDefault();
        Dispch(delComment(id));
        //console.log(id);
    }

    return (<>
    
    <header className="flex justify-between">
        <h1>Comment List [{comment.length}]</h1>
        <Link to="/create"> Create Comment </Link>
    </header>
    
    {
        comment.map((task, index) => (
            <div className="grid" key={index}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <button class=" bg-white text-black border-spacing-1" onClick={() => HDelete(task.id)}>Delete</button>
                <Link to={`/Edit/${task.id}`} > Edit </Link>
            </div>
        ))
    }
    </>)
}