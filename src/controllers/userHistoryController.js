import { UserHistory } from "../models/usersHistory.js";
import { Problem } from "../models/problems.js";
import { User } from "../models/users.js";

const updateRank = async (userId) => {
  const user = await User.findOne({ where: { id: userId } })
  let currentRank = user.toJSON().Rank;
  console.log(currentRank);
  User.update({ Rank: currentRank + 1 }, {
    where: {
      id: userId
    }
  })
}

const submitProblem = async (req, res) => {
  const { id: userId, name: userName } = req.session.user;
  // console.log(userId);
  // console.log(userName);
  const problemId = req.params.id;
  // console.log(problemId);
  const alreadySolvedProb = await UserHistory.findOne({ where: { userId, problemId } });
  if (alreadySolvedProb == null) {
    try {
      const problem = await Problem.findOne({ where: { id: problemId } });
      const problemTitle = problem.toJSON().title;
      await UserHistory.create({ userId, userName, problemId, problemTitle, submissionTimestamp: Date.now() })
      updateRank(userId)
      res.status(201).json({ message: "Problem submitted successfully.", problem })
    } catch (error) {
      res.status(500).json({ error: "Could Not Submit" })
    }
  }
  else {
    res.status(405).json({ error: "Already submitted" })
  }
}

export { submitProblem };