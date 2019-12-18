import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface FlipCardWrapperProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
};

type StyledCardInnerProps = Pick<FlipCardWrapperProps, 'active'>; 

const StyledCardWrapper: FC<HTMLAttributes<HTMLDivElement>> = styled.div`
  background-color: transparent;
  /* width: 300px; */
  height: 200px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
`;

const StyledCardInner: FC<FlipCardWrapperProps & HTMLAttributes<HTMLDivElement>> = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  ${(props: StyledCardInnerProps) => props.active && 'transform: rotateX(180deg)'};
`;

const FlipCardWrapper = ({
  children,
  active,
  ...props
}: FlipCardWrapperProps) => {
  return (
    <StyledCardWrapper {...props}>
      <StyledCardInner active={active}>
        {children}
      </StyledCardInner>
    </StyledCardWrapper>
  );
};

export default FlipCardWrapper;
