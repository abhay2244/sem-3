import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Faculties(){
    
    const [faculties,setfaculties]=useState([]);
    useEffect(()=>{
        fetch("https://630da107109c16b9abe9b070.mockapi.io/data/faculties")
        .then((res) =>{
             return res.json();    
        })
        .then((res) =>{
            setfaculties(res);
        });
    },[]); 
    
    const formatedFaculty=faculties.map((fac)=>{
        return (
            <>
                <Link to={"../faculty/"+fac.id}>
                  <h2> {fac.facultiesName} </h2>
                </Link>
            </>
        )
    });
    return formatedFaculty;
}