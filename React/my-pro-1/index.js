import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Student from './Student';
import Product from './Product';
/*import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /*<BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path='/aboutus' element={<Aboutus />}></Route>
                <Route path='/contactus' element={<Contactus />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    */
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/student' element={<Student />}></Route>
            <Route path='/product' element={<Product />}></Route>
        </Route>
    </Routes>
   </BrowserRouter>
);


