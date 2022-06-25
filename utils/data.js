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
];

const possibleResponses = [
  "I disagree!",
  "I tried your algorithm, here were the results",
  "This was awesome",
  "Thank you for the great content",
  "Please check out my video response",
  "Like and subscribe to my channel please",
  "Reply: The side effects of in app purchases on digital marketplaces",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomNumber = () => Math.floor(Math.random() * 10);

// Gets a random username
const getRandomUsername = () =>
  `${getRandomArrItem(names)} ${getRandomNumber()}`;

// Function to generate random videos that we can add to the database. Includes video responses.
const getRandomVideos = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(descriptionsBodies),
      advertiserFriendly: Math.random() < 0.5,
      responses: [...getVideoResponses(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each video
const getVideoResponses = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleResponses);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(possibleResponses),
      username: getRandomUsername(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomVideos, getRandomVideos };
