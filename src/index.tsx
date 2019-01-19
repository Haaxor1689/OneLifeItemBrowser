import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
