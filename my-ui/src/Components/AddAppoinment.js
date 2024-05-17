import React from "react";
import { useState } from "react";
import { RiHeartAddLine } from "react-icons/ri";
const AddAppoinment = ()=>{

  let [toogle ,settoggle] = useState(false);

return(
  <div className='container'>
   <button onClick={()=>{settoggle(!toggle)}}>
       <RiHeartAddLine/>
        Add Appoinment
    </button>
      {
        toogle && <form>
        <label>
          Owner Name:
          <input type="text" />
        </label>
        <label>
          Pet Name:
          <input type="text" />
        </label>
        <label>
         Apt Date:
          <input type="date"  />
        </label>
        <label>
         Apt Time:
          <input type="time"  />
        </label>
        <label>
        Appoinment Notes:
        <textarea/>
      </label>
        <button type="submit">Submit</button>
      </form>

      }

  </div>


)
}

export default AddAppoinment;