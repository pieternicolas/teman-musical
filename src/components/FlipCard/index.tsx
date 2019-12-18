import React, { useState, HTMLAttributes, ReactNode } from 'react';

import FlipCardWrapper from './FlipCardWrapper';
import FlipCardBase from './FlipCardBase';

interface FlipCardProps extends HTMLAttributes<HTMLDivElement> {
  front: ReactNode;
  back?: ReactNode | null;
  backgroundColor?: string;
};

const FlipCard = ({
  front,
  back = null,
  backgroundColor,
  ...props
}: FlipCardProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <FlipCardWrapper
      active={isActive}
      onClick={() => setIsActive(state => !state)}
      {...props}
    >
      <FlipCardBase variant="front" backgroundColor={backgroundColor}>
        {front}
      </FlipCardBase>
      <FlipCardBase variant="back" backgroundColor={backgroundColor}>
        {back}
      </FlipCardBase>
    </FlipCardWrapper>
  )
};

export default FlipCard;
