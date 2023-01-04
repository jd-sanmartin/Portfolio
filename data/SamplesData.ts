import SampleCardProps from "../types/samples/SampleCardProps";

const SamplesData: SampleCardProps[] = [
  {
    name: 'Map Drawing Lab',
    text: [
      'This is a small sample that uses the Google Maps API to draw a Polygon, a Polyline and some markers on a map, which can be very useful for planning drone flights.', 
      'I wanted to use more the Geometry and Places Google Maps API libraries, but I think that it is beyond the scope of the purpose of a brief technical sample.'
    ],
    technologiesUsed: 'React Js, Next Js, Typescript, Google Maps API, Material UI',
    accentColor: '#e930ef',
    link: '/map',
  },
  {
    name: 'Portfolio',
    text: [
      'Yes, this portfolio you are seeing right now. A meta-reference.', 
      'I had a lot of fun building this portfolio and using the different components Material UI has to offer. I wanted to unleash my creativity while being sober in the design.'
    ],
    technologiesUsed: 'React Js, Next Js, Typescript, Material UI',
    accentColor: '#ad71fa',
    link: '/',
  },
];

export default SamplesData;