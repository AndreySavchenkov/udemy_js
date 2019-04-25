function first() {
    //что-то делаем
    setTimeout(function(){
        console.log(1);
    }, 500 );
}

function second() {
    console.log(2);
}

first();
second();

function learnJs(lang, callback) {
    console.log('Я учу' + lang);
    callback();
}



learnJs('JavaScript', function() {
    console.log('Я прошел 3й урок!');
})