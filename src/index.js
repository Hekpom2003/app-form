import React from "react";
import ReactDOM from "react-dom";

import 'react-dates/initialize';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

class DateRangePickerWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null,
            startDate: null,
            endDate: null
        };
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDatesChange({startDate, endDate}) {

        this.setState({startDate, endDate});
    }

    onFocusChange(focusedInput) {
        this.setState({focusedInput});
    }


    render() {
        const {focusedInput, startDate, endDate} = this.state;

        return (
            <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
            />
        )
    }
}


let app_form_calc = {
    price: 100,
    currency: "RUB",
    factor: {
        RUB: 1,
        USD: 0.03
    },
    date: {
        from: false,
        to: false
    },
    discounts: {
        week: 5,
        month: 10,
        half_year: 12
    }
};

class AppForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("handleChange");
        // this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} onChange={this.handleChange()}>
                <div className="price-box">
                    100 Rub в сутки
                </div>
                <div className="date-box">
                    <DateRangePickerWrapper/>
                </div>
                <div className="app-form__result" id="app_result">
                    <div id="total_price">
                        <div className="left">234</div>
                        <div className="right">
                            <div className="value">23424234</div>
                        </div>
                    </div>
                    <div id="discount_price">
                        <div className="left">Скидка</div>
                        <div className="right">
                            <div className="value">23424234</div>
                        </div>
                    </div>
                    <div id="sum_price"></div>
                </div>
            </form>
        );
    }
}

ReactDOM.render(
    <AppForm props={app_form_calc}/>,
    document.getElementById("app_form"))
;