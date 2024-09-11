import Header from './components/Header';
import Footer from './components/Footer'
import MainPage from './components/MainPage';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import Category from './components/Category';
import Single from './components/Single';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  
  return (
    <>
    <BrowserRouter>
   
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/Category/:category" element={<Category />}/>
      <Route path="/Single/:category/:id" element={<Single />}/>
      <Route path="/*" element={<NotFound />}/>
    </Routes>
    <ScrollToTop />
    <Footer />

    </BrowserRouter>
    </>
  );
}

export default App;
