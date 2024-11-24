import { setupWorker } from 'msw/browser';
import { addReview, reviewsById } from './review';

const handlers = [reviewsById, addReview]; //모킹 데이터

export const worker = setupWorker(...handlers);
