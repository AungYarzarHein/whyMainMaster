
const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData , 2000)
function getData(){
    header.innerHTML = '<img src="images/water.jpg" alt="water">';
    title.innerHTML = "Neymar Junior";
    excerpt.innerHTML = "Hello Friends , I love friends maybe i should give you a name";
    name.innerHTML = "Neymar Jr";
    date.innerHTML = "Nov 22 2022";
    profile_img.style.background = 'url("images/neymar.jpg") no-repeat center center/cover';

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"))
}


