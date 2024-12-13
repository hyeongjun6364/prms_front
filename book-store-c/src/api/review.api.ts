import { BookReviewItem } from '@/models/book.model';
import { requestHandler } from './http';
import { Retryer } from 'react-query/types/core/retryer';

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem[]>('get', `/reviews/${bookId}`);
};

interface AddBookReviewResponse {
  message: string;
}

export const addBookReview = async (
  bookId: string,
  data: BookReviewItemWrite
) => {
  return await requestHandler<AddBookReviewResponse>(
    'post',
    `/reviews/${bookId}`
  );
};

export type BookReviewItemWrite = Pick<BookReviewItem, 'content' | 'score'>;

export const fetchReviewAll = async () => {
  return await requestHandler<BookReviewItem[]>('get', '/reviews');
};
