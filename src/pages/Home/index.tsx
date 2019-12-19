import _chunk from 'lodash/chunk'

import React, { FC, useMemo } from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import FlipCard from 'components/FlipCard';

import DirectorSection from 'pages/Home/DirectorSection';
import InformationSection from 'pages/Home/InformationSection';

import useMedia from 'helpers/hooks/useMedia';

import actorsData, { Actor } from 'assets/data/actors';
import HairsprayHeroImg from 'assets/img/hairspray-hero.gif';
import BookNowImg from 'assets/img/buttons/book-now.png';

const actorsDataXs: Actor[][] = _chunk(actorsData, 5);
const actorsDataMd: Actor[][] = _chunk(actorsData, 2);

const Home: FC = () => {
  const actorCardGridNumber = useMedia({ xs: 2, sm: 2, md: 2, lg: 5, xl: 5 });
  const activeActorsData: Actor[][] = useMemo(() => actorCardGridNumber === 2 ? actorsDataXs : actorsDataMd, [actorCardGridNumber]);

  return (
    <Container>
      <h3 className="text-center margin-top-30 font-pixel-bold color-orange">The <span className="color-pink">First-Ever</span> Official <span className="color-pink">HAIRSPRAY</span> Broadway Production in INDONESIA</h3>

      <div className="d-flex justify-content-center margin-top-20">
        <Image className="text-center mw-100" src={HairsprayHeroImg}/>
      </div>

      <DirectorSection/>

      <div className="d-flex margin-top-30">
        {activeActorsData.map((item: Actor[], i: number) => (
          <div
            key={i}
            className="d-flex flex-column align-items-center"
            style={{
              flexBasis: `${100 / actorCardGridNumber}%`,
              paddingTop: `${actorCardGridNumber === 5 && i % 2 === 1 ? 50 : 0}px`,
            }}
          >
            {item.map((actor: Actor) => (
              <FlipCard
                key={actor.name}
                front={<Image src={actor.src} className="mw-100"/>}
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

      <InformationSection/>

      <div className="d-flex justify-content-center margin-top-40">
        <Image src={BookNowImg} width={120}/>
      </div>
    </Container>
  );
}

export default Home;
