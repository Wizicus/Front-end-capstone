
import {BookingForm, fetchAPI, seededRandom} from "../components/Bookingform"
import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

test('initializes the default time options in the booking form', ()=>{
    render(
        <Router>
            <Routes>
                <Route path="*" element={<BookingForm/>}></Route>
            </Routes>
        </Router>
        )
    const time_options = screen.getAllByTestId('time_options');
    let today = new Date()
    
    let test_values = fetchAPI(today)
    let initial_values = []
    for(let i=0; i<time_options.length; i++){
        initial_values.push({time: time_options[i].value, id:i})
    }
    console.log('----test values----')
    console.log(test_values)
    console.log('----initial values ----')
    console.log(initial_values)

    expect(test_values).toEqual(initial_values);
})

test('updates the time options when a new date is selected',()=>{
    render(
        <Router>
            <Routes>
                <Route path="*" element={<BookingForm/>}></Route>
            </Routes>
        </Router>
        )
    const calendar = screen.getByTestId('resdate')
    fireEvent.change(calendar, {target:{value: '2024-07-02'}})
    console.log('--------------------------------------')
    console.log(calendar.value)
    console.log('--------------------------------------')
    const time_options = screen.getAllByTestId('time_options');
    fireEvent.change(calendar, {target:{value: '2024-07-15'}})
    const new_time_options = screen.getAllByTestId('time_options')
    console.log('--------------------------------------')
    console.log(calendar.value)
    console.log('--------------------------------------')
    expect(time_options).not.toEqual(new_time_options)
})

test('checks if the form validates on the client side by giving junk data', ()=>{
    render(
        <Router>
            <Routes>
                <Route path="*" element={<BookingForm/>}></Route>
            </Routes>
        </Router>
        )
    const calendar = screen.getByTestId('resdate')
    const submit_button = screen.getByTestId('submit_button')
    fireEvent.change(calendar, {target:{value: ''}})
    expect(submit_button).toBeDisabled()
})
