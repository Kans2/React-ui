import './App.css';
import { useState,useEffect,useCallback } from 'react';
import { BiArchive } from "react-icons/bi";
import Search from './Components/Search.js';
import AddAppoinment from "./Components/AddAppoinment.js";
import Appoinmentinfo from "./Components/Appoinmentinfo.js";
import appoinmentList from "./data.json";
function App() {

//Setting the list

let [AppoinmentList,setAppoinmentList] = useState([]);

const fetchdata = useCallback(()=>{
  fetch('./data.json').then(
    res => Response.json()
  ).then(data=>setAppoinmentList(data))
  .catch(err){
      console.log(err);
  }
},[])

//using useEffect

useEffect(()=>{
  fetchdata()
},[fetchdata]);

  return (
    <>
     <div className="container">
      <header>
        <div>
          <h1 className='select'><BiArchive/></h1>
        </div>
      <h1 >Your Appoinments</h1>
      </header>
      <AddAppoinment/>
      <br/>
      <Search/>
      <ul className='struc'>
        {
          appoinmentList .map(appoinment =>(
         <Appoinmentinfo key ={appoinment.id}/>
          ))
        }

      </ul>
    </div>
    </>
   
  );
}

export default App;
