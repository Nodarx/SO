const dbManager = require("../database/db.manager");

function createTweet(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newTweetObject = {
    userIdUser: req.body.idUser,
    text: req.body.text,
  };
  dbManager.Tweet.create(newTweetObject)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        menssage: "SOMENTHING HAPPENED, ERROR",
      });
    });
}

async function findAllTweets(req, res) {
  try {
    const allTweets = await dbManager.Tweet.findAll({
      include: [{ model: dbManager.User }],
    });
    res.json(allTweets);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      menssage: error,
    });
  }
}

async function findTweetsByUser(req, res) {
  try {
    const { idUser } = req.params;
    const allTweets = await dbManager.Tweet.findAll({
      where: { userIdUser: idUser },
      include: [{ model: dbManager.User }],
    });
    res.json(allTweets);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      menssage: error,
    });
  }
}

function deleteTweet(req, res) {
  const { tweet } = req.params;
  dbManager.Tweet.destroy({ where: { tweet: tweet } }).catch((error) => {
    console.log(error);
    res.status(500).send({ message: "Some error occurred" });
  });
}

exports.createTweet = createTweet;
exports.findAllTweets = findAllTweets;
exports.deleteTweet = deleteTweet;
exports.findTweetsByUser = findTweetsByUser;
