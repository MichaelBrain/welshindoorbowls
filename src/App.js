import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/content.css';

import Nav from './Components/Nav/Nav';

import honours from './views/honours';
import u18sTeam from './views/teams/u18sTeam';
import u25sTeam from './views/teams/u25sTeam';
import internationalTeam from './views/teams/internationalTeam';
import o50sTeam from './views/teams/o50sTeam';
import championship from './views/leagues/championship';
import merit from './views/leagues/merit';
import o60sChampionship from './views/leagues/o60sChampionship';
import teamChampionship from './views/leagues/teamChampionship';
import koCup from './views/leagues/koCup';
import u25Singles from './views/competitions/u25Singles';
import openSingles from './views/competitions/openSingles';
import openPairs from './views/competitions/openPairs';
import openTriples from './views/competitions/openTriples';
import openFours from './views/competitions/openFours';
import o50Triples from './views/competitions/o50Triples';
import o60Singles from './views/competitions/o60Singles';
import o60Pairs from './views/competitions/o60Pairs';
import o60Fours from './views/competitions/o60Fours';
import ybSingles from './views/youngbowlers/singles';
import ybPairs from './views/youngbowlers/pairs';
import ybTriples from './views/youngbowlers/triples';
import ybFours from './views/youngbowlers/fours';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Container fluid="lg">
          <Row>
            <Col className="content-section">
              <Switch>
                <Route path="/honours" component={honours} exact/>

                <Route path="/teams/u18sTeam" component={u18sTeam} exact/>
                <Route path="/teams/u25sTeam" component={u25sTeam} exact />
                <Route path="/teams/internationalTeam" component={internationalTeam} exact/>
                <Route path="/teams/o50sTeam" component={o50sTeam} exact />

                <Route path="/leagues/championship" component={championship} exact/>
                <Route path="/leagues/merit" component={merit} exact />
                <Route path="/leagues/o60sChampionship" component={o60sChampionship} exact/>
                <Route path="/leagues/teamChampionship" component={teamChampionship} exact />
                <Route path="/leagues/koCup" component={koCup} exact />

                <Route path="/competitions/u25Singles" component={u25Singles} exact/>
                <Route path="/competitions/openSingles" component={openSingles} exact />
                <Route path="/competitions/openPairs" component={openPairs} exact/>
                <Route path="/competitions/openTriples" component={openTriples} exact />
                <Route path="/competitions/openFours" component={openFours} exact />
                <Route path="/competitions/o50Triples" component={o50Triples} exact />
                <Route path="/competitions/o60Singles" component={o60Singles} exact />
                <Route path="/competitions/o60Pairs" component={o60Pairs} exact/>
                <Route path="/competitions/o60Fours" component={o60Fours} exact />

                <Route path="/youngBowlers/singles" component={ybSingles} exact />
                <Route path="/youngBowlers/pairs" component={ybPairs} exact/>
                <Route path="/youngBowlers/triples" component={ybTriples} exact />
                <Route path="/youngBowlers/fours" component={ybFours} exact />
              </Switch>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;