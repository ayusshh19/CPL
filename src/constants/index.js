import {
  python,
  tensorflow,
  scikit_learn,
  pytorch,
  keras,
  numpy,
  pandas,
  pycharm,
  jupyter,
  mobile,
  backend,
  creator,
  web,
  gan_dapt,
  neuro_drive,
  market_predict,
  microsoft,
  adani,
  bn_software,
  ericsson,
  kamel_tourki,
  nati_gezahegn,
  zakaria,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Machine Learning',
    icon: web,
  },
  {
    title: 'Algorithms and Models',
    icon: mobile,
  },
  {
    title: 'Deep Learning Frameworks',
    icon: backend,
  },
  {
    title: 'Neural Networks',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'Scikit Learn',
    icon: scikit_learn,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'Keras',
    icon: keras,
  },
  {
    name: 'NumPy',
    icon: numpy,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'PyCharm',
    icon: pycharm,
  },
  {
    name: 'Jupyter',
    icon: jupyter,
  },
];

const experiences = [
  {
    title: 'Registration',
    company_name: 'Microsoft',
    icon: microsoft,
    iconBg: '#FFFFFF',
    date: '....',
    points: [
      'Eligibility : For all year Student',
      'Prerequiestic : Basic Data Structure, Basic understanding of any programming language, Basic understanding of Loops, conditional Statement, And variable Declaration',
      'Prize: Goodies, Trophies And Certificate To All Finalist',
      'Registration Fee for single student - 30rs.',
      'Registration Fee for Team of two - 50rs.',

      
    ],
  },
  {
    title: 'Round One',
    company_name: 'Adani Institute of Infrastructure Engineering',
    icon: adani,
    iconBg: '#FFFFFF',
    date: '11 AM To 12.30 PM ',
    points: [
      'Timing - ....',
      'Question Format - 10 question , easy to moderate.',
      'Elimination Round - Assessment after 10 questions.',
      'Using Google for Reference - Allowed during scheduled 25-minute breaks.',
      'Scoring System - Points based on question difficulty. ',
    ],
  },
  {
    title: 'Round Two',
    company_name: 'BN Technologies',
    icon: bn_software,
    iconBg: '#FFFFFF',
    date: '2 PM To 4 PM',
    points: [
      'Timing - ....',
      'Qualification - Only the top 10 participants from round 1 proceed to round 2. ',
      'Question Format - Similar to round 1, with a mix of difficulties. ',
      'Using Google for Reference - Participants can use Google for reference during scheduled 15-minute breaks. ',
      'Scoring System - Points based on question difficulty. ',
      'Certificates- All participants in round 2 receive certificates of participation. ',
      'Final Winner Determination - The participant with the highest score in round 2 is declared the overall winner. ',
 
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      'An AI optimization prodigy for OFDM (mainly 5G), with outstanding problem solving skills and strong programming expertise, making him highly recommended.',
    name: 'Kamel Tourki',
    designation: 'Research and Standardization Manager',
    company: 'Ericsson',
    image: kamel_tourki,
  },
  {
    testimonial:
      'He has exemplified extraordinary prowess as a devoted, tireless, and imaginative AI master, coupled with remarkable personal qualities that radiate brilliance.',
    name: 'Nathnael Gezahegn',
    designation: 'CEO',
    company: 'BN Technologies',
    image: nati_gezahegn,
  },
  {
    testimonial:
      'Eskinder is an exceptional AI expert, demonstrating unmatched talent in research, critical thinking, and harnessing PyTorch and Keras to their fullest potential.',
    name: 'Zakaria El Moutaki',
    designation: 'Standardization Researcher',
    company: 'Ericsson',
    image: zakaria,
  },
];

const projects = [
  {
    name: 'GAN-DAPT',
    description:
      'Leveraging domain-invariant image translations, I combined domain adaptation and generalization techniques for improved image segmentation.',
    tags: [
      {
        name: 'DaSeGAN',
        color: 'blue-text-gradient',
      },
      {
        name: 'DaSeGAN-S',
        color: 'green-text-gradient',
      },
      {
        name: 'DaSeGAN-T',
        color: 'pink-text-gradient',
      },
    ],
    image: gan_dapt,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Neuro Drive',
    description:
      'Successfully trained a cutting-edge self-driving car using Convolution neural networks (CNN) utilizing a state-of-the-art simulator provided by Udacity.',
    tags: [
      {
        name: 'Opencv-python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: neuro_drive,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Market Value Predictor',
    description:
      "I developed a powerful regression model using machine learning algorithms to predict professional football players' market value accurately.",
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Linear Regression',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: market_predict,
    source_code_link:
      'https://github.com/ESKINDERTSEGAYE/Project-Market-Value-Predictor',
  },
];

export { services, technologies, experiences, testimonials, projects };
