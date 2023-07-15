const people = [
  {
    name: 'Michael Angelo Garcia',
    linkedin: 'https://www.linkedin.com/in/michael-angelo-garcia-053848265/',
    github: 'https://github.com/MichaelAngelo13',
  },
  {
    name: 'Benjamin Huang',
    linkedin: 'https://www.linkedin.com/in/bh4120/',
    github: 'https://github.com/byhuang4100',
  },
  {
    name: 'Mason Royal',
    linkedin: 'https://www.linkedin.com/in/masonroyal/',
    github: 'https://github.com/masonroyal',
  },
  {
    name: 'Saad Hamdani',
    linkedin: 'https://www.linkedin.com/in/saadh123/',
    github: 'https://github.com/saadh123',
  },
  {
    name: 'Garima Bhatia',
    linkedin: 'https://www.linkedin.com/in/GarimaB06/',
    github: 'https://github.com/garimab06',
  },
  {
    name: 'Nathan Cho',
    linkedin: 'https://www.linkedin.com/in/nathanycho/',
    github: 'https://github.com/nathanycho',
  },
  {
    name: 'Eshaan Joshi',
    linkedin: 'https://www.linkedin.com/in/eshaanjoshi/',
    github: 'https://github.com/eshaan32',
  },
  {
    name: 'Jonathan Wong',
    linkedin: 'https://www.linkedin.com/in/jon-wong-00/',
    github: 'https://github.com/WongJonathann',
  },
  {
    name: 'Drew Manley',
    linkedin: 'https://www.linkedin.com/in/andrewmanley13/',
    github: 'https://github.com/DrewManley',
  },
  {
    name: 'Tiffany Chau',
    linkedin: 'https://www.linkedin.com/in/tiffanynchau/',
    github: 'https://github.com/tiffanynchau/',
  },
  {
    name: 'Cedar Cooper',
    linkedin: 'https://github.com/CedarCooper',
    github: 'https://www.linkedin.com/in/cedar-cooper/',
  },
  {
    name: 'Sarah Moosa',
    linkedin: 'https://www.linkedin.com/in/sarah-moosa-4b05721b6/',
    github: 'https://github.com/Sbethm?tab=repositories',
  },
  {
    name: 'Jack Yuan',
    linkedin: 'https://www.linkedin.com/in/jackyuan1/',
    github: 'https://github.com/jackyuan1',
  },
  {
    name: 'Abigail Gerig',
    linkedin: 'https://www.linkedin.com/in/abigail-gerig/',
    github: 'https://github.com/4estgirl',
  },
  {
    name: 'Matt Dias',
    linkedin: 'https://www.linkedin.com/in/matthew-j-dias/',
    github: 'https://github.com/Schmang13',
  },
  {
    name: 'Trine Medina',
    linkedin: 'https://www.linkedin.com/in/trinemedina/',
    github: 'https://github.com/TrineMedina',
  },
  {
    name: 'Ruli Warner-Rosen',
    linkedin: 'https://www.linkedin.com/in/ruliwr/',
    github: 'https://github.com/Ruliwr',
  },
  {
    name: 'Christian Looff',
    linkedin: 'https://www.linkedin.com/in/christian-looff/',
    github: 'https://github.com/cmlooff',
  },
  {
    name: 'Christina Son',
    linkedin: 'http://www.linkedin.com/in/christinason17',
    github: 'https://github.com/cson17',
  },
  {
    name: 'Austin Andrews',
    linkedin: 'http://www.linkedin.com/in/austinandrews17',
    github: 'https://github.com/austinandrews',
  },
  {
    name: 'Fernando Luna',
    linkedin: 'http://www.linkedin.com/in/fernando-luna',
    github: 'https://github.com/lunaf-github',
  },
  {
    name: 'Eric Lay',
    linkedin: 'http://www.linkedin.com/in/ericlay14',
    github: 'https://github.com/ericlay14',
  },
  {
    name: 'Dylan Feldman',
    linkedin: 'http://www.linkedin.com/in/dylan-feldman',
    github: 'https://github.com/dfeldman24',
  },
  {
    name: 'Eric Lee',
    linkedin: 'https://www.linkedin.com/in/errc-lee/',
    github: 'https://github.com/errc-lee',
  },
  {
    name: 'Kenneth Hui',
    linkedin: 'https://www.linkedin.com/in/kenneth-hui/',
    github: 'https://github.com/kennethhui121',
  },
  {
    name: 'Kristine Aguda',
    linkedin: 'https://www.linkedin.com/in/kristine-aguda/',
    github: 'https://github.com/kaguda',
  },
  {
    name: 'Tre Hultzen',
    linkedin: 'https://www.linkedin.com/in/tre-hultzen/',
    github: 'https://github.com/THultz',
  },
  {
    name: 'Emma Czech',
    linkedin: 'https://www.linkedin.com/in/emczech',
    github: 'https://github.com/emczech',
  },
  {
    name: 'May Li',
    linkedin: 'https://www.linkedin.com/in/maysli',
    github: 'https://github.com/msscloudy',
  },
  {
    name: 'Ricardo Cortez',
    linkedin: 'https://www.linkedin.com/in/rcortez88/',
    github: 'https://github.com/rcortez88',
  },
  {
    name: 'Brent Speight',
    linkedin: 'https://www.linkedin.com/in/brent-speight/',
    github: 'https://github.com/brentspeight',
  },
  {
    name: 'Lorenzo Guevara',
    linkedin: 'https://www.linkedin.com/in/lorenzoguevara/',
    github: 'https://github.com/lo-guevara',
  },
  {
    name: 'Catherine Larcheveque',
    linkedin: 'https://www.linkedin.com/in/clarcheveque/',
    github: 'https://github.com/clarcheveque',
  },
  {
    name: 'Charles Ryu',
    linkedin: 'https://www.linkedin.com/in/charcharryu/',
    github: 'https://github.com/charcharryu',
  },
  {
    name: 'Griffin Silver',
    linkedin: 'https://www.linkedin.com/in/griffin-silver-1ab675140/',
    github: 'https://github.com/griffinrogersilver',
  },
  {
    name: 'Alex Smith',
    linkedin: 'http://www.linkedin.com/in/ajsmith925',
    github: 'https://github.com/ajsmith925',
  },
  {
    name: 'Anton Abdukhamidov',
    linkedin: 'https://www.linkedin.com/in/anton-abdukhamidov-1163733b/',
    github: 'https://github.com/abdukhamidov-anton',
  },
  {
    name: 'Chai Lee',
    linkedin: 'https://www.linkedin.com/in/chai-lee-5a064649/',
    github: 'https://github.com/seachai',
  },
  {
    name: 'Matt Jones',
    linkedin: 'https://www.linkedin.com/in/mc-jones/',
    github: 'https://github.com/mc-jones',
  },
  {
    name: 'Richie Edwards',
    linkedin: 'https://www.linkedin.com/in/richieedwards/',
    github: 'https://github.com/richie-edwards',
  },
  {
    name: 'Mitesh Patel',
    linkedin: 'https://www.linkedin.com/in/mitesh-patel-8702728b/',
    github: 'https://github.com/mit1812',
  },
  {
    name: 'Minchan Jun',
    linkedin: 'https://www.linkedin.com/in/minchan-jun/',
    github: 'https://github.com/MinchanJun',
  },
  {
    name: 'Kadir Gundogdu',
    linkedin: 'https://www.linkedin.com/in/kadirgund/',
    github: 'https://github.com/kadirgund',
  },
  {
    name: 'Dan Lin',
    linkedin: 'https://www.linkedin.com/in/danlin91/',
    github: 'https://github.com/DanLin91',
  },
  {
    name: 'Wilmer Sinchi',
    linkedin: 'https://www.linkedin.com/in/wilmer-sinchi-143b7681/',
    github: 'https://github.com/sinchiw',
  },
];

export default people;
