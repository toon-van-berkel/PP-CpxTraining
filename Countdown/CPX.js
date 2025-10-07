let countdown = 1000;
let isRunning = false;

function startCountDown(state: boolean) {
    isRunning = true;

    if (state) {
        control.runInBackground(function () {
            while (isRunning && countdown > 0) {
                countdown--;
                console.log(countdown);
                loops.pause(10);
            }
            if (!isRunning) {
                console.log("Stopped!");
            } else {
                console.log("Countdown complete!");
            }
        })
    } else {
        isRunning = false;
    }
}

input.onGesture(Gesture.Shake, function () {
    startCountDown(true);
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    startCountDown(false);
    console.log('Stop countdown!');
})

input.buttonA.onEvent(ButtonEvent.Click, function () {
    countdown = 10000;

    startCountDown(true);
})