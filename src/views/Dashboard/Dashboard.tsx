import React from 'react'
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
// eslint-disable-next-line
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
// import PageHeader from '../../components/PageHeader';
// import styled from 'styled-components';
// import Spacer from '../../components/Spacer';
// import useBondStats from '../../hooks/useBondStats';
// import useBombFinance from '../../hooks/useBombFinance';
// import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
// import {useTransactionAdder} from '../../state/transactions/hooks';
// import useTokenBalance from '../../hooks/useTokenBalance';
// import useBondsPurchasable from '../../hooks/useBondsPurchasable';
// import {getDisplayBalance} from '../../utils/formatBalance';
// import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN } from '../../bomb-finance/constants';
// import { Grid, Box } from '@material-ui/core';
import HomeImage from '../../assets/img/background.jpg';
import { Helmet } from 'react-helmet';

// const style = {
//     color : "white",
// }

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const TITLE = 'bomb.money | Dashboard'

const dashboard = () => {
  // const { path } = useRouteMatch();
  return (
    <Switch>
      <Page>
        <BackgroundImage />
              <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {/* <Route exact path={path}>
              <PageHeader icon={'💣'} title="Buy &amp; Redeem Bonds" subtitle="Earn premiums upon redemption" />
            </Route> */}
              
          <h1> hiiiiiiiiiii, Let's start </h1>
            
      </Page>
    </Switch>
  )
}

export default dashboard