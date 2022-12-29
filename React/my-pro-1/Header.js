import {Link} from "react-router-dom"
export default function Header(){
    /*return (
        <>
            <Link to="./">Home</Link>&nbsp;
            <Link to="./Aboutus">Aboutus</Link>&nbsp;
            <Link to="./Contactus">Contactus</Link>
        </>
    )*/
    return (
        <>
            <Link to="./Student">Student</Link>&nbsp;
            <Link to="./Product">Product</Link>
        </>
    )
}