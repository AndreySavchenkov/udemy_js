function learnJs(lang, callback) {
    console.log('Я учу' + lang);
    callback();
}

learnJs('JavaScript', function() {
    console.log('Я прошел 3й урок!');
})