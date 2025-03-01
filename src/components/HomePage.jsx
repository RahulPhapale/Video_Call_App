import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const[name,setName] = useState("");
const navigate = useNavigate();

    const submitButton = () => {

        navigate(`/room/${name}`)

        
    }


    
  return (
    <div>
        <div>
            <input
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type="text" 
                placeholder="Enter your name.."/>
            <button onClick={submitButton}>Join</button>
        </div>
    </div>
  )
}

export default HomePage