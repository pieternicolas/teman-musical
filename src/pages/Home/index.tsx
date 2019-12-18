import _chunk from 'lodash/chunk'

import React, { FC, useMemo } from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import FlipCard from 'components/FlipCard';

import useMedia from 'helpers/hooks/useMedia';

import actorsData, { Actor } from 'assets/data/actors';
import HairsprayHeroImg from 'assets/img/hairspray-hero.gif';

const actorsDataXs: Actor[][] = [[actorsData[0], actorsData[1], actorsData[2]], [actorsData[3], actorsData[4], actorsData[5], actorsData[6]], [actorsData[7], actorsData[8], actorsData[9]]];
const actorsDataMd: Actor[][] = _chunk(actorsData, 2);

const Home: FC = () => {
  const actorCardGridNumber = useMedia({ xs: 3, sm: 3, md: 5, lg: 5, xl: 5 });

  console.log(actorCardGridNumber);
  
  const activeActorsData: Actor[][] = useMemo(() => actorCardGridNumber === 3 ? actorsDataXs : actorsDataMd, [actorCardGridNumber]);

  return (
    <Container>
      <h3 className="text-center margin-top-30 font-pixel-bold color-orange">The <span className="color-pink">First-Ever</span> Official <span className="color-pink">HAIRSPRAY</span> Broadway Production in INDONESIA</h3>

      <div className="d-flex justify-content-center margin-top-20">
        <Image className="text-center mw-100" src={HairsprayHeroImg}/>
      </div>

      <div className="d-flex margin-top-30">
        {activeActorsData.map((item: Actor[], i: number) => (
          <div key={i} className="d-flex flex-column justify-content-center" style={{ flexBasis: `${100 / actorCardGridNumber}%` }}>
            {item.map((actor: Actor) => (
              <FlipCard
                key={actor.name}
                front={<Image src={actor.src}/>}
                back={
                  <div className="d-flex flex-column h-100 justify-content-center align-content-center font-pixel px-1">
                    <h4>{actor.name}</h4>
                    <p className={`color-${actor.secondaryColor} font-pixel-bold`}>as</p>
                    <h4>{actor.stageName}</h4>
                  </div>
                }
                backgroundColor={actor.bgColor}
                className="margin-bottom-20 margin-left-10 margin-right-10"
              />
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Home;
