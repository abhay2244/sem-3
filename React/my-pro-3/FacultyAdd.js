import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FacultyAdd()
{
    const params= useParams();
    const navigate=useNavigate();
    const [data,setdata] = useState({});
    
    useEffect(()=> {
        if(params.id > 0){
            fetch("https://630da107109c16b9abe9b070.mockapi.io/data/faculties/" + params.id,
                {
                    method:"GET"
                }
            )
            .then((res) => {
                return res.json(); 
            })
            .then((res) => {
                setdata(res);
            })
        }   
    },[])

    return (<>
        <table>
            
        <tr>
          <td>Enter Faculty Name : </td>
          <td>
            <input
              value={data.facultiesName}
              onChange={(e) => {
                setdata({ ...data, facultiesName: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
            <tr>
                <td>Created : </td>
                <td><input  value={data.createdAt} onChange={(e) => {
                    setdata({...data,createdAt:e.target.value});
                }} 
                type="text"
                />
                </td>
            </tr>
            <tr>
                <td>facultiesImage : </td>
                <td><input  value={data.facultiesImage} onChange={(e) => {
                    setdata({...data,facultiesImage:e.target.value});
                }} 
                type="text"
                />
                </td>
            </tr>
            <tr>
                <td>department : </td>
                <td><input  value={data.department} onChange={(e) => {
                    setdata({...data,department:e.target.value});
                }} 
                type="text"
                />
                </td>
            </tr>
            <tr>
                <td>city : </td>
                <td><input  value={data.city} onChange={(e) => {
                    setdata({...data,city:e.target.value});
                }} 
                type="text"
                />
                </td>
            </tr>
            <tr>
                <td>roll_no : </td>
                <td><input  value={data.roll_no} onChange={(e) => {
                    setdata({...data,roll_no:e.target.value});
                }} 
                type="text"
                />
                </td>
            </tr>
            <tr>
                <td>password : </td>
                <td><input  value={data.password} onChange={(e) => {
                    setdata({ ...data, password:e.target.value });
                }} 
                type="text"
                />
                </td>
            </tr>
            <tr>
                <td>username : </td>
                <td><input  value={data.username} onChange={(e) => {
                    setdata({...data,username:e.target.value});
                }} 
                type="text"
                />
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <button onClick={()=>{
                        if(params.id>0){
                            fetch(
                                "https://630da107109c16b9abe9b070.mockapi.io/data/faculties/"+params.id,
                                {
                                    method:"PUT",
                                    body:JSON.stringify(data),
                                    headers: {
                                        "Content-Type":"application/json"
                                    }
                                }
                            )
                            .then(()=>{
                                navigate("/faculties");
                            });
                        } 
                        else {
                            fetch("https://630da107109c16b9abe9b070.mockapi.io/data/faculties",
                                {
                                    method:"POST",
                                    body:JSON.stringify(data),
                                    headers :{
                                        "Content-Type":"application/json"
                                    }
                                }
                            ).then(()=>{
                                navigate("/faculties")
                            })
                        }
                    }}>
                        {params.id>0 && "Edit"}
                        {!params.id>0 && "Add"}
                        Faculty
                    </button>
                </td>
            </tr>
        </table>
    </>)
}
    

