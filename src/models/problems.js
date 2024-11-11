import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Problem = sequelize.define(
  'Problem',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // difficulty: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
);

// To create the 'Problem' table in database, meant to run only once.
// (async () => {
//   await User.sync();
//   console.log("Sync Success");
// })();

// Code for testing
// Problem.create({ title: "Hello ", description: "boy" }).then(prob => {
//   console.log(prob.toJSON());
// }).catch((err) => {
//   console.log(err);
// })

export { Problem };