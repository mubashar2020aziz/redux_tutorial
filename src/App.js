import React from 'react';
import LoginForm from './component/LoginForm';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewData from './component/ViewData';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/view" element={<ViewData />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
