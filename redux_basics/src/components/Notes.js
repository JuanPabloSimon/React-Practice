import { useSelector } from "react-redux";

export default function Notes() {
    const state = useSelector(state => state.notes);


    return (<ul>  
        {state.map(el => {
          return <li key={el.id}>{el.content}</li>
            })}
        </ul>
    )
}