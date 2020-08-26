import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import u16Singles from '../images/competitions/singles/u16Singles.jpg';
import u18Singles from '../images/competitions/singles/u18Singles.jpg';
import u25Singles from '../images/competitions/singles//u25Singles.jpg';
import championOfChampions from '../images/competitions/singles/championsOfChampions.jpg';
import openSingles from '../images/competitions/singles/openSingles.jpg';
import o60Singles from '../images/competitions/singles/o60Singles.jpg';

import openPairs from '../images/competitions/pairs/openPairs.jpg';
import o60Pairs from '../images/competitions/pairs/o60Pairs.jpg';

import openTriples from '../images/competitions/triples/openTriples.jpg';
import o50Triples from '../images/competitions/triples/o50Triples.jpg';

import openFours from '../images/competitions/fours/openFours.jpg';
import o60Fours from '../images/competitions/fours/o60Fours.jpg';

import championship from '../images/competitions/teamComps/championship.jpg';
import meritLeague from '../images/competitions/teamComps/meritLeague.jpg';
import o60Championship from '../images/competitions/teamComps/o60Championship.jpg';
import teamChampionship from '../images/competitions/teamComps/teamChampionship.jpg';
import koCup from '../images/competitions/teamComps/koCup.jpg';

import '../styles/general.css'
import '../styles/honours.css';

function honours(props) {
    
    return (
        <div>
            <div class="page-title">Honours</div>

            <Tabs defaultActiveKey="singles" id="uncontrolled-tab-example">
                <Tab eventKey="singles" title="Singles">
                    <Row>
                        <Col xs={12} sm={6} lg={4}>
                            <div class="honours">
                                <Image src={u16Singles} /> 
                                <div class="honours-competition">Under 16 Singles</div>
                                <div class="honours-winner">Cory Davies (Merthyr Tydfil)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <div class="honours">
                                <Image src={u18Singles} /> 
                                <div class="honours-competition">Under 18 Singles</div>
                                <div class="honours-winner">Lauren Gowen (Rhondda)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <div class="honours">
                                <Image src={u25Singles} /> 
                                <div class="honours-competition">Under 25 Singles</div>
                                <div class="honours-winner">Ryan Boots (Newport)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <div class="honours">
                                <Image src={openSingles} /> 
                                <div class="honours-competition">Open Singles</div>
                                <div class="honours-winner">Jason Greenslade (Cardiff)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <div class="honours">
                                <Image src={o60Singles} /> 
                                <div class="honours-competition">Over 60 Singles</div>
                                <div class="honours-winner">C Davies (Llanelli)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <div class="honours">
                                <Image src={championOfChampions} /> 
                                <div class="honours-competition">Champion of Champions</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="pairs" title="Pairs">
                    <Row>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={openPairs}/> 
                                <div class="honours-competition">Under 16 Pairs</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={openPairs}/> 
                                <div class="honours-competition">Under 18 Pairs</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={openPairs}/> 
                                <div class="honours-competition">Open Pairs</div>
                                <div class="honours-winner">C Klefenz & S Harris (B Gwent)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={o60Pairs}/> 
                                <div class="honours-competition">Over 60 Pairs</div>
                                <div class="honours-winner">P Bolch & B Potter (Swansea)</div>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="triples" title="Triples">
                    <Row>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={openPairs}/> 
                                <div class="honours-competition">Under 16 Triples</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={openPairs}/> 
                                <div class="honours-competition">Under 18 Triples</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={openTriples}/> 
                                <div class="honours-competition">Open Triples</div>
                                <div class="honours-winner">M Harding, D Doubler & D Salmon (Cardiff)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={o50Triples}/> 
                                <div class="honours-competition">Over 50 Triples</div>
                                <div class="honours-winner">A Wason, P Keating & P Carpenter (C Valley)</div>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="fours" title="Fours">
                    <Row>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={openPairs}/> 
                                <div class="honours-competition">Under 16 Fours</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={openPairs}/> 
                                <div class="honours-competition">Under 18 Fours</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={openFours}/> 
                                <div class="honours-competition">Open Fours</div>
                                <div class="honours-winner">C Davies, S Hilling, M Jackson & J Roberts (Heatherton)</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                            <div class="honours">
                                <Image src={o60Fours}/> 
                                <div class="honours-competition">Over 60 Fours</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="teamCompetitions" title="Team Competitions">
                    <Row>
                        <Col lg={12}>
                            <div class="honours">
                                <Image src={championship}/> 
                                <div class="honours-competition">Championship</div>
                                <div class="honours-winner">Cardiff</div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div class="honours">
                                <Image src={meritLeague}/> 
                                <div class="honours-competition">Merit</div>
                                <div class="honours-winner">Port Talbot</div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div class="honours">
                                <Image src={o60Championship}/> 
                                <div class="honours-competition">Over 60 Championship</div>
                                <div class="honours-winner">Islwyn</div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div class="honours">
                                <Image src={teamChampionship}/> 
                                <div class="honours-competition">Team Championship</div>
                                <div class="honours-winner">Coed Duon</div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div class="honours">
                                <Image src={koCup}/> 
                                <div class="honours-competition">KO Cup</div>
                                <div class="honours-winner">Cardiff</div>
                            </div>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    );
}

export default honours;