import React from 'react'
import { Link } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default props => {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete("http://localhost:8000/api/author/delete/" + authorId)
            .then(res => {
                removeFromDom(authorId); //not liking this
            })
    }

    // const alpha = props.author

    return (
        <div>
            <Link to={"/new"}>Add an author</Link>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" >Author</th>
                        <th scope="col" >Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {props.author.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 :-1 ).map((author, idx) => {
                    return (
                        <tr key={idx}>
                        <td>
                            {author.name}
                        </td>
                        <td>
                            <Link className="btn btn-info mr-2" to={"/edit/" + author._id}>Edit</Link>
                            <button className="btn btn-danger ml-2" onClick={(e) => {deleteAuthor(author._id)}}>
                                Delete    
                            </button>   
                        </td>
                    </tr> )
                })}
                </tbody>
            </table>
        </div>
    )
}