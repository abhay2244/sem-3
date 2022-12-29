import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Faculties1() {
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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={faculty.facultiesImage} />
      <Card.Body>
        <Card.Title>{faculty.facultiesName}</Card.Title>
        <Card.Text>
            {faculty.city}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{faculty.username}</ListGroup.Item>
        <ListGroup.Item>{faculty.password}</ListGroup.Item>
        <ListGroup.Item>{faculty.roll_no}</ListGroup.Item>
      </ListGroup>
      <Card.Body >
         <button  onClick={() =>{
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
          
          <button className="ms-5" onClick={()=>{
                  navigate("/faculty/edit/"+params.id);
                }} >
                Edit
            </button>
          
      </Card.Body>
    </Card>
  );
}

