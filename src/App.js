import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route path="/" exact component={PostsDisplay} />
        <Route path="/create" component={CreatePost} />
        <Route path="/edit/:id" component={CreatePost} />
      </Switch>
    </div>
  </Router>
);

export default App;
