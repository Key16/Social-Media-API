const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Ze",
  "Zechariah",
  "Zeek",
  "Zeeshan",
  "Zeid",
  "Zein",
  "Zen",
  "Zendel",
  "Zenith",
  "Zennon",
  "Zeph",
  "Zerah",
  "Zhen",
  "Zhi",
  "Zhong",
  "Zhuo",
  "Zi",
  "Zidane",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
  "Zuriel",
  ``,
];

const descriptionsBodies = [
  "How to disagree with someone",
  "iPhone review",
  "how-to video",
  "video essay on the history of video games",
  "How to make money on the App Store",
  "Learn NextJS in five minutes (Not clickbate)",
  "Movie trailer",
  "Hello world",
  "Another possible solution to the algorithm",
  "Apology video",
  "Submission for startup pitch",
];

const possibleEmail = [
  "spebworth0@g.co",
  "mbrouard1@printfriendly.com",
  "rjefferies2@moonfruit.com",
  "tfice3@mapy.cz",
  "atempest4@go.com",
  "hredhouse5@biglobe.ne.jp",
  "mconklin6@odnoklassniki.ru",
  "mjefferys7@sohu.com",
  "wkornyshev8@scientificamerican.com",
  "kparfrey9@tripadvisor.com",
  "aheywarda@about.com",
  "ckinghamb@economist.com",
  "bstaddartc@goo.ne.jp",
  "hmobleyd@weather.com",
  "gcartmele@cnn.com",
  "atrewf@shareasale.com",
  "ppauluzzig@plala.or.jp",
  "lconersh@businessinsider.com",
  "colmani@icio.us",
  "lmccurriej@printfriendly.com",
  "ddaunayk@tmall.com",
  "sruminl@dedecms.com",
  "mleyburnm@constantcontact.com",
  "smacgillivrien@marriott.com",
  "bbartosinskio@army.mil",
  "tnorthp@dell.com",
  "dlortzq@mysql.com",
  "kchmielr@fc2.com",
  "rcashmores@smugmug.com",
  "eborkettt@ezinearticles.com",
  "hwillisch0@so-net.ne.jp",
  "nscapens1@ucsd.edu",
  "gwarnes2@netlog.com",
  "owhitworth3@addtoany.com",
  "rcullingford4@accuweather.com",
  "cblackbrough5@xing.com",
  "ccorbie6@washington.edu",
  "etruckell7@newyorker.com",
  "hreihm8@yellowpages.com",
  "tsoden9@diigo.com",
  "mblinda@quantcast.com",
  "mrizziellob@ycombinator.com",
  "ldonettc@cnet.com",
  "kdomercd@51.la",
  "preschkee@booking.com",
  "afloundersf@washington.edu",
  "msoneg@plala.or.jp",
  "cpraundlinh@timesonline.co.uk",
  "kparrini@freewebs.com",
  "lroggersj@amazon.co.jp",
  "mleckeyk@go.com",
  "ialoshikinl@gov.uk",
  "fburkwoodm@dagondesign.com",
  "wbrierlyn@mit.edu",
  "crossio@indiatimes.com",
  "tclapshawp@miibeian.gov.cn",
  "dstainq@cisco.com",
  "hkrojnr@t-online.de",
  "ddumphreys@globo.com",
  "sperrygot@bloglovin.com",
  "lwhittieru@epa.gov",
  "centisslev@themeforest.net",
  "mbabbidgew@php.net",
  "bmccreax@arizona.edu",
  "dgiorgielliy@purevolume.com",
  "boharez@qq.com",
  "psetchfield10@ocn.ne.jp",
  "ccowap11@independent.co.uk",
  "ggreatrex12@businessinsider.com",
  "dandreaccio13@thetimes.co.uk",
  "cbirts14@youtu.be",
  "kveal15@drupal.org",
  "tbenit16@dailymail.co.uk",
  "lconman17@psu.edu",
  "jwyne18@slate.com",
  "jgildersleaves19@ebay.co.uk",
  "yjahndel1a@ed.gov",
  "mflewin1b@blog.com",
  "bverna1c@discovery.com",
  "afroggatt1d@businessinsider.com",
  "cgeorgiades1e@wiley.com",
  "bmckerton1f@usa.gov",
  "slawtie1g@sciencedirect.com",
  "asebastian1h@nba.com",
  "bbraunes1i@narod.ru",
  "lpullar1j@gravatar.com",
  "oroullier1k@w3.org",
  "cgoulding1l@mail.ru",
  "lcolchett1m@sciencedirect.com",
  "kguillon1n@cargocollective.com",
];

const possibleReactions = [
  "I disagree!",
  "No way",
  "This was awesome",
  "Thank you for the great content",
  "Please check out my video response",
  "Like and subscribe to my channel please",
  "Great post",
  "Yes",
  "Wonderful",
  "No",
  "How cool",
];

const possibleThoughts = [
  "I want to have more kids!",
  "I love eating pancakes, they're so yum!",
  "This show tonight was awesome",
  "Why are buildings buildings if they are already built",
  "Tomorrow the sun will be set on fire",
  "Do you think UFOs are real?",
  "I miss my dog so much",
  "When is the sky going to turn red?",
  "I think the best animals in the world are red pandas",
  "Do you think there is an afterlife?",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomNumber = () => Math.floor(Math.random() * 99);

// Gets a random username
const getRandomUsername = () =>
  `${getRandomArrItem(names)}${getRandomNumber()}`;

// Gets a random email
const getRandomEmail = () => `${getRandomArrItem(possibleEmail)}`;

// Function to generate random thoughts that we can add to the database. Includes thought reactions.
const getRandomThought = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(possibleThoughts),
      username: getRandomUsername(),
      reactions: [...getReactionsResponse(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each video
const getReactionsResponse = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomUsername(),
    });
  }
  return results;
};

const getRandomFriends = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      username: getRandomUsername(),
      email: getRandomEmail(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = {
  getRandomUsername,
  getRandomThought,
  getRandomEmail,
  getRandomFriends,
};
