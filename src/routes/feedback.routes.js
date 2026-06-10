import express from "express";
import FeedbackController from "../controllers/feedback.controller.js";

const router = express.Router();

router.post(
  "/",
  FeedbackController.createFeedback
);

router.get(
  "/",
  FeedbackController.getAllFeedbacks
);

router.get(
  "/candidate/:candidateId",
  FeedbackController.getFeedbackByCandidate
);

router.delete(
  "/:id",
  FeedbackController.deleteFeedback
);

export default router;