const { getUserNum } = require("./guessNumber");

let secret = 0;

const randomNumber = () => {
  secret = Math.floor(Math.random() * 11);
  return secret;
};

randomNumber();

const checkNumber = (req, res) => {
  const userNum = getUserNum();
  if (secret == userNum) {
    randomNumber();
    res.status(200).send("Wow..., Correct Guess...");
  } else {
    console.log("User Number : ", userNum);
    console.log("Secret Number : ", secret);
    res.send("Better Luck Next Time..!!");
  }
};

module.exports = checkNumber;
