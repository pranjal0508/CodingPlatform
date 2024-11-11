import { Problem } from "../models/problems.js";

const createProblem = async (req, res) => {
  const { title, description } = req.body;
  // console.log(title);
  // console.log(description);
  try {
    const problem = await Problem.create({ title, description });
    // console.log(problem);
    res.status(201).json({ message: "Problem created successfully.", problem })
  } catch (error) {
    // console.log("err");
    res.status(400).json({ error: "Error Occured" })
  }
}

const getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.findAll();
    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: "Error Occured" })
  }
}

const getOneProblem = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const problem = await Problem.findOne({ where: { id } })
    if(problem == null)
      res.json({message: "No Data"})
    else res.json(problem);
  } catch (error) {
    res.status(500).json({ error: "Error Occured" })
  }
}

export { createProblem, getAllProblems , getOneProblem};