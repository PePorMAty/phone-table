import { Header } from './components/header';
import { ComparisonPage } from './pages/comparison';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ComparisonPage />
      </div>
    </>
  );
};

export default Layout;
