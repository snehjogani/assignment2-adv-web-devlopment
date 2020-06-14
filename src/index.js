import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

let render = () => {
  import('./assets/css/index.scss').then(x => {
    require('./AppRenderer');
  });
};
render();