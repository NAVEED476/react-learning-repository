import React from 'react'
import { Link } from 'react-router-dom'

const Expenses = () => {
  return (
    <div>
        <h1>Expenses</h1>
        <Link to="/">Home</Link>
        <Link to="/Invoice">Invoice</Link>
    </div>

    

  )
}

export default Expenses