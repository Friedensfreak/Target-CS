import { Typography } from '@material-ui/core';
import React, {Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Layout from './Layout'
import { TRANSITS_LIST } from "configurations/componentsConfig"

function App() {
  return (
    <Layout>
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Switch>
          {
            TRANSITS_LIST.map((page, index) => 
              (<Route key={index} path={page.path} component={page.component}/>))
          }
          {/* <Route render={() => (<h1>404 Not Found</h1>)} /> */}
          <Redirect path="/" to={'/bus'} />
        </Switch>
      </Suspense>
    </Layout> 
  );
}

export default App;