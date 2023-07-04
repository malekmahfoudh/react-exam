// App.js
import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import StartPage from "../pages/StartPage";
import QuotePage from "../pages/QuotePage";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/quote/:id" component={QuotePage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
