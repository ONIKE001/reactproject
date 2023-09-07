

// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//   return <h1>Hello, Yarn and React!</h1>;
// };

// ReactDOM.render(<App />, document.getElementById('root'));





import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;







