import { Outlet } from 'react-router'
import NavBar from '../../shared/components/NavBar'
import Footer from '../../shared/components/Footer'

const MainLayout = () => {
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
