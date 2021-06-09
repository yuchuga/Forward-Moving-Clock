//when num < 10, 0 digit is append before the num digit
function addZero(num){ 
  return num < 10 ? `0${num}` : `${num}`;
}

function currentTime(){
    let time = new Date();  // create new object of Date class
    let hour = addZero(time.getHours());
    let min = addZero(time.getMinutes());
    let sec = addZero(time.getSeconds());

    var am_pm = "AM";
    if(hour == 12)  //change to PM when hour = 12
    am_pm = "PM";
    if (hour > 12){ //change hour to 1 when hour > 12
    hour -= 12;
    am_pm = "PM";
    }
    if (hour == 0){  //change to AM and hour to 12 when hour = 0
    hour = 12;
    am_pm = "AM";
    }

   //value of current time
   let TimeNow = `${hour}:${min}:${sec} ${am_pm}`;
   
   //update html element div id="time" to TimeNow
   const clock = document.getElementById("time"); 
   clock.innerHTML = TimeNow;
};

currentTime();
setInterval(currentTime, 1000);