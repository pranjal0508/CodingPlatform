import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const UserHistory = sequelize.define(
  'UserHistory',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    problemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    problemTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    submissionTimestamp : {
      type: DataTypes.DATE,
    }
  },
);

// (async () => {
//   await UserHistory.sync();
//   console.log("Sync Success");
// })();

// UserHistory.create({ userId: 100, userName: "Jack", problemId: 111, problemTitle: "DSA", submissionTimestamp: Date.now() }).then(history => {
//   console.log(history.toJSON());
// }).catch((err) => {
//   console.log(err);
// })

export { UserHistory }