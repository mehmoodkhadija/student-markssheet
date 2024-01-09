import React, { useState } from 'react';
import App from '../App';
function Studentmarks() {
  const [marks, setMarks] = useState([90, 49, 80, 51, 48]);


  const handleIncrement = (index) =>{
    const updateMarks = [...marks];
    updateMarks[index] += 1;
    setMarks(updateMarks);
  }

  const handleDecrement = (index) =>{
    const updateMarks = [...marks];

    updateMarks[index] -= 1;
    setMarks(updateMarks);
  }
  return (
    <div className="container mt-5">
 <button type="button" className="btn btn-success m-4">
  Notifications <span className="badge bg-danger">pass : {marks.filter((m) => m >= 50).length} fail : {marks.filter((m) => m < 50).length}</span>
</button>
{marks.map((m ,i) =>(
    <div key={i} className = {m >= 50 ? 'pass' : 'fail'}>
    <button className = "m-2 btn btn-success" onClick={() => handleIncrement (i)}> +</button> {m}
    <button className="btn btn-danger m-2" onClick={() => handleDecrement (i)}> -</button>

    </div>
))}

      
    </div>
  );
}

export default Studentmarks;

