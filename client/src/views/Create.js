import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm'
// import AuthorList from '../components/AuthorList'
import axios from 'axios';

export default () => { 
    // const [ author, setAuthor ] = useState([]);
    // const [ loaded, setLoaded ] = useState(false);

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/author/all") //it doesnt like this*******************
    //         .then(res => {
    //             setAuthor(res.data);
    //             setLoaded(true);
    //         });
    // }, [author])

    return ( 
        <div>
            <AuthorForm />
            {/* {loaded && <AuthorList author={author} />} */}
        </div>
    )
}