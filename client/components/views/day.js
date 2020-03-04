import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

const DayContainer = styled.div`
  font-family: helvetica;
  font-size: 10px;
  color: black;
  display: flex;
`

const Gutter = styled.div`
  width: 5vw;
`

const TaskPracticeContainer = styled(DayContainer)`
  display: flex;
  justify-content: space-evenly;
`

const JournalContainer = styled(DayContainer)`
  font-size: 1.6em;
  margin: 100px;
  text-align: center;
  border-bottom: 0.2em solid maroon;
`
const PracticeContainer = styled(DayContainer)`
  font-size: 1.6em;
  border-bottom: 0.2em solid maroon;
`

const TaskContainer = styled(DayContainer)`
  font-size: 1.6em;
  border-bottom: 0.2em solid maroon;
`

const TaskList = styled.ul`
  margin: auto 50px;
`

const PracticeList = styled.ul`
  margin: auto 50px;
`

class Day extends React.Component {
  render() {
    return (
      /* Day container */
      <DayContainer>
        <Gutter />
        <div>
          {/* Task and Practice Container */}
          <TaskPracticeContainer>
            {/* Task List Container */}
            <TaskContainer>
              <TaskList>
                <h3>Some Tasks</h3>
                <li>Vacuum</li>
                <li>Call Grandma</li>
                <li>Groceries for Party</li>
              </TaskList>
            </TaskContainer>
            {/* END Task List Container */}

            {/* Practice List Container */}
            <PracticeContainer>
              <PracticeList>
                <h3>Some Practices</h3>
                <li>Yoga</li>
                <li>Track Nutrition</li>
                <li>Read Half an Hour</li>
              </PracticeList>
            </PracticeContainer>
            {/* END Practice List Container */}
          </TaskPracticeContainer>
          {/* END Task and Practice Container */}

          {/* Journal Container */}
          <JournalContainer>
            <h3>Notes</h3>
            <p>
              Today I'm feeling pretty chill. I have some things to do and
              enough time to do them. Maybe I'll watch some Good Place tonight.
            </p>
          </JournalContainer>
          {/* END Journal Container */}
        </div>
        <Gutter />
      </DayContainer>
      /*END Day container */
    )
  }
}

export default Day
