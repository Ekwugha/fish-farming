import React from 'react';
import Calendar from '../../component/calendar/calendar.component';
import Header from '../../component/header/header.component';
import Footer from '../../component/footer/footer.component';


function CalendarPage() {
    return (
        <div>
            <Header title="calendar"/>
            <Calendar />
            <Footer />
        </div>
    )
}

export default CalendarPage;