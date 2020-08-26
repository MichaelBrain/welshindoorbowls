import React from 'react';

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/general.css'
import '../../styles/teams.css';

function internationalTeam(props) {
    return (
        <div>
            <div class="page-title">Interational Team</div>
            <Row className="justify-content-sm-center">
                <Col lg={12}>
                    <div class="description">
                        The following team has been selected to represent Wales at the 2020 International Series.
                        <div class="description-info">
                            Venue: Llanelli IBC
                        </div>
                        <div class="description-info">
                            Date: March 12th, 13th & 14th 2020
                        </div>
                        <div class="description-info-other">
                            All players are to attend a practice match v Civil Service at Llanelli on Saturday February 8th at 2pm. Players to report by 1:30pm.
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
                                <td>David Kingdon (Llanelli)</td>
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
                                <td>John Ackland (Cardiff)*</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Sam Roff (Radnor)#</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>Steve Harris (Blaenau Gwent)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>Daniel Salmon (Cardiff)</td>
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
                                <td>Gavin Rees (Swansea)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Dale McCarthy (Port Talbot)#</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>Mike Brain (Port Talbot)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>David Kingdon (Llanelli)</td>
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
                                <td>Owain Dando (Blaenau Gwent)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Dai Prosser (Cynon Valley)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>Ian Henderson (Islwyn)#</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>Jonathon Tomalinson (Balenau Gwent)#</td>
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
                                <td>Lee Daniels (Port Talbot)#</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Damian Doubler (Cardiff)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>David Harding (Cardiff)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>Jason Greenslade (Cardiff)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm={10} md={6} lg={5}>
                    <Table variant="dark" bordered responsive size="sm">
                        <thead>
                            <tr class="table-heading">
                                <td></td>
                                <td> Rink 5 </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="table-heading">Lead</td>
                                <td>Jordan Davies (Cynon Valley)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Matthew Partridge (Llanelli)#</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>Ben Thomas (Port Talbot)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>Ross Owen (Cynon Valley)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>     
                <Col sm={10} md={6} lg={5}>
                    <Table variant="dark" bordered responsive size="sm">
                        <thead>
                            <tr class="table-heading">
                                <td></td>
                                <td> Rink 6 </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="table-heading">Lead</td>
                                <td>Ben Matthews (Llanelli)*</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Second</td>
                                <td>Mike Jackson (Heatherton)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Third</td>
                                <td>Liam Stone (Cynon Valley)</td>
                            </tr>
                            <tr>
                                <td class="table-heading">Skip</td>
                                <td>Jarred Breen (Cynon Valley)</td>
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
                                <td>Mark Lewis (Islwyn)</td>
                            </tr>
                            <tr>
                                <td>Daniel Seabourne (Heatherton)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}

export default internationalTeam;