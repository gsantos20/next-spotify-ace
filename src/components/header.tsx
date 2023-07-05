/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
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
  NavList
} from '../styles/components/header'

const Header: React.FC = (props: HeaderProps) => {
  return (
    <div>
      <GlobalHeaderStyle />
      <TagHeader>
        <NavClose
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nav-menuTCC"
          aria-controls="nav-menuTCC"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </NavClose>
        <Nav id="nav-menuTCC">
          <NavContent>
            <NavClose
              className="navbar-toggler nav-closeTCC"
              type="button"
              data-toggle="collapse"
              data-target="#nav-menuTCC"
              aria-controls="nav-menuTCC"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></NavClose>

            <NavPerfil>
              <NavImage>
                <a href="/">
                  <img src="images/ace.png" alt="" />
                </a>
              </NavImage>
            </NavPerfil>

            <NavMenu>
              <NavList>
                <NavItem>
                  <NavLink href="quemsomos">Quem Somos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="novidades">Novidades</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="propostas">Propostas</NavLink>
                </NavItem>
              </NavList>
            </NavMenu>

            <div className="pt-0">
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
