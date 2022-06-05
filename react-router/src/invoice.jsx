import React from 'react'
import { Link } from 'react-router-dom'

const Invoice = () => {
  return (
    <div>
        <h1>Invoice</h1>
        <Link to="/">Home</Link>
        <Link to="/Expenses">Expenses</Link>
    </div>
  )
}

export default Invoice