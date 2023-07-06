/* eslint @typescript-eslint/no-empty-interface: "off" */

import styled, { createGlobalStyle } from 'styled-components'

export interface HeaderProps {}

export const GlobalHeaderStyle = createGlobalStyle`
  /*Aparecer menu*/
  nav.show {
    left: 0;
    width: 100%;
  }
`

export const TagHeader = styled.header`
  width: 100%;
  height: var(--headerTOPMENU-height);
  top: 0;
  left: 0;
  padding: 0 1.5rem;
  background-color: #360000;
  z-index: var(--z-fixed);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    height: calc(var(--headerTOPMENU-height) + 1.5rem);
  }
`

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: -100%;
    background-color: var(--dark-color);
    color: var(--white-color);
    height: 100%;
    padding: 1.5rem 0;
    z-index: var(--z-fixed);
    -webkit-transition: 0.5s;
    transition: 0.5s ease-out;
    overflow: hidden;
    padding-top: 1.5% !important;
  }
`

export const NavContent = styled.div`
  @media screen and (min-width: 768px) {
    -ms-grid-columns: (max-content) [3];
    grid-template-columns: repeat(3, -webkit-max-content);
    grid-template-columns: repeat(3, max-content);
    -ms-grid-rows: 1fr;
    grid-template-rows: 1fr;
    -webkit-column-gap: 1rem;
    column-gap: 1rem;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
  }

  height: 100%;
  -ms-grid-rows: max-content 1fr max-content;
  grid-template-rows: -webkit-max-content 1fr -webkit-max-content;
  grid-template-rows: max-content 1fr max-content;

  max-width: 1024px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 100%;
  grid-template-columns: 100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  align-content: center;

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`
export const NavToggle = styled.button`
  font-size: 1.5rem;
  color: var(--white-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavClose = styled.button`
  font-size: 1.3rem;
  padding: 0.25rem;
  background-color: var(--dark-color-alt);
  border-radius: 50%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none !important;
  }
`

export const NavPerfil = styled.div`
  @media screen and (min-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: -1.1rem;
  }
`

export const NavImage = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 0.25rem;
  margin-bottom: 0.8rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 0.5rem;
    margin-bottom: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
`

export const SrcImg = styled.div`
  @media screen and (min-width: 768px) {
    width: 50px;
    margin-bottom: 10px;
  }
`

export const NavMenu = styled.div`
  align-self: end;
  padding-bottom: 2rem;

  @media screen and (min-width: 768px) {
    align-self: center;
    padding-bottom: 0;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
  }
`

export const NavList = styled.ul`
  @media screen and (min-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    gap: 2.5rem;
    height: 100%;
  }
`

export const NavItem = styled.li`
  margin: 2.5rem 0;
`
export const NavLink = styled.a`
  padding: 0.5rem 0.8rem;
  border-radius: 0.25rem;
  color: white !important;
`
export const NavSocialMenu = styled.div`
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

export const NavSocial = styled.a`
  font-size: 1.4rem;
  color: var(--white-color);
  margin-right: 1rem;
  color: white !important;
`

export const IconX = styled.div`
  display: none;
  color: white;
`
