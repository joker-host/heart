const heart = document.querySelector('.heart');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');


heart.addEventListener('click', function() {
    heart.style.width = "500px";
    heart.style.height = "500px";
    heart.style.fill = "red";
    title.style.display = "block";
    subtitle.style.display = "none";
})