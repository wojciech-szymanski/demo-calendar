const calendarLoaded = (events) => {
    return {
        type: 'CALENDAR_LOADED',
        events
    }
};

export default calendarLoaded;