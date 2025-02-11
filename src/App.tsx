import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Comparison } from 'pages/Comparison';
import { PhoneComparisonPage } from 'pages/PhoneComparison';
import { VideoCardComparisonPage } from 'pages/VideoCardComparison';

import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="comparison" element={<Comparison />}>
          <Route path="phone" element={<PhoneComparisonPage />} />
          <Route path="videoCard" element={<VideoCardComparisonPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
