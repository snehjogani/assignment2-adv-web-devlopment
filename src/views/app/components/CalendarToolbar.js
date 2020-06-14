import React, { Component } from 'react'
import chroma from 'chroma-js'
import Select from 'react-select'
import { Navigate } from 'react-big-calendar'
import { ButtonToggle, Tooltip, UncontrolledTooltip } from 'reactstrap'

import { colorScheme, status as taskStatus } from '../../../constants/defaultValues'

export default class Calendar extends Component {
  selectStyles = () => ({
    control: style => ({ width: '175px', ...style }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
            ? data.color
            : isFocused
              ? color.alpha(0.1).css()
              : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        }
      }
    }
  })

  selectOptions = () => {
    return Object
      .keys(taskStatus)
      .map(value => ({ value, label: taskStatus[value], color: colorScheme[value] }))
  }

  render() {
    const { self, status, onNavigate, label, toggleUser, handleStatusChange } = this.props
    return <div className="d-flex justify-content-between mb-3" style={{ zIndex: 100 }}>
      <div className="d-flex">
        <h4 className="mb-0 pt-1 pr-2">{label}</h4>
        <span className="pointer pt-2 px-2" onClick={() => onNavigate(Navigate.TODAY)}>
          {"Today"}
        </span>
        <span
          id="previous_month"
          className="pointer pt-1 px-2"
          style={{ color: 'gray', fontSize: '1.25rem', }}
          onClick={() => onNavigate(Navigate.PREVIOUS)}
        >
          <i className="fa fa-chevron-circle-left" />
        </span>
        <UncontrolledTooltip placement="bottom" autohide target="previous_month">
          <div style={{ fontSize: '11px' }}>{"Previous Month"}</div>
        </UncontrolledTooltip>
        <span
          id="next_month"
          className="pointer pt-1 px-2"
          style={{ color: 'gray', fontSize: '1.25rem', }}
          onClick={() => onNavigate(Navigate.NEXT)}
        >
          <i className="fa fa-chevron-circle-right" />
        </span>
        <UncontrolledTooltip placement="bottom" autohide target="next_month">
          <div style={{ fontSize: '11px' }}>{"Next Month"}</div>
        </UncontrolledTooltip>
      </div>
      <div className="d-flex">
        <Select
          isClearable
          value={status}
          placeholder="Status"
          onChange={handleStatusChange}
          styles={this.selectStyles()}
          options={this.selectOptions()}
        />
        <ButtonToggle
          outline
          id="task_toggle_btn"
          active={self}
          className="ml-3"
          color="primary"
          onClick={toggleUser}>
          <i className="fa fa-user pr-2" />{"Me"}
        </ButtonToggle>
        <UncontrolledTooltip placement="bottom" autohide target="task_toggle_btn">
          <div style={{ fontSize: '11px' }}>{self ? "Show Everyone's Tasks" : "Show My Tasks"}</div>
        </UncontrolledTooltip>
      </div>
    </div>
  }
}