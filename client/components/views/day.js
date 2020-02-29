import React from 'react'

class Day extends React.Component {
  render() {
    return (
      <div>
        {' '}
        {/* Day container */}
        <div>
          {' '}
          {/* Task List Container */}
          <ul>
            <h3>Some Tasks</h3>
            <li>Vacuum</li>
            <li>Call Grandma</li>
            <li>Groceries for Party</li>
          </ul>
        </div>{' '}
        {/* END Task List Container */}
        <div>
          {' '}
          {/*Practice List Container */}
          <ul>
            <h3>Some Practices</h3>
            <li>Yoga</li>
            <li>Track Nutrition</li>
            <li>Read Half an Hour</li>
          </ul>
        </div>{' '}
        {/* END Practice List Container */}
        <div>
          {' '}
          {/* Journal Container */}
          <h3>Notes</h3>
          <p>
            Today I'm feeling pretty chill. I have some things to do and enough
            time to do them. Maybe I'll watch some Good Place tonight.
          </p>
        </div>{' '}
        {/* END Journal Container */}
        {/*END Day container */}
      </div>
    )
  }
}

export default Day
