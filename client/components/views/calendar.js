import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

// const Table = styled.table`
//   color: blue;
// `

// const CalHead = styled.tr`
//   background-color: blue;
//   color: white;
// `
// const MonthRow = styled.th`

// `

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 0,
      month: '',
      monthIdx: 0,
      calendar: []
    }
    this.getCalendarInfo = this.getCalendarInfo.bind(this)
    this.generateCalendar = this.generateCalendar.bind(this)
    this.shiftMonth = this.shiftMonth.bind(this)
    this.listMonths = this.listMonths.bind(this)
  }

  async componentDidMount() {
    await this.getCalendarInfo()
    await this.generateCalendar()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.monthIdx !== this.state.monthIdx) {
      this.generateCalendar()
    }
  }

  listMonths() {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
  }

  getCalendarInfo() {
    const months = this.listMonths()
    let today = new Date()
    let year = today.getFullYear()
    this.setState({year: year})

    let month = today.getMonth()
    this.setState({
      month: months[month]
    })
    this.setState({
      monthIdx: month
    })
  }

  generateCalendar() {
    let today = new Date(`${this.state.month} 1, ${this.state.year}`)
    // today.setFullYear(this.state.year);
    // today.setMonth(this.state.monthIdx);
    let month = today.getMonth()
    // today.setDate(1);
    let first = today.getDay()
    let calendar = []
    while (first) {
      calendar.push('')
      first--
    }
    let date = 1
    while (today.getMonth() === month) {
      calendar.push(date)
      date++
      today.setDate(date)
    }
    while (calendar.length % 7 !== 0) calendar.push('')
    console.log('cal', calendar)
    let gridCal = []
    let week = []
    for (let i = 0; i < calendar.length; i++) {
      week.push(calendar[i])
      if ((i + 1) % 7 === 0) {
        gridCal.push(week)
        week = []
      }
    }
    this.setState({
      calendar: gridCal
    })
  }

  shiftMonth(event) {
    const months = this.listMonths()
    let currMonthIdx
    if (event.target.value === 'left') {
      if (this.state.monthIdx === 0) {
        currMonthIdx = 11
        this.setState(state => {
          return {year: state.year - 1}
        })
        this.setState({monthIdx: currMonthIdx})
        this.setState({month: months[currMonthIdx]})
      } else {
        this.setState(state => {
          return {monthIdx: state.monthIdx - 1}
        })
        this.setState(state => {
          return {month: months[state.monthIdx]}
        })
      }
    }
    if (event.target.value === 'right') {
      if (this.state.monthIdx === 11) {
        currMonthIdx = 0
        this.setState(state => {
          return {year: state.year + 1}
        })
        this.setState({monthIdx: currMonthIdx})
        this.setState({month: months[currMonthIdx]})
      } else {
        this.setState(state => {
          return {monthIdx: state.monthIdx + 1}
        })
        this.setState(state => {
          return {month: months[state.monthIdx]}
        })
      }
    }
  }

  render() {
    console.log(this.state)
    return (
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                value="left"
                onClick={this.shiftMonth}
              >{`<`}</button>
            </th>
            <th colSpan="5">{this.state.month}</th>
            <th>
              <button
                type="button"
                value="right"
                onClick={this.shiftMonth}
              >{`>`}</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>Monday</td>
            <td>Tuesday</td>
            <td>Wednesday</td>
            <td>Thursday</td>
            <td>Friday</td>
            <td>Saturday</td>
          </tr>
          {this.state.calendar.map((week, idx) => (
            <tr key={idx}>{week.map((day, i) => <td key={i}>{day}</td>)}</tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Calendar
