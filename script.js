var body = document.querySelector("body");
var theme = document.querySelector("#theme");

theme.addEventListener("click",function(){
    var currentTheme = body.getAttribute("class")
    if(currentTheme == "light"){
        body.setAttribute("class", "dark");
        theme.innerHTML = `<i class="ri-moon-fill">`;

    }
    else{
        body.setAttribute("class", "light");
        theme.innerHTML = `<i class="ri-sun-fill">`;
    }
});