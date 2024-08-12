
import './App.css';
import {Nav} from "./components/Nav";
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BookingPage from './Pages/BookingPage';
import ConfirmedBookingPage from './Pages/ConfirmedBookingPage';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/reservations' element={<BookingPage/>}/>
        <Route path='/confirmed-booking' element={<ConfirmedBookingPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
