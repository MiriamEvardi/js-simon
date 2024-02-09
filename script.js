
// data e ora di lunedì
const mondayDate = new Date("February 12, 2024 9:30:00");
console.log(mondayDate)

const timer = setInterval(function () {
    // data di oggi
    const date = new Date();



    // function actualCountdown() {
    //ore mancanti
    const count = mondayDate - date;



    const days = Math.floor(count / (1000 * 60 * 60 * 24));

    const hours = Math.floor(count % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    const minutes = Math.floor(count % (1000 * 60 * 60) / (1000 * 60));

    const seconds = Math.floor(count % (1000 * 60) / 1000);


    document.getElementById("timer").innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s";


    if (count < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerText = "Time is up"
    }
}, 1000)









