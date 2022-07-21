const currentDate = () => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const today = new Date();
    
    let currentWeekday = weekdays[today.getDay()];
    var currentMonth = months[today.getMonth()];
    let currentDay = String(today.getDate()).padStart(2, '0');

    return {currentWeekday, currentMonth, currentDay}
}

export default currentDate;

