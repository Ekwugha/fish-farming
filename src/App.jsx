import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import QuizPage from './pages/quiz/quiz.page';
import PdfPage from './pages/pdf/pdf.page';
import MenuPage from './pages/menu/menu.page';
import CartPage from './pages/cart/cart.page';
import ContactPage from './pages/contact/contact.page';
import CalendarPage from './pages/calendar/calendar.page';
import 'bootstrap/dist/css/bootstrap.css';
import CustomNavbar from './component/navbar/custom-navbar.component';

function App() {
  return (
      <div>
        <CustomNavbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/quiz' component={QuizPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/calendar' component={CalendarPage} />
          <Route exact path='/pdf' component={PdfPage} />
          <Route exact path='/menu' component={MenuPage} />
          <Route exact path='/cart' component={CartPage} />
        </Switch>
      </div>
  );
}

export default App;
