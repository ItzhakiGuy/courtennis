import React from "react";
// import { Component } from "react";
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
// import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { FaBars } from 'react-LEE_icons/fa';
import logo from '../assets/icons/310075.svg';

const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    z-index: 10;
`;

const NavIcon = styled(Link)`
    max-width: 80px;
    max-height: 80px;
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    padding: 1rem;
    cursor: pointer;
`;

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color: #15cdfc;
    }
`; 

const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export function Navbar() {
    return (
        <Nav>
          <NavIcon to="/">
            <svg src={logo} style={{maxHeight: 80, maxWidth: 80,}} alt='logo' />
          </NavIcon>
          <Bars />
          <NavMenu> 
              <NavLink to="/browse" activeStyle> Browse
              </NavLink>
              <NavLink to="/about" activeStyle> About
              </NavLink>
              <NavLink to="/contactus" activeStyle> Contact us 
              </NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/signin'>Sign in</NavBtnLink>
              <NavBtnLink to='/register'>Register</NavBtnLink>
          </NavBtn>
        </Nav>
    );
}