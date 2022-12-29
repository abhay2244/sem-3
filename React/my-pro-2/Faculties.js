import { useEffect, useState } from "react";

export default function Faculties(){
    const [faculty,setfaculty]=useState([]);
    useEffect(() => {
        fetch("https://630da107109c16b9abe9b070.mockapi.io/data/faculties")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            setfaculty(res);
        });
    },[]);
    
    return (
        <>
            <table style={{border:"1px solid black"}}>
                {faculty.map((fec)=>{
                        return ( <> 
                            <tr>
                                <td style={{border:"1px solid black",backgroundColor:"yellow"}}>{fec.createdAt}</td> 
                                <td style={{border:"1px solid black",backgroundColor:"yellow"}}>{fec.facultiesName}</td>
                                <td style={{border:"1px solid black",backgroundColor:"yellow"}}>
                                     <img src={fec.facultiesImage} style={{height:100 , width:100}}/>                                           
                                </td>
                                <td style={{border:"1px solid black",backgroundColor:"yellow"}}>{fec.department}</td>
                                <td style={{border:"1px solid black",backgroundColor:"yellow"}}>{fec.city}</td>
                                <td style={{border:"1px solid black",backgroundColor:"yellow"}}>{fec.roll_no}</td>   
                                <td style={{border:"1px solid black",backgroundColor:"yellow"}}>{fec.password}</td>
                                <td style={{border:"1px solid black",backgroundColor:"yellow"}}>{fec.username}</td>
                                <td style={{border:"1px solid black",backgroundColor:"yellow"}}>{fec.id}</td>
                             </tr>
                         </>
                         )

                    })
                }
            </table>
        </>
    )
}