module.exports = (sequelize, Sequelize) => {
  const Tweet = sequelize.define(
    "tweet",
    {
      idTweet: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    {
      tableName: "tweet",
    }
  );
  return Tweet;
};
