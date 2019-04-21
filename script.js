var money = prompt('Ваш бюджет на месяц?', ); 
var time = prompt('Введите дату в формате YYYY-MM-DD', );

var appData = {
    budget : money,
    timeData: time,
    optionalExpenses : {
        itemOfExpenditure: cost
    },
    income : [],
    savings: false
}

var itemOfExpenditure = prompt('Введите обязательную статью расходов в этом месяце', );
var cost = prompt('Во сколько обойдется?', );

alert("Ваш бюджет на один день " +  money/30 );