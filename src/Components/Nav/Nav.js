import React from 'react';

import NavItems from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import wibalogo from '../../images/wiba9.jpg';

import './Nav.css'

const nav = props => (
    <Container fluid>
        <Row className="nav-header">
            <div class="nav-logo">
                <Image src={wibalogo} roundedCircle /> 
            </div>
            <div class="nav-company-name">
                <h4> Welsh Indoor Bowls Association </h4>
            </div>
        </Row>
        <Row>
            <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <NavItems className="mr-auto">
                    <NavItems.Link href="/honours">Honours</NavItems.Link>
                    <NavDropdown title="Teams" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/teams/u18sTeam">U18 Team</NavDropdown.Item>
                        <NavDropdown.Item href="/teams/u25sTeam">U25 Team</NavDropdown.Item>
                        <NavDropdown.Item href="/teams/internationalTeam">International Team</NavDropdown.Item>
                        <NavDropdown.Item href="/teams/o50sTeam">O50 Team</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Leagues" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/leagues/championship">Championship</NavDropdown.Item>
                        <NavDropdown.Item href="/leagues/merit">Merit League</NavDropdown.Item>
                        <NavDropdown.Item href="/leagues/o60sChampionship">O60s Championship</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/leagues/teamChampionship">Team Championship</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/leagues/koCup">KO Cup</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Competitions" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/competitions/u25Singles">U25 Singles</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/competitions/openSingles">Open Singles</NavDropdown.Item>
                        <NavDropdown.Item href="/competitions/openPairs">Open Pairs</NavDropdown.Item>
                        <NavDropdown.Item href="/competitions/openTriples">Open Triples</NavDropdown.Item>
                        <NavDropdown.Item href="/competitions/openFours">Open Fours</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/competitions/o50Triples">O50 Triples</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/competitions/o60Singles">O60 Singles</NavDropdown.Item>
                        <NavDropdown.Item href="/competitions/o60Pairs">O60 Pairs</NavDropdown.Item>
                        <NavDropdown.Item href="/competitions/o60Fours">O60 Fours</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Young Bowlers" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/youngBowlers/singles">Singles</NavDropdown.Item>
                        <NavDropdown.Item href="/youngBowlers/pairs">Pairs</NavDropdown.Item>
                        <NavDropdown.Item href="/youngBowlers/triples">Triples</NavDropdown.Item>
                        <NavDropdown.Item href="/youngBowlers/fours">Fours</NavDropdown.Item>
                    </NavDropdown>
                </NavItems>
                <NavItems>
                    <NavItems.Link href="/about">About</NavItems.Link>
                    <NavItems.Link href="/calendar">Calendar</NavItems.Link>
                    <NavItems.Link href="/clubs">Clubs</NavItems.Link>
                    <NavItems.Link href="/links">Links</NavItems.Link>
                </NavItems>
                </Navbar.Collapse>
            </Navbar>
        </Row>
    </Container>
);

export default nav;