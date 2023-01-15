import React from 'react'
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Summary from './components/Summary';
import HomeImage from '../../assets/img/background.jpg';
import { Helmet } from 'react-helmet';
import Boardroom from './components/Boardroom';
import BombFarms from './components/BombFarms';


const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const TITLE = 'bomb.money | Dashboard'

const Dashboard = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Page>
        <BackgroundImage />
              <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Route exact path={path}>
          <Summary/>
          <Boardroom/>
          <BombFarms/>
      </Route>
            
            
      </Page>
    </Switch>
  )
}

export default Dashboard