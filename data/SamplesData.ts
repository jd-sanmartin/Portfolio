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
    name: 'Movies App',
    text: [
      'This sample is based on an interview challenge I saw on Reddit', 
      'This page shows the "discover" feature of a movie catalog app.'
    ],
    technologiesUsed: 'React Js, Next Js, Typescript, Material UI',
    accentColor: '#22dc75',
    link: '/movies',
  },
];

export default SamplesData;