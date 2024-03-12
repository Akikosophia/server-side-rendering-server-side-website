const main = document.querySelector('main'),
sidebar = main.querySelector('nav'),
toggle = main.querySelector(".toggle"),
searchBtn = main.querySelector(".search-box"),
modeSwitch = main.querySelector(".toggle-switch"),
modeText = main.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})


searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})


modeSwitch.addEventListener("click" , () =>{
    main.classList.toggle("dark");
    
    if(main.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});