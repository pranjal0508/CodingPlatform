import express from "express";
import { createProblem, getAllProblems , getOneProblem} from "../controllers/problemController.js"; 
import { submitProblem } from "../controllers/userHistoryController.js";
const router = express.Router();

router.get('/', (req, res)=>{
  res.send("Welcome to problem route")
})

router.post('/create', createProblem);
router.get('/getAll', getAllProblems);
router.get('/get/:id', getOneProblem)
router.get('/submit/:id', submitProblem)

export default router;