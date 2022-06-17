const jobs = [
  {
    id: "1",
    order: 3,
    title: "Full Stack Web Developer",
    dates: "December 2015 - Present",
    duties: [
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
    ],
    company: "TOMMY",
  },
  {
    id: "2",
    order: 2,
    title: "Front-End Engineer",
    dates: "May 2015 - December 2015",
    duties: [
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
    ],
    company: "BIGDROP",
  },
  {
    id: "3",
    order: 1,
    title: "Engineering Intern",
    dates: "May 2014 - September 2015",
    duties: [
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
      "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
    ],
    company: "CUKER",
  },
];
const products = [
  {
    id: "1",
    name: "accent chair",
    price: 25999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160?ts=1655216685&userId=usrQMwWEPx18KgLcP&cs=55bccb4316fe0bbd",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "2",
    name: "albany sectional",
    price: 109999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52?ts=1655216685&userId=usrQMwWEPx18KgLcP&cs=486d3117569c4b76",
    colors: ["#000", "#ffb900"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "3",
    name: "albany table",
    price: 309999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f?ts=1655216685&userId=usrQMwWEPx18KgLcP&cs=93d0dd0318f84fd6",
    colors: ["#ffb900", "#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
  },
  {
    id: "4",
    name: "armchair",
    price: 12599,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f?ts=1655216685&userId=usrQMwWEPx18KgLcP&cs=613d617fd57bebf6",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
  },
  {
    id: "5",
    name: "bar stool",
    price: 4099,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66?ts=1655216685&userId=usrQMwWEPx18KgLcP&cs=931700e59f5c7c04",
    colors: ["#000"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "dining",
    shipping: true,
  },
  {
    id: "6",
    name: "dining table",
    price: 42999,
    image:
      "https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960?ts=1655216685&userId=usrQMwWEPx18KgLcP&cs=16c56105c8e90641",
    colors: ["#00ff00", "#0000ff", "#ff0000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "dining",
    shipping: true,
  },
];
const people = [
  {
    id: 1,
    name: "Sagar",
  },
  {
    id: 2,
    name: "Moni",
  },
  {
    id: 3,
    name: "Tim",
  },
  {
    id: 4,
    name: "Tum",
  },
];
module.exports = { products, jobs, people };
