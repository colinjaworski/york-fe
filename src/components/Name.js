import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';


// {score !== 0 && score >= highScore && result !== 'This game was a tie' && 
// <h2 style={{ color: 'blue' }}>a new high score!</h2> 
// }
const Name = (props) => {
    console.log(props)
    const [data, setData] = useState();
    const [name, setName] = useState('')

    const fetchData = async (event) => {
        event.preventDefault();
        try {
            console.log('is your name really', name);
            const response = await axios.post('http://localhost:7071/api/react-backend', { name });
            setData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Welcome to the YorkApp:</h2>
            <pre> {JSON.stringify(data, null, 2)}</pre>

            <form onSubmit={fetchData}>
                <label>
                    Please Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Name;