import React, { Component } from 'react'
import moment from 'moment'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import { Row, Card, CardBody } from 'reactstrap'

import events from '../../../constants/calendarEvents'
import { colorScheme } from '../../../constants/defaultValues'
import { Colxx } from "../../../common/CustomBootstrap"
import CalendarToolbar from '../components/CalendarToolbar'

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events,
      self: false
    }
  }

  handleStatusChange = (obj) => {
    const { self } = this.state
    let newEvents = events
    newEvents = newEvents.filter(e => self ? e.self === self : true)
    let status = undefined
    if (obj !== null) {
      status = obj
      newEvents = newEvents.filter(({ status }) => status === obj.value)
    }
    this.setState({ events: newEvents, status })
  }

  toggleUser = () => {
    const { self, status } = this.state
    let newEvents = events
    newEvents = newEvents.filter(e => status ? e.status === status.value : true)
    if (!self) {
      newEvents = newEvents.filter(e => !!e.self)
    }
    this.setState({ events: newEvents, self: !self })
  }

  render() {
    const { events, self, status } = this.state
    return (
      <Row className="h-100">
        <Colxx xxs="12">
          <Card className="h-100">
            <CardBody>
              <BigCalendar
                popup
                events={events}
                views={['month']}
                endAccessor={'dueDate'}
                startAccessor={'dueDate'}
                localizer={momentLocalizer(moment)}
                eventPropGetter={({ status }) => ({ 'style': { 'backgroundColor': colorScheme[status] } })}
                components={{
                  toolbar: (props) =>
                    <CalendarToolbar
                      {...props}
                      self={self}
                      event={events}
                      status={status}
                      toggleUser={this.toggleUser}
                      handleStatusChange={this.handleStatusChange}
                    />
                }}
              />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    )
  }
}