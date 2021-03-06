import React from 'react'; // eslint-disable-line

// import herobg from '../images/kc-mono.jpg';

export default {
  hero: {
    title: 'Steven Stone',
    subtitle: 'web developer | kansas city',
    description:
      'Currently located in Kansas City, I\'ve been building websites for more than five years. Some examples of my work, including this site, can be found on <a href="https://github.com/stevenrstone" target="_blank" rel="noopener">Github</a>.',
    background: '../images/steven-c3.jpg',
    backgroundAlt: 'Steven Stone',
    // bgImport: herobg,
  },
  title2: 'Professional Portfolio',
  subtitle2:
    "For the past three-plus years, I've worked with a variety of clients for VML in Kansas City. The frontend landscape tends to change quickly, and my work reflects that - technologies used run from Gulp.js to Webpack and jQuery to React, with Sass as a mainstay and C#/Razor thrown in where necessary. I've been the only frontend dev on most of my projects, and am no stranger to switching gears as needed.",
  portfolio: [
    {
      title: 'Gatorade',
      moreInfo: 'Dec 2017 - November 2018',
      subtitle: 'Preact (and preact-cli), Redux, Sass',
      image: '../images/logo-gatorade-black.png',
    },
    {
      title: 'Tropicana',
      moreInfo: 'Aug 2015 - November 2018',
      subtitle: 'C# NET, Gulp, jQuery, Razor, Sass, Sitefinity',
      image: '../images/logo-tropicana-t.png',
    },
    {
      title: 'Frigidaire',
      moreInfo: 'Sep 2017 - Dec 2017 (Project Retired)',
      subtitle: 'Babel, Facebook API, Javascript/ES6 + Canvas, Sass',
      image: '../images/logo-frigidaire-t.png',
    },
    {
      title: 'Drink Brisk',
      moreInfo: 'Jun 2017 - November 2018',
      subtitle: 'Gulp, Javascript/ES6, Sass, Sitefinity',
      image: '../images/logo-brisk.png',
    },
    {
      title: 'Crystal Cruises',
      moreInfo: 'Jul 2015 - May 2018',
      subtitle:
        'C# NET, Gulp, jQuery, Razor, React (0.14), Sitefinity, Webpack',
      image: '../images/logo-crystal-t.png',
    },
    {
      title: 'Stubborn Soda',
      moreInfo: 'Sep 2015 - Apr 2017',
      subtitle: 'Gulp, Javascript, Pug, Sass',
      image: '../images/logo-stubborn.png',
    },
  ],
  title3: 'Personal Interests',
  subtitle3:
    "While I enjoy this line of work, I'm not one to breathe code outside the office. I fill that time with other interests:",
  personal: [
    {
      title: 'Video Games',
      subtitle: 'Skyrim, Overwatch, Chrono Trigger, Mega Man X',
      moreInfo:
        'A lifelong video game hobby played a big role in me picking up computer science in college.',
      image: '../images/controller.png',
    },
    {
      title: 'Sports & eSports',
      subtitle: 'London Spitfire, St. Louis Cardinals',
      moreInfo:
        "I've mostly moved over to Overwatch League these days, but still enjoy a baseball game from time to time.",
      image: '../images/sports.png',
    },
    {
      title: 'Dungeons & Dragons',
      moreInfo:
        'I\'m much more interested in the "game" than the "roleplaying," but I know the latter is what makes it so enjoyable.',
      subtitle:
        "Barbarian, Cleric, Druid, Paladin, Rogue, Warlock...I'm not picky.",
      image: '../images/d20-padded.png',
    },
    {
      title: 'Music',
      subtitle:
        'Dragonforce, Kamelot, Alter Bridge, Riverside, Haken, Flying Colors, Thrice, Rush',
      moreInfo:
        'My taste has ranged from emo to symphonic power metal over the years.',
      image: '../images/headphones.svg',
    },
    {
      title: 'Books',
      subtitle: 'The Lies of Locke Lamora, Mistborn, Foundryside',
      moreInfo: "I've just recently started getting into fantasy novels.",
      image: '../images/book-padded.png',
    },
  ],
};
