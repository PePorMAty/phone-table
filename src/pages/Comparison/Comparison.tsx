import { Navbar } from 'components/Layout/components/Navbar';
import { Outlet } from 'react-router-dom';

export const Comparison = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
