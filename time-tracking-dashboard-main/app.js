const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const current = document.querySelectorAll('.current');
const previous = document.querySelectorAll('.previous');
const cards = document.querySelectorAll('.cards');

fetch("./data.json")
    .then((response) => {
    return response.json();
}).then((data) => {

    // daily btn event listener
   daily.addEventListener('click', function(event){
    cards.forEach(function(card){
        for(let i = 0; i<data.length; i++){
        current[i].textContent = data[i].timeframes.daily.current + 'hrs';
        previous[i].textContent = 'yesterday - ' + data[i].timeframes.daily.previous + 'hrs';
        }
        });
        changeActiveState(daily, weekly, monthly);
    })

    // weekly btn event listener
    weekly.addEventListener('click', function(event){
        cards.forEach(function(card){
            for(let i = 0; i<data.length; i++){
            current[i].textContent = data[i].timeframes.weekly.current + 'hrs';
            previous[i].textContent = 'last week - ' + data[i].timeframes.weekly.previous + 'hrs';
            }
            });
        changeActiveState(weekly, daily, monthly);

        })

    // monthly btn event listener
    monthly.addEventListener('click', function(event){
    cards.forEach(function(card){
        for(let i = 0; i<data.length; i++){
        current[i].textContent = data[i].timeframes.monthly.current + 'hrs';
        previous[i].textContent = 'last month - ' + data[i].timeframes.monthly.previous + 'hrs';
        }
        });
        changeActiveState(monthly, weekly, daily);
        event.preventDefault();
    });    
})

function changeActiveState(active, inactive1, inactive2){
    active.classList.add('active');
    inactive1.classList.remove('active')
    inactive2.classList.remove('active')
}
