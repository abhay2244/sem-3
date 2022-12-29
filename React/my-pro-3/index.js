import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';
import Layout from './Layout';
import Faculties from './Faculties';
import FacultyDetail from './FacultyDetail';
import FacultyAdd from './FacultyAdd';
import Faculties1 from './Faculties1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
           <Route path='/faculties' element={<Faculties />}></Route> 
           <Route path='/faculty/:id' element={<Faculties1 />}></Route>
           <Route path='/faculty/add' element={<FacultyAdd />}></Route>
           <Route path='/faculty/edit/:id' element={<FacultyAdd />}></Route>
        </Route>
    </Routes>
   </BrowserRouter>
);


