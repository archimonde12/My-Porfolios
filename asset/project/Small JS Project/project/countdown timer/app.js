//Name of Weekdays in English
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
//Name of Months and the number day in each month in English
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
//Const value of Time in millisecond
const oneSec = 1000;
const oneMin = 1000 * 60;
const oneHour = 1000 * 60 * 60;
const oneDay = 1000 * 60 * 60 * 24;



function App() {
    //Select element 
    const title = document.querySelector(".deadline-info")
    const deadline = document.querySelector(".cooldown-timer")
    const timeboxItems = document.querySelectorAll(".time-box p")

    //Get future Date
    const today = getNowDate()
    const futureDate = getFutureDate(today, 10)

    //Get year, month, day and date of today
    let year = futureDate.getFullYear()
    let month = months[futureDate.getMonth()]
    let weekday = weekdays[futureDate.getDay()]
    let date = futureDate.getDate()

    //Show result in deadline
    title.innerText = `Give away Ends On ${weekday}, ${date} ${month} ${year} 11:30 am`

    let futureTime = futureDate.getTime()
    let todayTime = today.getTime()
    let remainingTime = getRemainingTime(todayTime, futureTime)

    if (remainingTime > 0) {

        let daysLeft = Math.floor(remainingTime / oneDay);
        let hoursLeft = Math.floor((remainingTime % oneDay) / oneHour);
        let minsLeft = Math.floor((remainingTime % oneHour) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / oneSec);

        const value = [daysLeft, hoursLeft, minsLeft, secsLeft]

        timeboxItems.forEach((item, index) => {
            item.innerHTML = fomart(value[index])
        })
    }
    else {
        clearInterval(cooldown)
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
    }
}
//Cooldown
let cooldown = setInterval(App, 1000)

//All Function
//output time in Date
function getNowDate() {
    return new Date()
}

//output time in Date
function getFutureDate(date, howManyDayMore) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + howManyDayMore, 11, 30, 0) //Date(year,month,date,hour,min,second)
}

//output time in milisecs
function getRemainingTime(currentTime, futureTime) {
    return futureTime - currentTime;

}

//output number in text
function fomart(item) {
    if (item < 10) {
        return (item = `0${item}`)
    }
    return item
}

