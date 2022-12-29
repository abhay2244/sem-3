import {Link} from "react-router-dom"
export default function Header(){
    return (
        <>
            <Link to="./faculties" style={{fontSize:30}}>All Faculties</Link>&nbsp;&nbsp;
            <Link to="./faculty/add" style={{fontSize:30}}>Add Faculties</Link>
        </>
    )
}