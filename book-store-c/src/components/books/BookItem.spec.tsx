import { render } from '@testing-library/react';
import { BookStoreThemeProvider } from '../../context/themeContext';
import BookItem from './BookItem';
const dummyBook = {
  id: 1,
  title: '어린왕자들',
  img: 7,
  category_id: 0,
  form: '종이책',
  isbn: '0',
  summary: '어리다..',
  detail: '많이 어립니다..',
  author: '김어림',
  pages: 100,
  contents: '목차입니다.',
  price: 20000,
  pub_date: '2024-10-01',
  likes: 3,
};

describe('BookItem 단위테스트', () => {
  it('렌더 여부', () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText('20,000원')).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      'src',
      `https://picsum.photos/id/${dummyBook.img}/600/600`
    );
  });
});
