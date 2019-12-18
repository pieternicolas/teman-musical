import React, { FC, HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import TemanLogo from 'assets/img/teman-logo.png';

const Nav: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <>
      <Navbar expand={false} variant="light">
        <button className="hamburger" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <Image height={25} src={TemanLogo}/>

        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} size="2x"/>
        </NavLink>
      </Navbar>

      {children}
    </>
  );
};

export default Nav;
