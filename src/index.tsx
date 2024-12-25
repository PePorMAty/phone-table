import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
<<<<<<< HEAD

=======
>>>>>>> c1d4a06ee2153b7d93cb64373d67a9f6d3d9873f
import { store } from './store/store';

import App from './App';

import './styles/index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
