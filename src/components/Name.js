import {useEffect, useState} from 'react';
import axios from 'axios';

const Name = () => {
    const [data, setData] = useState();
    const [name, setName] = useState('')


    const fetchData = async (event) => {
        event.preventDefault();
        try {
            console.log('is your name really', name);
            const response = await axios.post('http://localhost:7071/api/reactBackend', {name});
            setData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

return (
    <div>
        <h2>Welcome to the YorkApp:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>

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