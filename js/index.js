function GetCalculatedCalories() {
const age = Math.abs(document.getElementById('age').value);
const height = Math.abs(document.getElementById('height').value);
const weight = Math.abs(document.getElementById('weight').value);
const elem = document.getElementById('results');
const select = document.querySelector('select');
const choice = select.value;
if (choice === 'male') {
    result = Math.round(10 * weight + 6.25 * height) - (5 * age) + 5;
}

else {
result = Math.round(10 * weight + 6.25 * height) - (5 * age) - 161;
}

if (weight > 200) {
    alert ('Меньше ешь :)')
}
if (weight < 40) {
    alert ('Ну кому ты рассказываешь, по ночам булки топчишь, а вес как у пёрышка!')
}


elem.innerHTML = ` <p> Ваш базовый расход составляет: ${result} кКал </p>`
}