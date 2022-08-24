import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import QuizPage from './pages/quiz/quiz.page';
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
        </Switch>
      </div>
  );
}

export default App;
