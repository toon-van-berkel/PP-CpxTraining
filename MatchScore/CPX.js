let countdown = 1000;
let isRunning = false;
let score = 0;
let scoreGoal = 0;

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

function showGoal(amount: number) {
    if (amount > 1) {
        amount--;
        scoreGoal = amount;
    } else {
        scoreGoal = 1;
        amount = 0;
    }

    for (let i = 0; i < amount; i++) {
        light.setPixelColor(i, Colors.Red);
    }
}


input.buttonB.onEvent(ButtonEvent.Click, function () {
    score++;
    light.setPixelColor(10 - score, Colors.Blue);

    if (score === scoreGoal) {
        light.setAll(Colors.Green);
        loops.pause(1000);
        light.setAll(Colors.Black);

        score = 0;
        showGoal(Math.randomRange(1, 5));
    }
})

showGoal(Math.randomRange(1, 5));