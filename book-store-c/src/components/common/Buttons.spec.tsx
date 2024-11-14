import { render, screen } from '@testing-library/react';
import { BookStoreThemeProvider } from '../../context/themeContext';
import Button from './Button';

describe('Button 컴포넌트 테스트', () => {
  it('렌더를 확인합니다', () => {
    //1. 렌더
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );
    //2. 확인
    expect(screen.getByText('버튼')).toBeInTheDocument();
  });
  it('size props', () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByRole('button')).toHaveStyle({ fontSize: '1.5rem' });
  });
  it('color props', () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByRole('button')).toHaveStyle({ color: 'white' });
  });
  it('disabled props', () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary" disabled>
          버튼
        </Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByRole('button')).toHaveStyle({ cursor: 'none' });
  });
});
