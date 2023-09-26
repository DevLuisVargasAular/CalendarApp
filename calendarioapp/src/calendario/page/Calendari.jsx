
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import enUS from 'date-fns/locale/en-US';

import { Navbar } from "../";
import {addHours, format, parse, startOfWeek, getDay} from 'date-fns';


const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})
const events = [{
title:'Dia de pago',
notes:'Hay que hacer mercado',
start: new Date('2023-09-28'),
end: addHours(new Date(), 2),
bgColor :'#fafafa',
user:{
_id:'123',
name:'Fernado'}



}]
export const Calendari = () => {
    return (
        <>
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)'}}
            />

        </>)
}
