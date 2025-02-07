import { Outlet } from 'react-router-dom';

import { Navbar } from 'components/Layout/components/Navbar';

export const Comparison = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
