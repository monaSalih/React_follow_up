import {React, Component} from 'react';
import Read from './Component/Read';
import Create from './Component/Create';
import { Route, Routes,Link } from 'react-router-dom';
import NavbarPage from './Component/NavbarPage';


export default class App extends Component{





  render(){
    // {console.log(this.state.data,"data setSate")}
    return(
    <>
    <NavbarPage/>
      <Routes>
      <Route path='/' element={<Read/>} />
      <Route path='/Create' element={<Create />} />
      {/* <Route path='/about' element={<About />} /> */}
      
    </Routes>
      
      
      </>
    )
  }
}