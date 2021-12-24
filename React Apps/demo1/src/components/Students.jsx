import React, { useState } from "react";

let stdList = [
    {name:"Jawwad"},
    {name:"Khan"},
    {name:"JK"},
    {name:"JK"},
    {name:"JK"},
    {name:"JK"},
    {name:"JK"},
    {name:"JK"}
]



const Students = () =>{

const [stdMarks, setStdMarks] = useState(stdList);
console.warn("stdList====>",stdMarks);

const [newStd, setNewStd] = useState(stdMarks);
console.warn("after added marks====>",newStd);

const addMarks = () =>{
    let marks;
    stdList.map((vals)=>{
        return vals.marks = Math.random() * 100;
    })
   setStdMarks([...stdMarks,marks - 1]);
  
}
    return(
        <div>
            <h3>Students List</h3>
            <ul>
            {stdList.map((vals)=>{
                return(
                    <div id="card">
                        <li>{vals.name}</li>
                        
                    </div>
                )  
            })}
            </ul>
            
            <button id="btn-1" onClick={()=>addMarks()}>Add Marks.</button>
            <h3>After Adding Marks</h3>
            <table border="2">
            <tr>
             <th>Students Name</th>&nbsp;&nbsp;&nbsp;
             <th>Students Marks</th>
            </tr>
            <tbody>
            {stdList.map((vals)=>{
                return(
                    <tr id="card2">
                        <td>{vals.name}</td>&nbsp;&nbsp;&nbsp;
                        <td>{vals.marks}</td>
                    </tr>
                )  
            })}
            </tbody>
            </table>
        </div>
    )
}

export default Students;