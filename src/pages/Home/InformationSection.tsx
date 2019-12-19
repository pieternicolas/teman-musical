import React, { FC } from 'react';
import styled from 'styled-components';

import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import AccordionToggle, { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import showInformationBtnImg from 'assets/img/buttons/show-information.png';

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
};

const ShowInformationBtn: FC = () => {
  const handleOnClick = useAccordionToggle('information', () => {});

  return (
    <div className="d-flex justify-content-center">
      <Image src={showInformationBtnImg} onClick={handleOnClick} width={150}/>
    </div>
  );
};

const InformationSection: FC = () => {
  return (
    <section className="margin-top-30">
      <Accordion>
        <AccordionToggle eventKey="information" as={ShowInformationBtn}/>
        
        <AccordionCollapse eventKey="information">
          <StyledAccordionContent>
            <h3 className="font-pixel margin-bottom-30">
              ShOw iNfORmATiON
            </h3>

            <div className="font-pixel">
              <div className="margin-bottom-15">
                <h4 className="color-pink">ShOw 1</h4>
                <p>Saturday, 21 December 2O19</p>
                <p>8 PM</p>
              </div>

              <div className="margin-bottom-15">
                <h4 className="color-pink">ShOw 2 & 3</h4>
                <p>Sunday, 22 December 2O19</p>
                <p>2 PM & 8 PM</p>
              </div>

              <div className="margin-bottom-15">
                <h4 className="color-pink">wHeRE?</h4>
                <p>Ciputra Artpreneur Theater Jakarta</p>
              </div>

              <div className="margin-bottom-15">
                <h4 className="color-pink">cOntAct pErSoN</h4>
                <p><span className="font-pixel-bold">JASON</span> | O815 85OO 9145</p>
                <p><span className="font-pixel-bold">JESLYNE</span> | O878 7164 3735</p>
              </div>
            </div>

            <AccordionToggle eventKey="0" as={AngleUpBtn}/>
          </StyledAccordionContent>
        </AccordionCollapse>
      </Accordion>
    </section>
  );
};

export default InformationSection;
