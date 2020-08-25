import React from 'react';
import './App.css';
import Homepage from "./homepage";
import CategoryPage from './category-page';
import ArticlePage from './article-page';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:category" render={props => {
              const {
                match: {
                  params: { category }
                }
              } = props;
              return (
                <CategoryPage
                  key={`category=${category}`}
                  {...props}
                />
              );
            }} />
          <Route exact path="/:category/:postId" render={props => {
              const {
                match: {
                  params: { category, postId }
                }
              } = props;
              return (
                <ArticlePage
                  key={`category=${category}&postId=${postId}`}
                  {...props}
                />
              );
            }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
