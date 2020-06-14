import React, { Component, Fragment } from 'react';
import moment from 'moment'
import { Badge, UncontrolledTooltip } from 'reactstrap';

import { notificationType, colorScheme, status } from '../../../constants/defaultValues'

export default class NotificationItem extends Component {
  typeRenderer = () => {
    const { item, item: { type } } = this.props
    const color = type === 'ASSIGNED_USER' ? 'primary' : 'light'
    const label = notificationType[type]
    return <Fragment>
      <Badge
        className="d-flex"
        color={color}
        style={{
          fontSize: '11px',
          fontWeight: '500',
          padding: '3px 8px',
          margin: '0 0 0 10px',
          letterSpacing: '1px',
          borderRadius: '20px',
          color: color === 'primary' ? 'white' : 'var(--primary)',
          textTransform: 'uppercase',
          boxShadow: '0 0 3px 0 rgba(0,0,0,.26)',
        }}
      >
        {label}
      </Badge>
      {type === 'ASSIGNED_USER'
        ? <Fragment>
          <div style={{ marginLeft: '10px', fontSize: '14px' }}>
            <i className="fa fa-user-alt" />
          </div>
          <div className="pointer" style={{ marginLeft: '8px', fontWeight: '500', fontSize: '13px', paddingBlock: '3px' }}>
            {'you'}
          </div>
        </Fragment>
        : type === 'DUE_DATE_CHANGED'
          ? <div className="d-flex" style={{ marginLeft: '10px', alignItems: 'center' }}>
            <div style={{ fontSize: '12px', marginRight: '10px' }}>
              <i className="fa fa-calendar-check" />
            </div>
            <div style={{ fontWeight: '400', fontSize: '12px' }}>{moment(item.date).format('MMM D')}</div>
          </div>
          : <Fragment>
            <div style={{ marginLeft: '10px' }}>
              <div className="status" style={{ backgroundColor: colorScheme[item.fromStatus] }}>
                {status[item.fromStatus]}
              </div>
            </div>
            <i className="fa fa-arrow-right" style={{ margin: '0 10px' }} />
            <div>
              <div className="status" style={{ backgroundColor: colorScheme[item.toStatus] }}>
                {status[item.toStatus]}
              </div>
            </div>
          </Fragment>
      }
    </Fragment>
  }
  render() {
    const { item, markAsRead } = this.props
    const { id, task, user, createdAt, unread } = item
    return <div className="notification">
      <div className="item-header">
        <div className="item-title">
          <span id="task_title">{task}</span>
          <UncontrolledTooltip placement="top" autohide target="task_title">
            <div style={{ fontSize: '11px' }}>{"Go To Task"}</div>
          </UncontrolledTooltip>
        </div>
        {unread
          ? <Fragment>
            <div id="mark_as_read" className="item-close" onClick={() => markAsRead(id)}>
              <i className="fa fa-eye-slash" />
            </div>
            <UncontrolledTooltip placement="top" autohide target="mark_as_read">
              <div style={{ fontSize: '11px' }}>{"Mark As Read"}</div>
            </UncontrolledTooltip>
          </Fragment>
          : undefined
        }
      </div>
      <div className="item-body">
        <div>
          <div><i className="fa fa-user-circle" style={{ fontSize: '1.5rem' }} /></div>
          <div className="author">{user}</div>
          <div className="type">{this.typeRenderer()}</div>
          <div className="divider" />
          <div className="time">{moment(createdAt).format('MMM D [at] h:mm a')}</div>
        </div>
      </div>
    </div>
  }
}