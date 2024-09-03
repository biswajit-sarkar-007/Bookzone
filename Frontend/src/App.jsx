 import React from 'react';
 
 
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Course from './courses/Course';
import Signup from './components/Signup';
 
 
 
 function App() {
   return (
     <div>
      
     
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>} />
        <Route path="/signup" element={<Signup/>} />
       </Routes>
     </div>

     
     
   );
 }
 
 export default App;
 
