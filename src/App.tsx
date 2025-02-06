import { Route, Routes } from 'react-router-dom';

import { VideoCardComparisonPage } from 'pages/VideoCardComparison';
import { PhoneСomparisonPage } from 'pages/PhoneСomparison';

import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<PhoneСomparisonPage />}/>
        <Route path='/videoCardComparison' element={<VideoCardComparisonPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
