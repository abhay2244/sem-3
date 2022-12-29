import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FacultyDetail(){
    let params = useParams();
    const navigate = useNavigate();
  
    const [faculty, setFaculty] = useState({});
  
    useEffect(() => {
        fetch(
          "https://630da107109c16b9abe9b070.mockapi.io/data/faculties/" + params.id,
          {
            method: "GET"
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            setFaculty(res);
          });
      }, []);
    
      return (
        <>
          <table>
            <tr>
              <td><h3>Name :</h3></td>
              <td>{faculty.facultiesName}</td>
            </tr>
    
            <tr>
              <td><h3>Image :</h3></td>
              <td>
                <img src={faculty.facultiesImage} alt="asdf" />
              </td>
            </tr>
    
            <tr>
              <td><h3>CreatedAt :</h3></td>
              <td>{faculty.createdAt}</td>
            </tr>
    
            <tr>
              <td><h3>City :</h3></td>
              <td>{faculty.city}</td>
            </tr>

            
            <tr>
              <td><h3>Roll NO :</h3></td>
              <td>{faculty.roll_no}</td>
            </tr>

            
            <tr>
              <td><h3>Password :</h3></td>
              <td>{faculty.password}</td>
            </tr>

            
            <tr>
              <td><h3>UserName :</h3></td>
              <td>{faculty.username}</td>
            </tr>
            <tr>
              <td>
                  <button onClick={() =>{
                      fetch(
                          "https://630da107109c16b9abe9b070.mockapi.io/data/faculties/" + params.id,
                          {
                            method: "DELETE"
                          }
                        )
                        .then((res)=>{
                          navigate("/faculties")
                        })
                  }}>
                      Delete
                  </button>
              </td>
              <td>
                <button onClick={()=>{
                  navigate("/faculty/edit/"+params.id);
                }}>Edit</button>
              </td>
            </tr>
        </table>
    </>
      )
}