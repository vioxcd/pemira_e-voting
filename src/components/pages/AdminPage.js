import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, tambahKandidat } from '../../store/actions/adminActions'

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
    this.props.login({ username, password })
  }

  handleTambahKandidat = e => {
    e.preventDefault()

    const { username, password, ...kandidat } = this.state
    this.props.tambahKandidat(kandidat)
  }

  render() {
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
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: credentials => dispatch(login(credentials)),
    tambahKandidat: kandidat => dispatch(tambahKandidat(kandidat)),
  }
}

export default connect(null, mapDispatchToProps)(AdminPage)
