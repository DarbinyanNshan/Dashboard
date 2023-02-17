import React from "react";
import { About } from '../About/index';
import {Route, Routes} from "react-router-dom";
import { Apply } from "../Apply/index";
import { Users } from "../Users";


export const Router = () => {

    return <>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/apply' element={<Apply/>}/>
        <Route path='/users' element={<Users/>}/>

      </Routes>
    </>
}