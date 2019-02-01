import React from 'react';
import { BrowserRouter, MemoryRouter ,HashRouter ,Route, Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
          HOME
          <br/>
          <Link to="/pageone">Navigate to Page One</Link>
          <br/>
          <Link to="/pagetwo">Navigate to Page Two</Link>
        </div>
    )
};

const PageOne = () => {
    return (
        <div>
          PageOne
          <br/>
          <Link to="/">Navigate to Home</Link>
          <br/>
          <Link to="/pagetwo">Navigate to Page Two</Link>
        </div>
    )
};

const PageTwo = () => {
    return (
        <div>
          PageTwo
          <br/>
          <Link to="/">Navigate to Home</Link>
          <br/>
          <Link to="/pageone">Navigate to Page One</Link>
        </div>
    )
};

const App = () => {
    return (
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/pageone" component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
          </div>
        </BrowserRouter>
    )
};

export default App;