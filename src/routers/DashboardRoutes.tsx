import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/NavBar";
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import SearchScreen from '../components/search/SearchScreen';
import Hero from '../components/hero/Hero';

const DashboardRoutes = () => {

  return (
    <>
      <Navbar />
      <div className="container">

        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:id" element={<Hero />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  )
}

export default DashboardRoutes;
