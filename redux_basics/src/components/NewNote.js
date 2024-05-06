import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";


export default function NewNote() {
    const dispatch = useDispatch();
    
    const addNote = (e) => {
        e.preventDefault();
        const {target} = e
        const content = target.note.value;
        target.note.value = '';
        dispatch(createNote(content))
    }

    const filterNotes = () => {
        
    }

    return ( 
        <form onSubmit={addNote}>
            <input name='note'></input>
            <button type='submit' >Agregar nota</button>
            <label>Todas</label>
            <input type="radio" name="filter" onChange={filterNotes('ALL_NOTES')}></input>
            <label>Importantes</label>
            <input type="radio" name="filter" onChange={filterNotes('IMPORTANT_NOTES')}></input>
            <label>No Importantes</label>
            <input type="radio" name="filter" onChange={filterNotes('NOT_IMPORTANT_NOTES')}></input>
        </form>
    )
}