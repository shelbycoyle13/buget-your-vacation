const tripInfoButton = document.querySelector(".trip-info");
const dailyBudget = document.querySelector(".daily-budget");

const tripInfo = function () {
  const totalBudget = Number(prompt("What is your total budget?"));
  const accommodation = Number(prompt("What are your accommodation costs?"));
  const numDays = Number(prompt("How many days does your trip last?"));
  calculateDailyBudget(totalBudget, accommodation, numDays);
};

const calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  const daily = ((totalBudget - accommodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

tripInfoButton.addEventListener("click", tripInfo);

//tripInfo();
