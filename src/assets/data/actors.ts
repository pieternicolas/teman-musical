import velmaImg from 'assets/img/cast/cast-velma.jpg';
import seaweedImg from 'assets/img/cast/cast-seaweed.jpg';
import cornyImg from 'assets/img/cast/cast-corny.jpg';
import tracyImg from 'assets/img/cast/cast-tracy.jpg';
import linkImg from 'assets/img/cast/cast-link.jpg';
import ednaImg from 'assets/img/cast/cast-edna.jpg';
import pennyImg from 'assets/img/cast/cast-penny.jpg';
import amberImg from 'assets/img/cast/cast-amber.jpg';
import motormouthImg from 'assets/img/cast/cast-motormouth.jpg';
import wilburImg from 'assets/img/cast/cast-wilbur.jpg';

export interface Actor {
  name: string;
  stageName: string;
  bgColor: 'purple' | 'pink' | 'blue' | 'green' | 'orange';
  secondaryColor: 'purple' | 'pink' | 'blue' | 'green' | 'orange';
  src: string;
};

const actors: Array<Actor> = [
  {
    name: 'Lea Simanjuntak',
    stageName: 'Velma Von Tussle',
    bgColor: 'purple',
    secondaryColor: 'orange',
    src: velmaImg,
  },
  {
    name: 'Damien Jonathans',
    stageName: 'Seaweed J. Stubbs',
    bgColor: 'blue',
    secondaryColor: 'pink',
    src: seaweedImg,
  },
  {
    name: 'Gusty Pratama',
    stageName: 'Corny Collins',
    bgColor: 'pink',
    secondaryColor: 'green',
    src: cornyImg,
  },
  {
    name: 'Venytha Yoshiantini',
    stageName: 'Tracy Turnblad',
    bgColor: 'pink',
    secondaryColor: 'green',
    src: tracyImg,
  },
  {
    name: 'Morgan Oey',
    stageName: 'Link Larkin',
    bgColor: 'orange',
    secondaryColor: 'purple',
    src: linkImg,
  },
  {
    name: 'Peter Ong',
    stageName: 'Edna Turnblad',
    bgColor: 'purple',
    secondaryColor: 'orange',
    src: ednaImg,
  },
  {
    name: 'Putri Indah Kamila',
    stageName: 'Penny Pingleton',
    bgColor: 'green',
    secondaryColor: 'blue',
    src: pennyImg,
  },
  {
    name: 'Andrea Miranda',
    stageName: 'Amber Von Tussle',
    bgColor: 'green',
    secondaryColor: 'blue',
    src: amberImg,
  },
  {
    name: 'Tine Simanjuntak',
    stageName: 'Motormouth Maybelle',
    bgColor: 'blue',
    secondaryColor: 'pink',
    src: motormouthImg,
  },
  {
    name: 'Renno Krisna',
    stageName: 'Wilbur Turnblad',
    bgColor: 'orange',
    secondaryColor: 'purple',
    src: wilburImg,
  },
];

export default actors;
