// ========================================
// MAINTENANCE-CALORIE CALCULATOR
// ========================================

const calorieForm = document.getElementById("calorieForm");
const maintenanceInput = document.getElementById("myText");
const weightInput = document.getElementById("myWeight");
const stepsInput = document.getElementById("myStepsInput");

const exerciseEntries =
    document.getElementById("exerciseEntries");

const addExerciseButton =
    document.getElementById("addExerciseButton");

const exerciseCaloriesOutput =
    document.getElementById("exerciseCaloriesResult");

const resultOutput = document.getElementById("result");
const maintenanceOutput =
    document.getElementById("maintenanceResult");

const proteinGoalOutput = document.getElementById("proteinGoal");

const fatGoalOutput =
    document.getElementById("fatGoal");

const carbGoalOutput =
    document.getElementById("carbGoal");

const fiberGoalOutput =
    document.getElementById("fiberGoal");

const calculatorResults =
    document.getElementById("calculatorResults");

const weightLossResults =
    document.getElementById("weightLossResults");

const lossResultOutput =
    document.getElementById("lossResult");

const lossMaintenanceOutput =
    document.getElementById("lossMaintenanceResult");

const lossProteinGoalOutput =
    document.getElementById("lossProteinGoal");

const lossFatGoalOutput =
    document.getElementById("lossFatGoal");

const lossCarbGoalOutput =
    document.getElementById("lossCarbGoal");

const lossFiberGoalOutput =
    document.getElementById("lossFiberGoal");

const weightGainResults =
    document.getElementById("weightGainResults");

const gainResultOutput =
    document.getElementById("gainResult");

const gainMaintenanceOutput =
    document.getElementById("gainMaintenanceResult");

const gainProteinGoalOutput =
    document.getElementById("gainProteinGoal");

const gainFatGoalOutput =
    document.getElementById("gainFatGoal");

const gainCarbGoalOutput =
    document.getElementById("gainCarbGoal");

const gainFiberGoalOutput =
    document.getElementById("gainFiberGoal");

const formMessage = document.getElementById("formMessage");
const clearCalculator =
    document.getElementById("clearCalculator");

const weightLossOneHalfResults =
    document.getElementById("weightLossOneHalfResults");

const lossOneHalfResultOutput =
    document.getElementById("lossOneHalfResult");

const lossOneHalfMaintenanceOutput =
    document.getElementById("lossOneHalfMaintenanceResult");

const lossOneHalfProteinGoalOutput =
    document.getElementById("lossOneHalfProteinGoal");

const lossOneHalfFatGoalOutput =
    document.getElementById("lossOneHalfFatGoal");

const lossOneHalfCarbGoalOutput =
    document.getElementById("lossOneHalfCarbGoal");

const lossOneHalfFiberGoalOutput =
    document.getElementById("lossOneHalfFiberGoal");

const lossExerciseCaloriesOutput =
    document.getElementById("lossExerciseCaloriesResult");

const lossOneHalfExerciseCaloriesOutput =
    document.getElementById("lossOneHalfExerciseCaloriesResult");

const gainExerciseCaloriesOutput =
    document.getElementById("gainExerciseCaloriesResult");

const exerciseOptions = [
    {
        name: "Yoga — gentle",
        met: 2.3
    },
    {
        name: "Yoga — moderate",
        met: 3.0
    },
    {
        name: "Yoga — vigorous/power yoga",
        met: 4.0
    },
    {
        name: "Weightlifting — light",
        met: 3.0
    },
    {
        name: "Weightlifting — moderate",
        met: 3.5
    },
    {
        name: "Weightlifting — vigorous",
        met: 6.0
    },
    {
        name: "Cycling — light",
        met: 4.0
    },
    {
        name: "Cycling — moderate",
        met: 6.8
    },
    {
        name: "Cycling — vigorous",
        met: 10.0
    },
    {
        name: "Running — 5 mph",
        met: 8.3
    },
    {
        name: "Running — 6 mph",
        met: 9.8
    },
    {
        name: "Running — 7.5 mph",
        met: 11.8
    },
    {
        name: "Swimming — leisurely",
        met: 4.8
    },
    {
        name: "Swimming laps — moderate",
        met: 5.8
    },
    {
        name: "Swimming laps — vigorous",
        met: 9.8
    },
    {
        name: "Dancing — moderate",
        met: 4.5
    },
    {
        name: "Aerobic exercise — vigorous",
        met: 7.3
    },
    {
        name: "Elliptical — moderate",
        met: 5.0
    },
    {
        name: "Stair machine",
        met: 9.0
    }
];

let exerciseEntryCount = 0;

function addExerciseEntry()
{
    exerciseEntryCount++;

    const exerciseRow = document.createElement("div");
    exerciseRow.classList.add("exercise-entry");

    const activityGroup = document.createElement("div");
    activityGroup.classList.add("exercise-input-group");

    const exerciseLabel = document.createElement("label");
    exerciseLabel.htmlFor =
        `exerciseType${exerciseEntryCount}`;
    exerciseLabel.textContent = "Exercise";

    const exerciseSelect = document.createElement("select");
    exerciseSelect.id =
        `exerciseType${exerciseEntryCount}`;
    exerciseSelect.classList.add("exercise-type");

    const placeholderOption =
        document.createElement("option");

    placeholderOption.value = "";
    placeholderOption.textContent =
        "Choose an activity";
    placeholderOption.selected = true;

    exerciseSelect.appendChild(placeholderOption);

    for (const exercise of exerciseOptions)
    {
        const option =
            document.createElement("option");

        option.value = exercise.met;
        option.textContent = exercise.name;

        exerciseSelect.appendChild(option);
    }

    activityGroup.appendChild(exerciseLabel);
    activityGroup.appendChild(exerciseSelect);

    const minutesGroup = document.createElement("div");
    minutesGroup.classList.add("exercise-input-group");

    const minutesLabel = document.createElement("label");
    minutesLabel.htmlFor =
        `exerciseMinutes${exerciseEntryCount}`;
    minutesLabel.textContent = "Minutes";

    const minutesInput = document.createElement("input");

    minutesInput.type = "number";
    minutesInput.id =
        `exerciseMinutes${exerciseEntryCount}`;
    minutesInput.classList.add("exercise-minutes");
    minutesInput.min = "1";
    minutesInput.max = "1440";
    minutesInput.step = "1";
    minutesInput.placeholder = "Example: 30";

    minutesGroup.appendChild(minutesLabel);
    minutesGroup.appendChild(minutesInput);

    const removeButton =
        document.createElement("button");

    removeButton.type = "button";
    removeButton.classList.add("remove-exercise");
    removeButton.textContent = "Remove";

    removeButton.addEventListener(
        "click",
        function ()
        {
            exerciseRow.remove();
        }
    );

    exerciseRow.appendChild(activityGroup);
    exerciseRow.appendChild(minutesGroup);
    exerciseRow.appendChild(removeButton);

    exerciseEntries.appendChild(exerciseRow);
}

function calculateExerciseCalories(weightInPounds)
{
    const weightInKilograms =
        weightInPounds / 2.20462;

    const exerciseRows =
        document.querySelectorAll(".exercise-entry");

    let totalExerciseCalories = 0;

    for (const row of exerciseRows)
    {
        const metValue = Number(
            row.querySelector(".exercise-type").value
        );

        const minutes = Number(
            row.querySelector(".exercise-minutes").value
        );

        if (metValue > 0 && minutes > 0)
        {
            const netMet = Math.max(metValue - 1, 0);

            const caloriesBurned =
                netMet *
                3.5 *
                weightInKilograms /
                200 *
                minutes;

            totalExerciseCalories += caloriesBurned;
        }
    }

    return totalExerciseCalories;
}

addExerciseButton.addEventListener(
    "click",
    addExerciseEntry
);

addExerciseEntry();

function exerciseEntriesAreValid()
{
    const exerciseRows =
        document.querySelectorAll(".exercise-entry");

    for (const row of exerciseRows)
    {
        const exerciseType =
            row.querySelector(".exercise-type").value;

        const minutes =
            row.querySelector(".exercise-minutes").value;

        const rowIsEmpty =
            exerciseType === "" && minutes === "";

        const rowIsComplete =
            exerciseType !== "" &&
            Number(minutes) > 0;

        if (!rowIsEmpty && !rowIsComplete)
        {
            return false;
        }
    }

    return true;
}

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

    if (!exerciseEntriesAreValid())
    {
        formMessage.textContent =
            "Please choose an activity and enter the number of minutes for each exercise.";

        calculatorResults.hidden = true;
        weightLossResults.hidden = true;
        weightGainResults.hidden = true;
        weightLossOneHalfResults.hidden = true;

        return;
    }

    if (!valuesAreValid) {
        formMessage.textContent =
            "Please enter valid positive numbers in all three fields.";

        calculatorResults.hidden = true;
        weightLossResults.hidden = true;
        weightGainResults.hidden = true;
        weightLossOneHalfResults.hidden = true;
        return;
    }

    const caloriesBurned =
        weight * dailySteps * 0.00023;

    const exerciseCalories =
        calculateExerciseCalories(weight);

    const adjustedMaintenanceCalories =
        tdee +
        caloriesBurned +
        exerciseCalories;

    exerciseCaloriesOutput.textContent =
        Math.round(exerciseCalories) + " calories";

    lossExerciseCaloriesOutput.textContent =
        Math.round(exerciseCalories) + " calories";

    lossOneHalfExerciseCaloriesOutput.textContent =
        Math.round(exerciseCalories) + " calories";

    gainExerciseCaloriesOutput.textContent =
        Math.round(exerciseCalories) + " calories";

    const weightLossCalories =
    adjustedMaintenanceCalories - 500;

    const weightLossOneHalfCalories =
    adjustedMaintenanceCalories - 750;

    const weightGainCalories =
    adjustedMaintenanceCalories + 500;

    const proteinGoal = weight;

    const fatGoal = weight * 0.35;

    const lossProteinGoal = proteinGoal;
    const lossFatGoal = fatGoal;

    const lossOneHalfProteinGoal = proteinGoal;
    const lossOneHalfFatGoal = fatGoal;

    const lossProteinCalories = lossProteinGoal * 4;
    const lossFatCalories = lossFatGoal * 9;

    const lossRemainingCalories =
        weightLossCalories -
        lossProteinCalories -
        lossFatCalories;

    const lossCarbGoal =
        lossRemainingCalories / 4;

    const lossFiberGoal =
        Math.max(25, weightLossCalories * 14 / 1000);

    const lossOneHalfFiberGoal =
        Math.max(
            25,
            weightLossOneHalfCalories * 14 / 1000
        );

    const proteinCalories = proteinGoal * 4;
    const fatCalories = fatGoal * 9;

    const remainingCalories =
        adjustedMaintenanceCalories -
        proteinCalories -
        fatCalories;

    const carbGoal = remainingCalories / 4;

    const fiberGoal =
        Math.max(25, adjustedMaintenanceCalories * 14 / 1000);

    const gainProteinGoal = proteinGoal;
    const gainFatGoal = fatGoal;

    const gainProteinCalories =
        gainProteinGoal * 4;

    const gainFatCalories =
        gainFatGoal * 9;

    const gainRemainingCalories =
        weightGainCalories -
        gainProteinCalories -
        gainFatCalories;

    const gainCarbGoal =
        gainRemainingCalories / 4;

    const gainFiberGoal =
        Math.max(25, weightGainCalories * 14 / 1000);

    const lossOneHalfProteinCalories =
    lossOneHalfProteinGoal * 4;

    const lossOneHalfFatCalories =
        lossOneHalfFatGoal * 9;

    const lossOneHalfRemainingCalories =
        weightLossOneHalfCalories -
        lossOneHalfProteinCalories -
        lossOneHalfFatCalories;

    const lossOneHalfCarbGoal =
        lossOneHalfRemainingCalories / 4;

    resultOutput.textContent =
        caloriesBurned.toFixed(0) + " calories";

    maintenanceOutput.textContent =
        adjustedMaintenanceCalories.toFixed(0) + " calories";

    proteinGoalOutput.textContent =
    proteinGoal.toFixed(0) + " g";

    fatGoalOutput.textContent =
    fatGoal.toFixed(0) + " g";

    carbGoalOutput.textContent =
        carbGoal.toFixed(0) + " g";

    fiberGoalOutput.textContent =
        fiberGoal.toFixed(0) + " g";

    lossResultOutput.textContent =
        caloriesBurned.toFixed(0) + " calories";

    lossMaintenanceOutput.textContent =
        weightLossCalories.toFixed(0) + " calories";

    lossProteinGoalOutput.textContent =
        lossProteinGoal.toFixed(0) + " g";

    lossFatGoalOutput.textContent =
        lossFatGoal.toFixed(0) + " g";

    lossCarbGoalOutput.textContent =
        lossCarbGoal.toFixed(0) + " g";

    lossFiberGoalOutput.textContent =
        lossFiberGoal.toFixed(0) + " g";

    gainResultOutput.textContent =
    caloriesBurned.toFixed(0) + " calories";

    gainMaintenanceOutput.textContent =
        weightGainCalories.toFixed(0) + " calories";

    gainProteinGoalOutput.textContent =
        gainProteinGoal.toFixed(0) + " g";

    gainFatGoalOutput.textContent =
        gainFatGoal.toFixed(0) + " g";

    gainCarbGoalOutput.textContent =
        gainCarbGoal.toFixed(0) + " g";

    gainFiberGoalOutput.textContent =
        gainFiberGoal.toFixed(0) + " g";

    lossOneHalfResultOutput.textContent =
        caloriesBurned.toFixed(0) + " calories";

    lossOneHalfMaintenanceOutput.textContent =
        weightLossOneHalfCalories.toFixed(0) + " calories";

    lossOneHalfProteinGoalOutput.textContent =
        lossOneHalfProteinGoal.toFixed(0) + " g";

    lossOneHalfFatGoalOutput.textContent =
        lossOneHalfFatGoal.toFixed(0) + " g";

    lossOneHalfCarbGoalOutput.textContent =
        lossOneHalfCarbGoal.toFixed(0) + " g";

    lossOneHalfFiberGoalOutput.textContent =
        lossOneHalfFiberGoal.toFixed(0) + " g";

    formMessage.textContent = "";
    calculatorResults.hidden = false;
    weightLossResults.hidden = false;
    weightGainResults.hidden = false;
    weightLossOneHalfResults.hidden = false;

    calculatorResults.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});


clearCalculator.addEventListener("click", function () {
    formMessage.textContent = "";
    calculatorResults.hidden = true;
    weightLossResults.hidden = true;
    weightGainResults.hidden = true;
    weightLossOneHalfResults.hidden = true;

    exerciseEntries.innerHTML = "";
    exerciseEntryCount = 0;
    addExerciseEntry();

    resultOutput.textContent = "0";
    maintenanceOutput.textContent = "0";
    proteinGoalOutput.textContent = "0";
    fatGoalOutput.textContent = "0";
    carbGoalOutput.textContent = "0";
    fiberGoalOutput.textContent = "0";
    exerciseCaloriesOutput.textContent = "0";
    exerciseCaloriesOutput.textContent = "0";
    lossExerciseCaloriesOutput.textContent = "0";
    lossOneHalfExerciseCaloriesOutput.textContent = "0";
    gainExerciseCaloriesOutput.textContent = "0";

    lossResultOutput.textContent = "0";
    lossMaintenanceOutput.textContent = "0";
    lossProteinGoalOutput.textContent = "0";
    lossFatGoalOutput.textContent = "0";
    lossCarbGoalOutput.textContent = "0";
    lossFiberGoalOutput.textContent = "0";

    gainResultOutput.textContent = "0";
    gainMaintenanceOutput.textContent = "0";
    gainProteinGoalOutput.textContent = "0";
    gainFatGoalOutput.textContent = "0";
    gainCarbGoalOutput.textContent = "0";
    gainFiberGoalOutput.textContent = "0";
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
