import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ThemeSwitcher from './components/header/ThemeSwitcher';
import { BookStoreThemeProvider } from './context/themeContext';
function App() {
  return (
    <>
      <BookStoreThemeProvider>
        <Layout>
          <Home />
        </Layout>
      </BookStoreThemeProvider>
    </>
  );
}

export default App;
