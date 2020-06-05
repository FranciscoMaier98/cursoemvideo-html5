const $elementExampleFirst = document.querySelector('.exemplo-first');
const $elementExampleLast = document.querySelector('.exemplo-second');

$elementExampleFirst.addEventListener('click', function(event){
    this.classList.toggle('elementExample_isActive');
    $elementExampleLast.classList.add('elementExample_isActive');
});

$elementExampleLast.addEventListener('click', function(event){
    this.classList.toggle('elementExample_isActive');
    $elementExampleFirst.classList.add('elementExample_isActive');
});
