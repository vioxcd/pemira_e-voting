import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Pemira -3-</Link>
    </nav>
  )
}

// const mapStateToProps = state => {
//   console.log(state)
//   return {}
// }

export default Navbar
// export default connect(mapStateToProps)(Navbar)
