function clock() {
    var timer = new Date();
    var hour = timer.getHours();
    hour -= 1;
    var minute = timer.getMinutes();
    var second = timer.getSeconds();
    if(hour<10)   hour  ="0"+hour;
    if(minute<10) minute="0"+minute;
    if(second<10) second="0"+second;
    var frase = hour+":"+minute+":"+second;
    document.getElementById("horario").innerHTML = frase; 
   }

    import default clock;   

   