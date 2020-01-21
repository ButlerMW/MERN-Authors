import React, { useEffect, useState } from 'react'
import { navigate, Link } from '@reach/router'
import axios from 'axios'

export default props => {
  

    return (
        <div>
            <h1>Sorry this author does not exist</h1>
            <Link to={"/new"}>Add a new shitty writer</Link>
        </div>
    )
}