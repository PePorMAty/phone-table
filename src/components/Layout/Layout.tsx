import { Header } from './components/Header';
import { NavBar } from './components/NavBar';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <NavBar />
      <main>{children}</main>
    </>
  );
};
