let tdee;
document.getElementById("mySubmit").onclick = function(){
    tdee = Number(document.getElementById("myText").value);
    console.log(tdee);
}

let weight;
document.getElementById("myWeightSubmit").onclick = function(){
    weight = Number(document.getElementById("myWeight").value);
    console.log(weight);
}



let whatAreYouDoingStepNumber;
document.getElementById("myStepsSubmit").onclick = function(){
    whatAreYouDoingStepNumber = Number(document.getElementById("myStepsInput").value);
    


let caloriesBurned = weight * whatAreYouDoingStepNumber * 0.00023;


    document.getElementById("result").textContent =
        "Calories burned from steps per day: " + caloriesBurned.toFixed(2);


   
let maintenanceCalories = tdee + caloriesBurned;
 document.getElementById("maintenanceResult").textContent =
        "Maintenance Calories " + maintenanceCalories.toFixed(2);
    
        };
