import React from 'react'
import { connect } from 'react-redux'
//

// /////////////////////////////////////////////////////////
// Redux components
// From http://redux.js.org/docs/basics/UsageWithReact.html
// Display component
const Counter = ({ count, increment, reset }) => (
  <div>
    <p>Value: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
  </div>
)
// Connexion with redux
const CounterConnected = connect(
  ({ counter: { count } }) => ({ count }),
  dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  })
)(Counter)

function counter() {
  return (
    <div>
      <h2>Here is a redux counter:</h2>
      <CounterConnected />
    </div>
  )
}

// /////////////////////////////////////////////////////////
// Actual container
const About = () => (
  <div>
    <h1>This is the help page</h1>
    <p>
    </p>
  </div>
)

export default About
