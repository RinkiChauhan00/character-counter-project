let inp = document.querySelector("input");
let span = document.querySelector("span");
let p = document.querySelector("p");

inp.addEventListener("input", function(dets){
    let left = 20 - inp.value.length;
    span.textContent = left;
    if(left <= 0){
        p.style.display = "block";
        span.style.color = "red";
    }else{
        p.style.display = "none";
        span.style.color = "black";
    }
})