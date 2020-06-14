import React, { Component } from 'react';

import notificaitons from '../../../constants/notifications';
import NotificationItem from '../components/NotificationItem'

export default class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNew: true,
      notificaitons
    }
  }

  toggleRead = () => {
    this.setState({ showNew: !this.state.showNew })
  }

  markAsRead = (id) => {
    const { notificaitons } = this.state
    this.setState({
      notificaitons: notificaitons.map(item => item.id === id ? ({ ...item, unread: false }) : item)
    })
  }

  render() {
    const { showNew, notificaitons } = this.state
    return (
      <div className="notification-container">
        <div className="notification-header">
          <span className="title">Notifications</span>
        </div>
        <div className="notification-sub-header">
          <div className="d-flex" style={{ alignItems: 'center' }}>
            <div
              className={`sub-header-item${showNew ? '-selected' : ''}`}
              onClick={() => !showNew ? this.toggleRead() : null}
            >
              {"New"}
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div
              className={`sub-header-item${!showNew ? '-selected' : ''}`}
              onClick={() => showNew ? this.toggleRead() : null}
            >
              {"Cleared"}
            </div>
          </div>
        </div>
        <div className="notification-body">
          {notificaitons.filter(({ unread }) => unread === showNew).length
            ? notificaitons
              .filter(({ unread }) => unread === showNew)
              .map(item => <NotificationItem key={item.id} item={item} markAsRead={this.markAsRead} />)
            : showNew
              ? <div className="no-record-message">{"\"You're all caught up\""}</div>
              : null
          }
        </div>
      </div>
    )
  }
}