'use strict'
var list = ['Wish Title', 'Expected Date', 'Your wish will be come true after xd','Remove'];
var form = document.querySelector('#form');
var input = document.querySelector('#wish');
var date = document.querySelector('#birthday');
var button = document.querySelector('#sub');
form.addEventListener('submit', function(event){
    input.event.value;
    date.event.value;
    console.log('input:', input)
});
var tab = document.querySelector('#tab');
function wishlist(){
    var trEl = document.createElement('tr');
    tab.append(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Wish Title';
    trEl.append(tdEl);
    var tdEl1 = document.createElement('td');
    tdEl1.textContent = 'Expected Date';
    trEl.append(tdEl1);
    var tdE2 = document.createElement('td');
    tdE2.textContent = 'Your wish will be come true after xd';
    trEl.append(tdE2);
    var tdEl3 = document.createElement('td');
    tdEl3.textContent = 'Remove';
    trEl.append(tdEl3);
}
wishlist();
WishList.all = [];
function WishList(wish, date, min, max){
    this.wish = wish;
    this.date = date;
    this.min = min;
    this.max = max;
    this.random = [];
    WishList.push(this);
}
WishList.prototype.getRandomYear = function(){
    var randomYear = getRandomNumber(1,99);
    this.random.push(randomYear);
}

WishList.getRandomNumber();
console.log(WishList.all)

function set(){
    var wishList = JSON.stringify(WishList.all);
    localStorage.setItem('WishList', wishList);
};
set();
function get(){
    var getWishList = localStorage.getItem('WishList');
    WishList.all = JSON.parse(getWishList);
}
g

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}