let countdown;
const timeDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(second){
    clearInterval(countdown);

    const now = Date.now();
    const then = now + second* 1000;
    DisplayTimeLeft (second);
    displayEndTime(then);
    countdown = setInterval(()=> {
        const secondLeft = Math.round((then - Date.now())/1000);
         if (secondLeft < 0 ){
    clearInterval(countdown);
    return;
}
     DisplayTimeLeft(secondLeft);
    },1000);

}

function DisplayTimeLeft(second){
    const minutes = Math.floor(second /60)
    const reminderSecond = second%60;

    const display = `${minutes <10 ? '0':''}${minutes}:${reminderSecond < 10? '0':''}${reminderSecond}`;
    document.title = display;
    timeDisplay.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    endTime.textContent = `Be Back at ${hour > 10? hour -12 : hour}:${minutes < 10?'0':''}${minutes}`;
}

buttons.forEach( button => button.addEventListener('click',startTimer));

function startTimer(){
    const second = parseInt(this.dataset.time);
    timer(second);
}

document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    const toSecond = mins * 60;
    timer(toSecond); 
    console.log(toSecond);
});
