import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { loginAdmin, tambahKandidat } from '../../store/actions/adminActions'

class AdminPage extends Component {
  state = {
    username: '',
    password: '',
    calon_1: '',
    calon_2: '',
    tingkat: '',
    fakultas: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { username, password } = this.state
    this.props.loginAdmin({ username, password })
  }

  handleTambahKandidat = e => {
    e.preventDefault()

    const { username, password, ...kandidat } = this.state
    this.props.tambahKandidat(kandidat)
  }

  render() {
    const { kandidat } = this.props
    return (
      <>
        <section>
          <h1>Login Admin</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" id="username" onChange={this.handleChange} />
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div>
              <button>Create</button>
            </div>
          </form>
        </section>
        <hr />
        <section>
          <h1>Tambah Kandidat</h1>
          <form onSubmit={this.handleTambahKandidat}>
            <div>
              <input type="text" id="calon_1" onChange={this.handleChange} />
              <label htmlFor="calon_1">Calon 1</label>
            </div>
            <div>
              <input type="text" id="calon_2" onChange={this.handleChange} />
              <label htmlFor="calon_2">Calon 2</label>
            </div>
            <div>
              <input type="text" id="tingkat" onChange={this.handleChange} />
              <label htmlFor="tingkat">Tingkat</label>
            </div>
            <div>
              <input type="text" id="fakultas" onChange={this.handleChange} />
              <label htmlFor="fakultas">Fakultas</label>
            </div>
            <div>
              <button>Create</button>
            </div>
          </form>
        </section>
        <section>
          {kandidat &&
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
            ))}
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    kandidat: state.firestore.ordered.kandidat,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAdmin: credentials => dispatch(loginAdmin(credentials)),
    tambahKandidat: kandidat => dispatch(tambahKandidat(kandidat)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'kandidat' }])
)(AdminPage)
