// ========================================
// MAINTENANCE-CALORIE CALCULATOR
// ========================================

const calorieForm = document.getElementById("calorieForm");
const maintenanceInput = document.getElementById("myText");
const weightInput = document.getElementById("myWeight");
const stepsInput = document.getElementById("myStepsInput");

const resultOutput = document.getElementById("result");
const maintenanceOutput =
    document.getElementById("maintenanceResult");

const calculatorResults =
    document.getElementById("calculatorResults");

const formMessage = document.getElementById("formMessage");
const clearCalculator =
    document.getElementById("clearCalculator");


calorieForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const tdee = Number(maintenanceInput.value);
    const weight = Number(weightInput.value);
    const dailySteps = Number(stepsInput.value);

    const valuesAreValid =
        Number.isFinite(tdee) &&
        Number.isFinite(weight) &&
        Number.isFinite(dailySteps) &&
        tdee > 0 &&
        weight > 0 &&
        dailySteps >= 0;

    if (!valuesAreValid) {
        formMessage.textContent =
            "Please enter valid positive numbers in all three fields.";

        calculatorResults.hidden = true;
        return;
    }

    const caloriesBurned =
        weight * dailySteps * 0.00023;

    const adjustedMaintenanceCalories =
        tdee + caloriesBurned;

    resultOutput.textContent =
        caloriesBurned.toFixed(0) + " calories";

    maintenanceOutput.textContent =
        adjustedMaintenanceCalories.toFixed(0) + " calories";

    formMessage.textContent = "";
    calculatorResults.hidden = false;

    calculatorResults.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});


clearCalculator.addEventListener("click", function () {
    formMessage.textContent = "";
    calculatorResults.hidden = true;
    resultOutput.textContent = "0";
    maintenanceOutput.textContent = "0";
});


// ========================================
// COUNTER PROGRAM
// ========================================

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

function displayCount() {
    countLabel.textContent = count;
}

increaseBtn.addEventListener("click", function () {
    count++;
    displayCount();
});

decreaseBtn.addEventListener("click", function () {
    count--;
    displayCount();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    displayCount();
});


// ========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================

const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();
