import React, { ReactNode, FC } from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

interface NavProps {
  children: ReactNode;
};

const Nav: FC<NavProps> = ({
  children,
}) => {
  return (
    <>
      <Navbar expand="lg" variant="light">
        <NavbarToggle as="div">
          <button className="hamburger" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </NavbarToggle>

        <p>Placeholder Logo</p>

        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} size="2x"/>
        </NavLink>
      </Navbar>

      {children}
    </>
  );
};

export default Nav;
