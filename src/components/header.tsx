/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react'
import {
  GlobalHeaderStyle,
  HeaderProps,
  TagHeader,
  NavContent,
  NavPerfil,
  NavImage,
  NavMenu,
  NavItem,
  NavLink,
  Nav,
  NavSocial,
  IconX,
  NavClose,
  NavList,
  NavToggle
} from '../styles/components/header'

const Header: React.FC = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen)
    }, 100)
  }

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 500)
  }

  const handleLinkClick = () => {
    // Remove menu mobile
    setIsMenuOpen(false)
  }

  return (
    <div>
      <GlobalHeaderStyle />
      <TagHeader>
        <NavToggle
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nav-menuTCC"
          aria-controls="nav-menuTCC"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <i className="bi bi-list text-white fs-3"></i>
        </NavToggle>
        <Nav id="nav-menuTCC" className={isMenuOpen ? 'show' : ''}>
          <NavContent>
            <div className="d-flex justify-content-between align-items-center">
              <NavPerfil>
                <NavImage>
                  <a href="/">
                    <img src="images/ace.png" alt="" />
                  </a>
                </NavImage>
              </NavPerfil>

              <div>
                <NavClose
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#nav-menuTCC"
                  aria-controls="nav-menuTCC"
                  aria-expanded="false"
                  aria-label="Close navigation"
                  onClick={closeMenu}
                >
                  <i className="bi bi-x-circle fs-4"></i>
                </NavClose>
              </div>
            </div>
            <NavMenu>
              <NavList>
                <NavItem>
                  <NavLink href="quemsomos" onClick={handleLinkClick}>
                    Quem Somos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="novidades" onClick={handleLinkClick}>
                    Novidades
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="propostas" onClick={handleLinkClick}>
                    Propostas
                  </NavLink>
                </NavItem>
              </NavList>
            </NavMenu>

            <div className="pt-0 p-3">
              <NavSocial
                href="https://www.instagram.com/chapa.a.c.e/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </NavSocial>
              <NavSocial
                href="https://www.tiktok.com/@chapa.ace"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-tiktok"></i>
              </NavSocial>
              <NavSocial
                href="#"
                id="btnMusic"
                // </div>onClick={}
              >
                <i className="bi bi-file-music-fill"></i>
              </NavSocial>
            </div>
          </NavContent>

          <IconX className="row" id="iconX">
            <div className="col-md-6"></div>
          </IconX>
        </Nav>
      </TagHeader>
    </div>
  )
}

export default Header
