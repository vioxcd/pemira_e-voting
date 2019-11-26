import React, { Component } from 'react'
// import { compose } from 'redux'
import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
import { handleTest } from './testActions'

class TestPage extends Component {
  handleClick = () => {
    this.props.handleTest()
  }

  render() {
    // const { admin } = this.props
    return (
      <div>
        <h1>Test Page</h1>
        <button onClick={this.handleClick}>Test your action!</button>
        {/* {admin && admin.map(a => <h1>{a.username}</h1>)} */}
      </div>
    )
  }
}

// export default TestPage

// const mapStateToProps = state => {
//   console.log(state)
//   return {
//     admin: state.firestore.ordered.admin,
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    handleTest: () => dispatch(handleTest()),
  }
}

export default connect(null, mapDispatchToProps)(TestPage)

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: 'admin' }])
// )(TestPage)
