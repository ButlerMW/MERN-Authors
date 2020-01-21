import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default () => {
    const [ name, setName ] = useState("");
    const [ errors, setErrors ] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {
            name
        })
            .then(res => {
                console.log(res)
                navigate("/")})
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
            <Link to={"/"}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label className="m-2" >Name:</label>
                    <input className="m-2" type="text" onChange={e => setName(e.target.value)} />
                </p>
                <Link className="btn btn-danger mr-2" to={"/"}>Cancel</Link>
                <input className="btn btn-success ml-2" type="submit" />
            </form>
        </div>
    )
}