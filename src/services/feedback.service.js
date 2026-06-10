import MongoFeedbackRepository from "../repositories/implementations/mongoFeedbackRepository.js";
import { AppError } from "../utils/errors.js";

class FeedbackService {
  constructor(repo) {
    this.feedbackRepo = repo;
  }

  async createFeedback(data) {
    return await this.feedbackRepo.createFeedback(data);
  }

  async getAllFeedbacks() {
    return await this.feedbackRepo.getAllFeedbacks();
  }

  async getFeedbackByCandidate(candidateId) {
    return await this.feedbackRepo.getFeedbackByCandidate(candidateId);
  }

  async deleteFeedback(feedbackId) {
    const deleted = await this.feedbackRepo.deleteFeedback(feedbackId);

    if (!deleted) {
      throw new AppError("Feedback not found", 404);
    }

    return deleted;
  }
}

const feedbackService = new FeedbackService(new MongoFeedbackRepository());

export default feedbackService;
