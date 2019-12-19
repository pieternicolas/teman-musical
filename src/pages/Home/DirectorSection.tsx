import React, { FC } from 'react';
import styled from 'styled-components';

import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import AccordionToggle, { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import directorBtnImg from 'assets/img/buttons/director.gif';

const StyledAccordionContent = styled.div`
  margin: 10px -15px 0;
  padding: 30px 15px;
  background-color: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.white};
  text-align: center;
`;

const StyledAngleUp = styled(FontAwesomeIcon)`
  color: ${props => props.theme.color.orange};
  margin-top: 10px;
`;

const AngleUpBtn: FC = () => {
  const handleOnClick = useAccordionToggle('0', () => {});

  return (
    <StyledAngleUp onClick={handleOnClick} icon={faAngleUp} size="2x"/>
  );
}

const DirectorBtn: FC = () => {
  const handleOnClick = useAccordionToggle('0', () => {});

  return (
    <div className="d-flex justify-content-center">
      <Image src={directorBtnImg} onClick={handleOnClick}/>
    </div>
  );  
};

const DirectorSection: FC = () => {
  return (
    <section className="margin-top-30">
      <Accordion>
        <AccordionToggle eventKey="0" as={DirectorBtn}>
        </AccordionToggle>
        <AccordionCollapse eventKey="0">
          <StyledAccordionContent>
            <h3 className="font-pixel">
              BrAndoN BiEbeR
            </h3>

            <h4 className="font-pixel">
              Brandon Bieber (3 Legged Man/Spectator/Suitor/Reporter/Party Guest/Priest/Texan/Bearded Lady with Schlitzie/Dance Captain/ u/s Buddy Foster). Broadway: Anything Goes, Follies, Mary Poppins, and On Your Toes (Encores!). Tour: Mary Poppins and White Christmas. Regional: La Jolla Playhouse: Side Show, Limelight (assoc. choreographer); MUNY; PCLO; The Old Globe; Arizona Theatre Co.; and Stages St. Louis.
            </h4>

            <AccordionToggle eventKey="0" as={AngleUpBtn}/>
          </StyledAccordionContent>
        </AccordionCollapse>
      </Accordion>
    </section>
  );
};

export default DirectorSection;
