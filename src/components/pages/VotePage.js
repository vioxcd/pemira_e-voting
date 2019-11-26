import React, { Component } from 'react'
// import { compose } from 'redux'
import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
import { submitVote } from '../../store/actions/voteActions'

class VotePage extends Component {
  state = {
    votesUniv: null,
    votesFakultas: null,
    votesJurusan: null,
    kandidat: null,
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.submitVote(this.state.votesUniv)
  }

  render() {
    // const { kandidat } = this.props
    const univ = [
      ['Calon 1', '1'],
      ['Calon 2', '2'],
      ['Calon 3', '3'],
    ]
    return (
      <section>
        <h1>Votes Section</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h4>Univ</h4>
            {univ.map(([text, value], i) => (
              <div key={i}>
                <input
                  id="votesUniv"
                  type="radio"
                  checked={this.state.votesUniv === value}
                  onChange={this.handleChange}
                  value={value}
                />
                {text}
              </div>
            ))}
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
        {/* <br />
        <div>
          <h4>Fakultas</h4>
          {univ.map(([text, value], i) => (
            <div key={i}>
              <input
                id={text}
                type="radio"
                checked={this.state.votes === value}
                onChange={this.handleChange}
                value={value}
              />
              {text}
            </div>
          ))}
        </div>
        <br />
        <div>
          <h4>Jurusan</h4>
          {univ.map(([text, value], i) => (
            <div key={i}>
              <input
                id={text}
                type="radio"
                checked={this.state.votes === value}
                onChange={this.handleChange}
                value={value}
              />
              {text}
            </div>
          ))}
        </div> */}
      </section>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     kandidat: state.firestore.ordered.kandidat,
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    submitVote: votes => dispatch(submitVote(votes)),
  }
}

export default connect(null, mapDispatchToProps)(VotePage)

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   firestoreConnect([{ collection: 'kandidat' }])
// )(VotePage)

/* {kandidat &&
          kandidat.map(info => (
            <div key={info.no}>
              <h4>{info.no}</h4>
              <p>
                {info.calon_1.nama}, {info.calon_1.nim}
              </p>
              <p>
                {info.calon_2.nama}, {info.calon_2.nim}
              </p>
            </div>
					))} */
