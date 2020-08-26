import React from 'react';

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/general.css'
import '../../styles/teams.css';

function u25sTeam(props) {
    return (
        <div>
           <div class="page-title">U25 Team</div>
            <Row className="justify-content-sm-center">
                <Col lg={12}>
                    <div class="description">
                        Well done to all those selected to represent Wales at the Under 25s at the Junior British Isles Championships.

                        <div class="description-info">
                            Venue: Stanley IBC, Durham
                        </div>
                        <div class="description-info">
                            Date: February 15th/16th 2020
                        </div>
                        <div class="description-info-other">
                            To all players and reserves you are required to attend practice Match at Llanelli on Sunday 9th Febuary Commencing at 10am. 
                            Dress code is International shirts and white trousers.
                            Please arrive no later than 9:45.
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={10}>
                    <Table borderless responsive size="sm">
                        <tbody class="team-captain">
                            <tr>
                                <td class="table-heading">Captain</td>
                                <td class="table-heading">Director of Bowls</td>
                            </tr>
                            <tr>
                                <td>Kristian Crocker (Islwyn)</td>
                                <td>Stephen Rees (07581654122)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm={10} md={6} lg={5}>
                    <Table variant="dark" bordered responsive size="sm">
                        <thead>
                            <tr class="table-heading">
                                <td></td>
                                <td> Rink 1 </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="table-heading">Lead</td>
                                <td>Joe Coles (Cardiff)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Dion Peregrine (Llanelli)*</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>Tom Sims (Rhondda)*</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>Kristian Crocker (Islwyn)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm={10} md={6} lg={5}>
                    <Table variant="dark" bordered responsive size="sm">
                        <thead>
                            <tr class="table-heading">
                                <td></td>
                                <td> Rink 2 </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="table-heading">Lead</td>
                                <td>Daniel Seabourne (Heatherton)*</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Josh Boyce (Newport)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>Ethan Humphreys (Merthyr Tydfil)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>Jack Breen (Cynon Valley)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm={10} md={6} lg={5}>
                    <Table variant="dark" bordered responsive size="sm">
                        <thead>
                            <tr class="table-heading">
                                <td></td>
                                <td> Rink 3 </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="table-heading">Lead</td>
                                <td>Cameron White (Heatherton)#</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Rhys Colwill (Port Talbot)*</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>Nathan Rees (Merthyr Tydfil)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>Mike Brain (Port Talbot)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm={10} md={6} lg={5}>
                    <Table variant="dark" bordered responsive size="sm">
                        <thead>
                            <tr class="table-heading">
                                <td></td>
                                <td> Rink 4 </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="table-heading">Lead</td>
                                <td>Ben Matthews (Llanelli)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Ryan Boots (Newport)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>Jordan Driscoll (Llanelli)#</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>Ryan Davies (Radnor)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>                
            </Row>
            <Row className="justify-content-sm-center">
                <Col sm={8} md={5} lg={4}>
                    <Table variant="dark" bordered responsive size="sm">
                        <thead>
                            <tr class="table-heading">
                                <td> Reserves</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rhys Roberts (Port Talbot)</td>
                            </tr>
                            <tr>
                                <td>Chadd Bowling (Llanelli)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}

export default u25sTeam;