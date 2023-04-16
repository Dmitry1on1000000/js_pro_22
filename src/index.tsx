import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
<BrowserRouter>{/* <BrowserRouter>  это мы подключили роутинг */}
      <Provider store={store}>{/* <Provider>  это мы подключили store и тем самым подключили Redux */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
