import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { scanKTM } from '../../store/actions/publicActions'

class TatacaraPage extends Component {
  state = {
    nama: '',
    nim: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.scanKTM(this.state)
  }

  render() {
    const { tatacara } = this.props
    return (
      <>
        <section>
          <h1>Tatacara</h1>
          {tatacara &&
            tatacara.map(baris => (
              <p key={baris.id}>
                {baris.id} - {baris.teks}
              </p>
            ))}
        </section>
        <section>
          <h1>Scan KTM</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" id="nama" onChange={this.handleChange} />
              <label htmlFor="nama">Nama Mhs</label>
            </div>
            <div>
              <input type="text" id="nim" onChange={this.handleChange} />
              <label htmlFor="nim">NIM</label>
            </div>
            <div>
              <button>Scan!</button>
            </div>
          </form>
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    tatacara: state.firestore.ordered.tatacara,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    scanKTM: credentials => dispatch(scanKTM(credentials)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'tatacara' }])
)(TatacaraPage)
