/* ════════════════════════════════════════════════════════════
   Everything you see on the site lives here. Edit freely.
   Colours & fonts: top of src/styles/global.css
   Photos: public/img (faces = round avatars, photos = polaroids & photo stack,
   stickers = cut-out frames with a white sticker border)
   ════════════════════════════════════════════════════════════ */

export const profile = {
  name: 'OM',
  full: 'Om Pandey',
  role: 'Data Scientist , AI Developer and a Freelancer',
  location: 'Ghaziabad, India',
  email: 'ompandeyabesit08@gmail.com',
  intro: 'I build friendly, AI-powered web apps with React, GASP and Python, from the first pixel to the last API call.',
  github: 'https://github.com/om0819',
  linkedin: 'https://www.linkedin.com/in/om-pandey-71242633a/?isSelfProfile=true', // TODO: your exact profile URL
  resume:   'resume.pdf',
  avatar: 'img/faces/smile.jpg',
}

// quick stats under your intro
export const heroCounts = [
  { value: '3', label: 'AI products' },
  { value: '50+', label: 'problems solved' },
  { value: '7.00', label: 'CGPA' },
]

export const about = {
  // a fanned stack of photos: click it to shuffle through your roles
  photos: ['img/photos/portrait-tilt.jpg', 'img/photos/portrait-profile.jpg', 'img/photos/portrait-seated.jpg', 'img/photos/portrait-smile.jpg'],
  // one role per photo, shown under it (click the stack to cycle)
  roles: [ 'Data Scientist' , ' AI Developer ' , 'Freelancer', 'UI/UX Designer'],
  paragraphs: [
    "Hi! I'm Om Pandey, a data scientist, AI developer and B.Tech Computer Science student at ABES Institute Of Technology.",
    'I love to do data mining, help bussiness grow and create UGC ads for brands and SAAS  products end to end: add  AI features that actually help people.',
  ],
  stats: [
    { value: '7.00', label: 'CGPA' },
    { value: '50+', label: 'DSA problems solved' },
    { value: '3', label: 'AI products shipped' },
    { value: '8', label: 'Certifications' },
  ],
}

/* visual: 'gauge' | 'heatmap' | 'outfit' (illustrated art), or add image: 'img/...' */
export const projects = [
  {
    title: '🛍️ NeuralRetail ',
    tag: ' Data Analytics',
    visual: 'gauge',
    text: 'Project focused on understanding customer purchasing behavior, identifying valuable customer segments, and generating actionable business insights from retail transaction data.',
    tech: ['Python', 'SQL', 'Machine Learning', 'Tableau', 'OpenAI'],
    link: 'https://github.com/om0819/NeuralRetail-Data-Analytics', // TODO: exact repo
    color: '#FFE5D9',
  },
  {
    title: 'Maa Ki Rasoi',
    tag: 'Web Development ',
    visual: 'Food ',
    text: 'A food ordering website for cloud kitchen which also offers tiffin service .',
    tech: ['React', 'TypeScript', 'FastAPI', 'Fastapi', 'PostgreSQL'],
    // link: 'https://github.com/lohithadamisetti123',
    color: '#FFD9CC',
  },
  {
    title: 'Paimana AI ',
    tag: 'Machine Learning · SIH2026',
    visual: 'INFRASTRUCTURE',
    text: 'A problem solver contributing in improvement of Paimana(an goverment portal for goverment projects in infrastructure).',
    tech: ['React', 'Vite', 'XGBOOST', 'PostgreSQL', 'LLMs'],
    // link: 'https://github.com/lohithadamisetti123',
    color: '#FFEDE5',
  },
]


export const journey = [
   {
    year: 'Class XII',
    title: 'Intermediate — Physics, Chemistry & Mathematics',
    org: 'CBSE / Equivalent Board',
    text: 'Completed Class XII with 75% in the PCM stream.',
    photo: 'img/photos/portrait-laptop.jpg',
    note: 'the foundation'
  },
   {
    year: '2024–2028',
    title: 'B.Tech in Computer Science and Engineering',
    org: 'ABES Institute of Technology · Ghaziabad, India',
    text: 'Pursuing a B.Tech in CSE with a CGPA of 7.0/10, building skills as Data Scientist, AI, and data analytics.',
    photo: 'img/photos/portrait-seated.jpg',
    note: 'where the journey began'
  },
  {
    year: '2025',
    title: 'FINALIST',
    org: 'Make4Lucknow National Hackathon',
    text: 'Selected to participate in a national-level hackathon, collaborating on technology-driven solutions.',
    photo: 'img/photos/portrait-laptop.jpg',
    note: 'building beyond the classroom'
  },
  {
    year: '2025',
    title: 'Top 50 Team — SIH',
    org: 'Smart India Hackathon · TravelTrace',
    text: 'Leader of team ranked among the top 50 at the college level, building TravelTrace.',
    photo: 'img/photos/portrait-look.jpg',
    note: 'From just praticipating for fun to making  place in top 50 even after 3 rigrous rounds and biasness'
  },
 {
    year: '2026',
    title: 'Top 50 Team — SIH*',
    org: 'Smart India Hackathon · PAIMANA AI',
    text: 'Leader of  team ranked among the top 50 at the college level, developing PAIMANA AI for project monitoring.',
    photo: 'img/photos/portrait-smile.jpg',
    note: 'Turning ideas into solutions ,  keeping the team together and tried to extract best from every member'
  },
 
];


export const skills = [
  'React', 'TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'SQL','Video Editing'
  , 'FastAPI', 'Spring Boot', 'UGC Ads', 'React Native', 'Tailwind', 'PostgreSQL','Machine Learning', 
  ,'MySQL', 'Redis', 'Docker', 'Git', 'Postman', 'JWT', 'OpenAI', 'scikit-learn','Streamlit','Google SEO', 
]

// Milestones scoreboard. brand = icon key from src/lib/brands.js
// value counts up, bar fills to value / goal
export const scoreboard = [
  { brand: 'leetcode', label: 'LeetCode', note: 'problems solved', value: 10, suffix: '+', goal: 250 },
  { brand: 'codechef', label: 'CodeChef', note: 'problems solved', value: 30, suffix: '+', goal: 300 },
  { brand: 'geeksforgeeks', label: 'GeeksforGeeks', note: 'problems solved', value: 5, suffix: '+', goal: 100 },
  { brand: 'hackerrank', label: 'HackerRank', note: 'stars earned', value: 1, suffix: '★', goal: 25 },
]
// [title, issuer, brand icon key from src/lib/brands.js]

export const certifications = [
  ['Data Analytics', 'Deloitte', 'Deloitte'],
  ['Cyber Security Analyst', 'Mastercard', 'Mastercard'],
  ['Java Programming Fundamentals', 'Infosys Springboard', 'Infosys'],
  ['Web Development Training', 'Softpro', 'Softpro'],
  ['AI and Cybersecurity Awareness', 'TCS Foundation', 'TCS'],
  ['Python Programming Fundamentals', 'Infosys Springboard', 'Infosys'],
  ['Troubleshooting Python Machine Learning','Infosys Springboard','Infosys'  ],
  ['Database Management System','Infosys Springboard','Infosys',],
];


export const contactSticker = 'img/stickers/lg/f239.webp'
