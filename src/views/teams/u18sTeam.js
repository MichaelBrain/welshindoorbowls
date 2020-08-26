import React from 'react';

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/general.css'
import '../../styles/teams.css';

function u18sTeam(props) {
    return (
        <div>
            <div class="page-title">U18s Team</div>
            <Row className="justify-content-sm-center">
                <Col lg={12}>
                    <div class="description">
                        Well done to all those selected to represent Wales at the Under 18 Mixed International Series.
                        <div class="description-info">
                            Venue: Inverclyde
                        </div>
                        <div class="description-info">
                            Date: Friday 11th to Sunday 13th October 2019
                        </div>
                    </div>
                </Col>
                <Col sm={10} md={6} lg={5}>
                    <Table variant="dark" bordered responsive size="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Team A</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Singles</td>
                                <td>Lauren Gowen</td>
                            </tr>
                            <tr>
                                <td>Pairs</td>
                                <td>Lewys Lavelle & Dion Peregrine</td>
                            </tr>
                            <tr>
                                <td>Triples</td>
                                <td>Lauren Gowen, Alex Morgan & Ellis Thomas</td>
                            </tr>
                            <tr>
                                <td>Fours</td>
                                <td>Lewys Lavelle, Alex Morgan, Ellis Thomas & Dion Peregrine</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td colSpan="2">Reserve: Billy Flynn</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm={10} md={6} lg={5}>
                    <Table variant="dark" bordered responsive size="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Team B</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Singles</td>
                                <td>Rhys Colwill</td>
                            </tr>
                            <tr>
                                <td>Pairs</td>
                                <td>Tegan Rees & Tom Sims</td>
                            </tr>
                            <tr>
                                <td>Triples</td>
                                <td>Oliver Witchell, Jack Mounty & Rhys Colwill</td>
                            </tr>
                            <tr>
                                <td>Fours</td>
                                <td>Oliver Witchell, Tegan Rees, Jack Mounty & Tom Sims</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>Reserve: Olivia Jackson</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}

export default u18sTeam;