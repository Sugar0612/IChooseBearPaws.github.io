var switch_ = document.querySelector('.box .switch');
var circle_ = document.getElementById('round');
var box = document.getElementById('boxid');
var boxx = document.querySelector('.boxx');
var boxx2= document.querySelector('.boxx1');
var boxx1 = document.querySelector('.boxx2');

var flag = 1;
circle_.addEventListener('click', function() {
    if(flag == 1) {
        this.className = 'blackCircle';
        flag = 0;
        switch_.style.border = '2px solid rgb(11, 243, 81)';
        box.style.backgroundColor = 'rgb(7, 7, 29)';
        box.style.color = 'white';
        boxx.style.border = '5px dotted white';
        boxx1.style.border = '5px dotted white';
        boxx2.style.border = '5px dotted white';
    } else {
        this.className = 'circle';
        flag = 1;
        switch_.style.border = '2px solid black';
        box.style.backgroundColor = 'white';
        box.style.color = 'black'
        boxx.style.border = '5px dotted black';
        boxx1.style.border = '5px dotted white';
        boxx2.style.border = '5px dotted white';
    }
});