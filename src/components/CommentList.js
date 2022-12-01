import { useSelector } from "react-redux"


export default function CommentList() {

    const comment = useSelector(state => state.comment);
    //console.log(comment);

    return (<>
    <h1> Hola </h1>
    {
        comment.map((task, index) => (
            <div key={index}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
        ))
    }
    </>)
}