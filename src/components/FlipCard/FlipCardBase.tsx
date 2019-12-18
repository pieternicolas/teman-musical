import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface StyledCardBaseProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'front' | 'back';
  backgroundColor?: string;
  theme?: any;
};

const StyledCardBase: FC<StyledCardBaseProps> = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  ${(props: StyledCardBaseProps) => props.variant === 'front' && `
    background-color: ${props.theme.color?.[props.backgroundColor]};
    color: black;
  `}
  ${(props: StyledCardBaseProps) => props.variant === 'back' && `
    background-color: ${props.theme.color?.[props.backgroundColor]};
    color: white;
    transform: rotateX(180deg);
  `}
`;


const FlipCardBase = ({
  children,
  variant,
  backgroundColor,
}: StyledCardBaseProps) => {
  return (
    <StyledCardBase variant={variant} backgroundColor={backgroundColor}>
      {children}
    </StyledCardBase>
  );
};

export default FlipCardBase;
