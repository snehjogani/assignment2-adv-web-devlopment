import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

let render = () => {
  import('./assets/css/index.scss').then(x => {
    require('./AppRenderer');
  });
};
render();