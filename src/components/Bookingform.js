import { useFormik } from "formik"
import * as Yup from 'yup'
import { useEffect, useReducer } from "react"
import '../css/BookingForm.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { isDisabled } from "@testing-library/user-event/dist/utils"

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());
    let j = 0
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push({time: i + ':00', id: j});
            j++
        }
        if(random() < 0.5) {
            result.push({time: i + ':30', id: j});
            j++
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};  
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

function createDate(){
    let date = new Date()
    let day = date.getDate().toString().padStart(2,"0")
    let month = (date.getMonth()+1).toString().padStart(2,"0")
    let year = date.getFullYear().toString()
    return (`${year}-${month}-${day}`)
}
const date = createDate()


const BookingForm = (props) => {
    const formik = useFormik({
        initialValues: {
            resdate: date.toString(),
            restime: '',
            guests: '1',
            occasions: 'Birthday'
        },validationSchema: Yup.object().shape({
            restime: Yup.string().required("time is required"),
            guests: Yup.number().required("number of guests is required").min(1, "must be at least 1").max(10),
            occasions: Yup.string().required(),
            resdate: Yup.string().required().min(1)
        })
    })
    const navigate = useNavigate()
    const [issubmitted, setissubmitted]= useState()
    let today = new Date()


    const submit = (e)=>{
        e.preventDefault()
        document.getElementById('thank_you').style.display = "block";
        setissubmitted(submitAPI(formik))
        console.log(issubmitted)
        console.log('data submitted')
        setissubmitted(true)
        navigate('/confirmed-booking')
    }


    const updateTimes = (availableTimes, actions)=>{
        if (actions.type === "change"){
            const selected_date = document.getElementById('resdate').value
            console.log('success')
            formik.values.resdate = selected_date
            const newTimesList = fetchAPI(new Date(selected_date))
            console.log(newTimesList)
            console.log(formik)
            console.log(selected_date)
            if(selected_date === ""){formik.errors.resdate = "enter a valid date"}
            else{formik.errors.resdate = null}
            return {...availableTimes, times: newTimesList}
        }
    }
    useEffect(()=>{
        formik.values.restime = initialTimes.times[0].time
        document.getElementById('resdate').value = date
    },[])
    console.log(formik)
    if(formik.errors){
    }
    console.log(formik.errors)
    const initialTimes = {times: fetchAPI(today)}
    const [availableTimes, setTimes] = useReducer(updateTimes, initialTimes)

    return(
    <form className="form_container">
        <h1 data-testid="1" className="form_header">Book Now</h1>
        <div id="form_item">
            <label htmlFor="resdate">Choose date</label>
            <label htmlFor="resdate" id="resdate_error">error</label>
            <input type="date" id="resdate" onChange={()=>setTimes({type: 'change'})} data-testid="resdate"/>
        </div>
        <div id="form_item">
            <label htmlFor="restime" >Choose time</label>
            <select id="restime" onChange={formik.handleChange} data-testid="times">
                {availableTimes.times.map((time)=>(
                    <option key={time.id} className="time_options" data-testid="time_options">{time.time}</option>
                ))}
            </select>
        </div>
        <div id="form_item">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" data-testid='guests' onChange={formik.handleChange} value={formik.values.guests}/>
        </div>
        <div id="form_item">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={formik.handleChange}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
        </div>
        <div id="form_item_button" className="button_container">
            <input type="submit" value="Make Your reservation" onClick={submit} id="submit_button" disabled={formik.errors.resdate} data-testid="submit_button"/>
        </div>
        <p id="thank_you">thank you for registering</p>
    </form>
    )
}

export {BookingForm, fetchAPI, seededRandom}