let SetDate = function(){
    document.getElementById("date").innerHTML=day+"/"+month+"/"+year
}
let setTime = function(){
    if(minute===0){
        document.getElementById("Hour").innerHTML=hour+":"+minute+"0" 
    }
    else{
     document.getElementById("Hour").innerHTML=hour+":"+minute 
}}


let updateHover = function(){
    document.getElementById("update").style.display='flex'
    if(minute===0){
    document.getElementById("update").innerHTML ="Last updated on "+day+"/"+month+"/"+year+" "+hour+":"+minute+"0"
}
else{
    document.getElementById("update").innerHTML ="Last updated on "+day+"/"+month+"/"+year+" "+hour+":"+minute
}}
let nonUpdateHover = function(){
    document.getElementById("update").style.display='none'
}
let refreshAnimation = function(){
    const refresh = document.getElementById("refreshIcon")

    
    refresh.style.animation = 'rotate 1s linear'

refresh.addEventListener('animationend', function(){
    this.style.animation='none'
})
}
let setTemp = function(){
    document.getElementById("temperature").innerHTML=temperature+tempUnit
    if(temperature>=25){
        document.getElementById("temperature").style.color="orange"
    }
    else if(temperature<=0){
        document.getElementById("temperature").style.color='aqua'
    }
}
let setWind = function(){
    document.getElementById("Wind").innerHTML=windSpeed+windUnit
}
let setSunRise =function(){
    document.getElementById("Sunrise").innerHTML=wschod
}
let setSunSet =function(){
    document.getElementById("Sunset").innerHTML=zachod
}
let setRainFalls = function(){
    document.getElementById("rainfalls").innerHTML=rainfalls
}
let setWeather = function(){
    let Icon = document.getElementById("weatherCodeIco")
    let x = WeatherCode
    switch (true) {
        case x>=1 && x<=3:
            Icon.src="clouds-ico.png";        
            break;
            case 13 || 17 || 29:
            Icon.src="lightning-ico.png";
            break;
        case x>=14 && x<=16:
            Icon.src="rain-ico.png";
            break;
        case x>=18 && x<=19:
            Icon.src="clouds-ico.png";
            break;
        case x===20 || x===24:
            Icon.src="light-rain-ico.png";
            break;
        case x===21:
            Icon.src="rain-ico.png";
            break;
        case x>=22 && x<=23:
            Icon.src="snow-ico.png";
            break;
        case x>=25 && x<=27:
            Icon.src="heavy-rain-ico.png";
            break;
        case x===28:
            Icon.src="clouds-ico.png";
            break;
        case x>=36 && x<=39:
            Icon.src="snow-ico.png";
            break;
        case x>=40 && x<=49:
            Icon.src="fog-ico.png";
            break;
        case x>=50 && x<=61:
            Icon.src="light-rain-ico.png";
            break;
        case x>=62 && x<=63:
            Icon.src="rain-ico.png";
            break;
        case x>=64 && x<=65:
            Icon.src="heavy-rain-ico.png";
            break;
        case x===66 || 68:
            Icon.src="light-rain-ico.png";
            break;
        case x===67 || 69:
            Icon.src="heavy-rain-ico.png";
            break;
        case x>=70 && x<=79:
            Icon.src="snow-ico.png";
            break;
        case x>= 80 && x<=84:
            Icon.src="heavy-rain-ico.png";
            break;
        case x>=85 && x<=90:
            Icon.src="snow-ico.png";
            break;
        case x===91:
            Icon.src="light-rain-ico.png";
            break;
        case x===92:
            Icon.src="rain-ico.png";
            break;
        case x>=93 && x<=94:
            Icon.src="snow-ico.png";
            break;
        case x>95:
            Icon.src="lightning-ico.png";
            break; 
        default:
            Icon.src="sun.png"
            break;
    }
    
}