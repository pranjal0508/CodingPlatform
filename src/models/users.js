import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
    },
    Rank: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
);

// To create the 'User' table in database, meant to run only once.
// (async () => {
//   await User.sync();
//   console.log("Sync Success");
// })();

// Code for testing
// User.create({ name:"user", email:"user@gmail.com", password:"user123", birthday:"01/01/2000"}).then(prob => {
//     console.log(prob.toJSON());
//   }).catch((err)=>{
//     console.log(err);
//   })

export { User };