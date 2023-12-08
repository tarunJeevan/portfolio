import { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import linkedin from '../assets/linkedin.svg'
import discord from '../assets/discord.svg'
import { CpuFill } from "react-bootstrap-icons"
import { BrowserRouter as Router } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50)
                setScrolled(true)
            else
                setScrolled(false)
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const goToContactMe = () => {
        console.log('Contact me form here!')
    }

    const updateActiveLink = (linkName) => {
        setActiveLink(linkName)
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <CpuFill color="white" size={48} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={e => updateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={e => updateActiveLink('skills')}>
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={e => updateActiveLink('projects')}>
                            Projects
                        </Nav.Link>

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="#">
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href="#">
                                <img src={discord} alt="Discord" />
                            </a>
                        </div>
                        <button className="contact-me-btn" onClick={goToContactMe}>Contact Me</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
