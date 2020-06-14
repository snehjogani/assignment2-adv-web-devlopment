# Taskatic - Task Management Platform

>Assignment 2 - Adv Web Development

    Date Created: 07 Jun, 2020
    Last Modified: 14 Jun, 2020

### Author

  Jogani Sneh • **B00843383** • <em>sjogani16@dal.ca</em>

### URLs 

Heroku Deployment • [Link](https://taskatik-assignment-2.herokuapp.com/)
GitHub Repository • [Link](https://github.com/snehjogani/assignment2-adv-web-devlopment)

### Content

- `Sign In View`: User sign in view, the first page a user will visit. *Path*: `/user/login`
- `Notifications View`: A List view of all notifications received by a user. *Path*: `/app/notifications`
- `Calendar View` - A full fledged calendar view with all the tasks displayed in the appropriate day blocks based on their due dates. *Path*: `/app/calendar`
- `Profile View` - User profile view. *Path*: `/app/profile`
- `Error View` - A generic error handling view for paths and features still under development. *Path*: `/error`

---

### Development

#### Built with

- [React](https://reactjs.org/): It is a JavaScript view library to develop frontend. It helps us to create attractive single page applications.

- [Visual Studio code](https://code.visualstudio.com/): It is a code-editor to built, debug web, and cloud based applications.

#### Tools & Libraries

- [Create React App](https://github.com/facebook/create-react-app) `[1]`: I used this toolchain to set up the development environment for my React App.

- [reactstrap](https://reactstrap.github.io/) `[2]`: I used this library for styling the UI elements, as it provides a wide variety of easy to use bootstrap 4 components which can directly be use in React components.

- [React-Select](https://react-select.com/home) `[3]`: I used this library for filter UI, as it provides a flexible and beautiful Select input control for ReactJS with multiselect, autocomplete, async and creatable support. 

- [React Big Calendar](https://github.com/jquense/react-big-calendar) `[4]`: I used this library for the calendar view of tasks, as it provides an event calendar component built for React and which works with almost every browser currently available in the marker (including IE 10+). It implements flexbox rather than the classic tables-ception approach.

- [Formik](https://github.com/jaredpalmer/formik) `[5]`: It is small libaray that helps a ton with the most annoying 3 steps of implementing any form, namely, getting and setting values to a form, validaiting and setting error messages, and handling form submission. I used this library for all the forms in the app.

- [Font Awesome](https://fontawesome.com/) `[6]`: I used this toolkit, based on CSS and LESS for my goto icon directory for all the icons i used in the application.

- [React App Polyfill](https://www.npmjs.com/package/react-app-polyfill) `[7]`: I used this package to support the app to run on various browsers such as IE 11 and Microsoft Edge. It includes the polyfills for various browsers, and the minimum requirements, and commonly used languages by React projects.

#### Scripts

In the app directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

---

### Deployment

The web app is on [Heroku](https://dashboard.heroku.com/), using `heroku CLI` with `--buildpack` [7]. Auto deployments are enabled on the `master` branch.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

### Sources Used

- [1] Facebook, Inc., "Create React App," [Online]. Available: https://github.com/facebook/create-react-app. [Accessed 07 Jun 2020].

- [2] reactstrap, "reactstrap documentation," [Online]. Available: https://reactstrap.github.io/components/alerts/. [Accessed 07 Jun 2020].

- [3] Jed Watson, "React Select," 2019. [Online]. Available: https://react-select.com/home. [Accessed: 13 Jun 2020].

- [4] jquense, "Big Calendar," [Online]. Available: http://jquense.github.io/react-big-calendar/examples/index.html. [Accessed: 12 Jun 2020].

- [5] jaredpalmer, "Formik," [Online]. Available: https://github.com/jaredpalmer/formik. [Accessed: 07 Jun 2020].

- [6] Fonticons, Inc., "fontawesome," [Online]. Available: https://fontawesome.com/. [Accessed 08 Jun 2020].

- [7] The Financial Times Ltd., "Polyfill.io," [Online]. Available: https://www.npmjs.com/package/react-app-polyfill. [Accessed: 14 Jun 2020].

- [8] M. Hall, "Heroku Buildpack for create-react-app," [Online]. Available: https://github.com/mars/create-react-app-buildpack. [Accessed 14 Jun 2020].

---

#### File: `/src/views/app/components/CalendarToolbar.js`

`Lines 10 - 38`

```js
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
```
The above code snippet was taken from `[3]`, as it provided in the documentaion to achieve the exact same purpose of styling the select input's dropdown items based on colors specific to each item.
```js
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
      },
    };
```

#### File: `/src/views/app/components/CalendarToolbar.js`

```js
const now = new Date()
const month = now.getMonth()

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    self: true,
    status: 'CLOSED',
    dueDate: new Date(2020, month, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    status: 'READY',
    dueDate: new Date(2020, month, 7),
  },

  {
    id: 2,
    title: 'DTS dueDateS',
    status: 'PENDING',
    dueDate: new Date(2016, month, 13, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    status: 'PENDING',
    dueDate: new Date(2016, month, 6, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    self: true,
    status: 'REVIEW',
    dueDate: new Date(2020, month, 9, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 11),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 12, 10, 50, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    status: 'READY',
    dueDate: new Date(2020, month, 12, 12, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 12, 14, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    status: 'READY',
    dueDate: new Date(2020, month, 12, 17, 0, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    status: 'READY',
    self: true,
    dueDate: new Date(2020, month, 12, 20, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    status: 'CLOSED',
    dueDate: new Date(2020, month, 13, 7, 0, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    self: true,
    status: 'PENDING',
    dueDate: new Date(2020, month, 17, 19, 50, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    status: 'PENDING',
    dueDate: new Date(2020, month, 17, 19, 50, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    self: true,
    status: 'OPEN',
    dueDate: new Date(2020, month, 20, 19, 50, 0),
  },
  {
    id: 14,
    title: 'Today',
    self: true,
    status: 'IN_PROGRESS',
    dueDate: new Date(new Date().setHours(new Date().getHours() - 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    status: 'IN_PROGRESS',
    dueDate: now,
  },
  {
    id: 16,
    title: 'Video Record',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 14, 15, 50, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    status: 'STAGED',
    dueDate: new Date(2020, month, 14, 16, 50, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    status: 'REVIEW',
    dueDate: new Date(2020, month, 14, 16, 50, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    status: 'REVIEW',
    dueDate: new Date(2020, month, 17, 17, 50, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 17, 17, 0, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 18, 17, 0, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 21, 17, 50, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    status: 'IN_PROGRESS',
    dueDate: new Date(2020, month, 27, 18, 50, 0),
  },
]
```
The above file was adapted from `[4]` [file](https://github.com/jquense/react-big-calendar/blob/master/examples/events.js) shwon below, as dummy data for generating events for the calendar view.

```js
const now = new Date()

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
]
```