import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import NavBar from '../../shared/components/NavBar'
import Footer from '../../shared/components/Footer'

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};


export default MainLayout
