import React, {useState} from "react";

const Username = () => {
    
    const [value, setValue] = useState("")
  
  
    return (
        <div>
            <h3 className="userName">Hello : {value}</h3>
            <input type="text" placeholder='type yoour name'  onChange= {event => setValue(event.target.value)} />
        </div>
    )
  }

export default Username;
