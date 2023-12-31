const router = require('express').Router()
const InterviewService = require('../service/interview.service')

router.post("/",InterviewService.startTest)
router.post("/add-question",InterviewService.addQuestion)
router.get("/get-questions",InterviewService.getAllQuestions)

router.post("/submit-test",InterviewService.submitTest)
router.get("/get-questions",InterviewService.getAllQuestions)

router.get("/get-results",InterviewService.getResults)

module.exports = router;