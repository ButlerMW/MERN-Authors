import React, { useEffect, useState } from 'react'
import { navigate, Link } from '@reach/router'
import axios from 'axios'
import ErrorPage from '../components/ErrorPage';

export default props => {
    const { id } = props;
    const [name, setName ] = useState();
    const [ errors, setErrors ] = useState([]);
    const [ noAuthor, setNoAuthor ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => setNoAuthor(true));
                
    }, [])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/update/' + id, {
            name
        })
            .then(res => {
                console.log(res) 
                navigate("/") 
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Update an Author</h1>
            { noAuthor ? <ErrorPage/> :
            <div>
                <Link to={"/"}>Home</Link>
                <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>
                        <label className="m-2" >Name: </label>
                        <input 
                            className="m-2" 
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => { setName(e.target.value )}} />
                    </p>
                    <Link className="m-2 btn btn-danger" to={"/"}>Cancel</Link>
                    <input className="m-2 btn btn-success" type="submit" />
                </form>
            </div>
}
        </div>
    )
}