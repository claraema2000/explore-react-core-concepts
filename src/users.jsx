import { useEffect, useState } from "react"

export default function Users(){
    const [users, setusers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setusers(data))
    }, [])
    return(
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

// 1. declare a state to hold the data
// 2. useEffect with callback & dependency array
// 3. use fetch to load data