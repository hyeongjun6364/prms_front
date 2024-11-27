import { setupWorker } from 'msw/browser';
import { addReview, reviewForMain, reviewsById } from './review';
import { bestBooks } from './book';
import { banners } from './banner';

const handlers = [reviewsById, addReview, reviewForMain, bestBooks, banners]; //모킹 데이터

export const worker = setupWorker(...handlers);
