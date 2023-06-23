// pages/_app.js

import { Provider } from 'react-redux';
import store from '../src/store';
import Navbar from '../src/component/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Navbar/>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
