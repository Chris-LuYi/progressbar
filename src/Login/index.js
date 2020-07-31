// login.js
import React from 'react'
import { fetch } from '@utils'
function Login () {
  const [
    state,
    setState,
  ] = React.useReducer((s, a) => ({ ...s, ...a }), {
    resolved: false,
    loading: false,
    error: null,
  })

  function handleSubmit (event) {
    event.preventDefault()
    const { usernameInput, passwordInput } = event.target.elements

    setState({ loading: true, resolved: false, error: null })
    fetch({
      url: '/api/login',
      option: {
        method: 'POST',
      },
      payload: {
        username: usernameInput.value,
        password: passwordInput.value,
      },
      onSuccess: (user) => {
        setState({ loading: false, resolved: true, error: null })
        window.localStorage.setItem('token', user.token)
      },
      onError: (error) => {
        setState({ loading: false, resolved: false, error: error.message })
      },
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='usernameInput'>Username</label>
          <input id='usernameInput' />
        </div>
        <div>
          <label htmlFor='passwordInput'>Password</label>
          <input id='passwordInput' type='password' />
        </div>
        <button type='submit'>Submit{state.loading ? '...' : null}</button>
      </form>
      {state.error ? <div role='alert'>{state.error}</div> : null}
      {state.resolved ? (
        <div role='alert'>Congrats! You're signed in!</div>
      ) : null}
    </div>
  )
}

export default Login
