let counter_container = document.querySelectorAll(".counter_container .timer");
let section = document.querySelector(".Number");
let started = false;


window.onscroll = function () {
    if(window.scrollY >= section.offsetTop-800){
        if(!started){
            counter_container.forEach((timer) => startCount(timer))
        }
        started = true;
    }
}



// counter_container.forEach((timer) => startCount(timer));
function startCount(el) {
    console.log('el',el.dataset.target,el.textContent)
    let goal = el.dataset.target;
    let count = setInterval(() => {
el.textContent++;
if(el.textContent==goal){
    clearInterval(count)
}
    }, 2000 / goal)
}

//Light-Dark





