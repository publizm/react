import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './App.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import koLocale from 'moment/locale/ko';

const DatePicker = () => {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    moment.locale('ko', koLocale);
  }, []);

  return (
    <>
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={startDate}
        endDate={endDate}
        endDatePlaceholderText="입국날짜"
        disabled="endDate"
        onDatesChange={({ startDate, endDate }) => {
          console.log(startDate, endDate);
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => {
          setFocusedInput(focusedInput);
        }}
        numberOfMonths={1}
        required={true}
        displayFormat="YY년MM월DD일"
      />
      <button>검색</button>
    </>
  );
};

// class DatePicker extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startDate: null,
//       endDate: null,
//       focusedInput: null,
//     };
//   }

//   render() {
//     moment.locale('ko', koLocale);
//     return (
//       <div className="App">
//         <DateRangePicker
//           startDateId="startDate"
//           endDateId="endDate"
//           startDate={this.state.startDate}
//           endDate={this.state.endDate}
//           onDatesChange={({ startDate, endDate }) => {
//             console.log(startDate, endDate);
//             this.setState({ startDate, endDate });
//           }}
//           focusedInput={this.state.focusedInput}
//           onFocusChange={focusedInput => {
//             this.setState({ focusedInput });
//           }}
//         />
//       </div>
//     );
//   }
// }

export default DatePicker;
