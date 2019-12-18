export interface Actor {
  name: string;
  stageName: string;
  bgColor: 'purple' | 'pink' | 'blue' | 'green' | 'orange';
  secondaryColor: 'purple' | 'pink' | 'blue' | 'green' | 'orange';
  src?: string;
};

const actors: Array<Actor> = [
  {
    name: 'Lea Simanjuntak',
    stageName: 'Velma Von Tussle',
    bgColor: 'purple',
    secondaryColor: 'orange',
    src: '',
  },
  {
    name: 'Damien Jonathans',
    stageName: 'Seaweed J. Stubbs',
    bgColor: 'blue',
    secondaryColor: 'pink',
    src: '',
  },
  {
    name: 'Gusty Pratama',
    stageName: 'Corny Collins',
    bgColor: 'pink',
    secondaryColor: 'green',
    src: '',
  },
  {
    name: 'Venytha Yoshiantini',
    stageName: 'Tracy Turnblad',
    bgColor: 'pink',
    secondaryColor: 'green',
    src: '',
  },
  {
    name: 'Morgan Oey',
    stageName: 'Link Larkin',
    bgColor: 'orange',
    secondaryColor: 'purple',
    src: '',
  },
  {
    name: 'Peter Ong',
    stageName: 'Edna Turnblad',
    bgColor: 'purple',
    secondaryColor: 'orange',
    src: '',
  },
  {
    name: 'Putri Indah Kamila',
    stageName: 'Penny Pingleton',
    bgColor: 'green',
    secondaryColor: 'blue',
    src: '',
  },
  {
    name: 'Andrea Miranda',
    stageName: 'Amber Von Tussle',
    bgColor: 'green',
    secondaryColor: 'blue',
    src: '',
  },
  {
    name: 'Tine Simanjuntak',
    stageName: 'Motormouth Maybelle',
    bgColor: 'blue',
    secondaryColor: 'pink',
    src: '',
  },
  {
    name: 'Renno Krisna',
    stageName: 'Wilbur Turnblad',
    bgColor: 'orange',
    secondaryColor: 'purple',
    src: '',
  },
];

export default actors;
