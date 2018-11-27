let daysByRowsMonthView = 35;
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat '];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default (state = { 
    days: [],
    dayNames: [],
    monthName: '',
    year: ''
}, action) => {
    switch (action.type) {
        case 'CALENDAR_LOADED':
            let days = [];
            const today = new Date();
            const currentDate = new Date();

            // set to first day of month and then get last sunday before that
            currentDate.setDate(1);
            currentDate.setDate(-today.getDay() + 1);

            while(daysByRowsMonthView--) {
                days.push({
                    date: currentDate.getDate(),
                    day: currentDate.getDay(),
                    events: action.events.filter(event => event.date.toDateString() === currentDate.toDateString())
                });
                currentDate.setDate(currentDate.getDate() + 1);
            }

            return {
                ...state,
                dayNames,
                days,
                monthName: monthNames[today.getMonth()],
                year: today.getFullYear()
            };
        default:
            return state;
    }
};
