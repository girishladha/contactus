import React, { useState } from "react";
import ComponantA from "./ComponantA";
import ComponantB from "./ComponantB";
import ComponantC from "./ComponantC";
import ComponantD from "./ComponantD";
import ComponantNone from "./ComponantNone";

function ChangeComponantSelect(){
    const [selected,setSelected]=useState('None')

    const handleChange=(e)=>{
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    return(
        <div>
            
            <div className="background01">
            {/* <div className="componantD">
            Componant-D
        </div> */}
         <div className="container01">
             <div className="screen01">
                 <div className="screen-header01">
                     <div className="screen-header-left01">
                         <div className="screen-header-button close01"></div>
                         <div className="screen-header-button maximize01"></div>
                         <div className="screen-header-button minimize01"></div>
                     </div>
                     <div className="screen-header-right01">
                         <div className="screen-header-ellipsis01"></div>
                         <div className="screen-header-ellipsis01"></div>
                         <div className="screen-header-ellipsis01"></div>
                     </div>
                 </div>
                 <div className="screen-body01">
                     <div className="screen-body-item left01">
                         <div className="app-title01">
                             <span>CONTACT-US</span>
                             {/* <span>US</span> */}
                         </div>
                         <div className="app-contact01">CONTACT INFO : +62 81 314 928 595</div>
                     </div>
                     <div className="screen-body-item01">
                         <div className="app-form01">
                             <div className="app-form-group01">
                                 <input className="app-form-control01" placeholder="NAME"/>
                             </div>
                             <div className="app-form-group01">
                                 <input className="app-form-control01" placeholder="EMAIL"/>
                             </div>
                             <div className="app-form-group01">
                                 <input className="app-form-control01" placeholder="CONTACT NO"/>
                             </div>
                             <div className="dropdown">
                {/* here is the essential code responsible for the dropdown componants it include .... */}
            <select className="Space" value={selected} onChange={(e)=>handleChange(e)}>
            <option>None</option>
               <option>General Query</option>
               <option>Idea Owner</option>
               <option>StartUp Founder</option>
               <option>Be a Investor</option>
           </select>
           {selected == "None"?<ComponantNone/>:"" }
           {selected == "General Query"?<ComponantA/>:"" }
           {selected == "Idea Owner"?<ComponantB/>:"" }
           {selected == "StartUp Founder"?<ComponantC/>:"" }
           {selected == "Be a Investor"?<ComponantD/>:"" }

            </div>
                             <div className="app-form-group message01">
                                 <input className="app-form-control01" placeholder="MESSAGE"/>
                             </div>
                             <div className="app-form-group buttons01">
                                 <button className="app-form-button01">CANCEL</button>
                                 <button className="app-form-button01">SEND</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             
         </div>
     </div>
            
        </div>
    );
}
export default ChangeComponantSelect;