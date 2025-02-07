import { Route, Routes } from 'react-router-dom';

import { Comparison } from 'pages/Comparison';
import { PhoneComparisonPage } from 'pages/PhoneСomparison';
import { VideoCardComparisonPage } from 'pages/VideoCardComparison';

import { Layout } from './components/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/comparison' element={<Comparison />}/>
        <Route path='/comparison/phone' element={<PhoneComparisonPage />}/>
        <Route path='/comparison/videoCard' element={<VideoCardComparisonPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
