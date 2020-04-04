import React, { useState } from 'react'

const Join = () => {
  const [state, setState] = useState({ username: '', password: '', passwordConfirm: '' })
  const { username, password, passwordConfirm } = state

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value })

  return (
    <div>
      <form class='user-form'>
        <label>
          <input name='username' onChange={handleChange} value={username} type='text' placeholder='username' />
        </label>
        <label>
          <input name='password' onChange={handleChange} value={password} type='password' placeholder='password' />
        </label>
        <label>
          <input name='passwordConfirm' onChange={handleChange} value={passwordConfirm} type='password' placeholder='confirm password' />
        </label>
        <label>
          <button>Join</button>
        </label>
      </form>
    </div>
  )
}

export default Join
