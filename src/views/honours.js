import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import championOfChampions from '../images/championsOfChampions.jpg';
import openSingles from '../images/openSingles.jpg';
import u25Singles from '../images/u25Singles.jpg';

import '../styles/honours.css';

function honours(props) {
    
    return (
        <div>
            <h1>Honours</h1>

            <Tabs defaultActiveKey="openComps" id="uncontrolled-tab-example">
                <Tab eventKey="openComps" title="Open Competitions">
                    <Row>
                        <Col sm={6} lg={4}>
                            <div class="honours">
                                <Image src={championOfChampions} /> 
                                <div class="honours-competition">Champion of Champions</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div class="honours">
                                <Image src={openSingles}/> 
                                <div class="honours-competition">Champion of Champions</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div class="honours">
                                <Image src={u25Singles}/> 
                                <div class="honours-competition">Champion of Champions</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div class="honours">
                                <Image src={championOfChampions} /> 
                                <div class="honours-competition">Champion of Champions</div>
                                <div class="honours-winner">Mark Harding (Cardiff)</div>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="juniorCompetitions" title="Junior Compeitions">
                    <Row>
                        <Col>
                            <div class="honours">
                                <Image src={championOfChampions} /> 
                                <h3>Champion of Champions</h3>
                                <h5>Mark Harding (Cardiff)</h5>
                            </div>
                        </Col>
                        <Col>
                            <div class="honours">
                                <Image src={openSingles}/> 
                                <h3>Open Singles</h3>
                                <h5>Jason Greenslade (Cardiff)</h5>
                            </div>
                        </Col>
                        <Col>
                            <div class="honours">
                                <Image src={u25Singles}/> 
                                <h3>Open Pairs</h3>
                                <h5>Ryan Boots (Newport)</h5>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="seniorCompetitions" title="Senior Competitions">
                    <Row>
                        <Col>
                            <div class="honours">
                                <Image src={championOfChampions} /> 
                                <h3>Champion of Champions</h3>
                                <h5>Mark Harding (Cardiff)</h5>
                            </div>
                        </Col>
                        <Col>
                            <div class="honours">
                                <Image src={openSingles}/> 
                                <h3>Open Singles</h3>
                                <h5>Jason Greenslade (Cardiff)</h5>
                            </div>
                        </Col>
                        <Col>
                            <div class="honours">
                                <Image src={u25Singles}/> 
                                <h3>Open Pairs</h3>
                                <h5>Ryan Boots (Newport)</h5>
                            </div>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    );
}

export default honours;