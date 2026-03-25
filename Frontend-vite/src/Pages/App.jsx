import React from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import UserProfile from '../Components/UserProfile';
import AdminRoutes from '../Admin/AdminRoutes';
import Bollywood from './Bollywood';
import Hollywood from './Hollywood';
import WebSeries from './WebSeries';
import WebSeriesDetail from '../Components/WebSeriesDetail'; 
import Cartoon from './Cartoon';
import CartoonDetail from '../Components/CartoonDetail';
import LoadingPage from '../Components/LoadingPage';
import WatcchList from './WatcchList';
import { WatchlistProvider } from "../Components/WatchListContext";
import SuccessPage from './SuccessPage';
import CancelPage from './CancelPage';


function App() {
  const location = useLocation();
  const hideNavAndFooterRoutes = ['/bollywood', '/hollywood', '/web-series', '/cartoons', '/web-series/:title', '/user-uploads','/watchlist'];
  const shouldHideNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-amber-100 grow">
      {!shouldHideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/web-series/" element={<WebSeries />} />
        <Route path="/web-series/:title" element={<WebSeriesDetail />} />
        <Route path="/cartoons" element={<Cartoon />} />
        <Route path='/cartoons/:title' element={<CartoonDetail />}/>
        <Route path='/loadingPage' element={<LoadingPage />}/>
        <Route path='/watchlist' element={<WatcchList />}/>
        <Route path='/success' element={<SuccessPage/>}/>
        <Route path='/cancel' element={<CancelPage/>}/>
      </Routes>
      {!shouldHideNavAndFooter && <Footer />}
    </div>
  );
}

function RootApp() {
  return (
        <WatchlistProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </WatchlistProvider>
  );
}

export default RootApp;