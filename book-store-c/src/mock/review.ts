import { BookReviewItem } from '@/models/book.model';
import { HttpResponse, http } from 'msw';
import { fakerKO as faker } from '@faker-js/faker';

const mockReviewData: BookReviewItem[] = Array.from({ length: 8 }).map(
  (_, index) => ({
    id: index,
    userName: `${faker.person.lastName()}${faker.person.firstName()}`,
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past().toISOString(),
    score: faker.number.int({ min: 1, max: 5 }), // 이부분은 많이 사용되기에 알아두자
  })
);

export const reviewsById = http.get(
  'http://localhost:9999/reviews/:bookId',
  () => {
    return HttpResponse.json(mockReviewData, {
      status: 200,
    });
  }
);

export const addReview = http.post(
  'http://localhost:9999/reviews/:bookId',
  () => {
    return HttpResponse.json(
      { message: '리뷰가 작성되었습니다' },
      {
        status: 200,
      }
    );
  }
);
