import ReactDOM from 'react-dom/client';
import App from './App';

// 목서버 타이밍 이슈
async function mountApp() {
  //개발환경으로 msw제한
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mock/browser');
    await worker.start(); //msw 시작
  }

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(<App />);
}

mountApp();
