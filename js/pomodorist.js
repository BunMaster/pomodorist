var interval;
    var minutes = 24;
    var seconds = 59;
    
var reset = document.getElementById('reset');
reset.onclick = function() {
    minutes = 24;
    seconds = 59;
    clearInterval(interval);
   }


    function countdown(element) {
        interval = setInterval(function() {
            var el = document.getElementById(element);
            if(seconds == 0) {
                if(minutes == 0) {
                    alert(el.innerHTML = "DONE!");                 clearInterval(interval);
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }
            if(minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }
            var second_text = seconds > 1 ? 'seconds' : 'second';
           document.getElementById("countdown").innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
            seconds--;
        }, 1000);
    }



var intervol;
    var minutez = 10;
    var secondz = 00;



function countdowntwo(element) {
        intervol = setInterval(function() {
            var el = document.getElementById(element);
            if(secondz == 0) {
                if(minutez == 0) {
                    alert(el.innerHTML = "DONE!");                 clearInterval(interval);
                    return;
                } else {
                    minutez--;
                    secondz = 60;
                }
            }
            if(minutes > 0) {
                var minute_text = minutez + (minutez > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }
            var second_text = secondz > 1 ? 'seconds' : 'second';
           document.getElementById("countdowntwo").innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
            seconds--;
        }, 1000);
    }




var intervul;
    var minutex = 5;
    var secondx = 00;



function countdownthree(element) {
        intervul = setInterval(function() {
            var el = document.getElementById(element);
            if(secondx == 0) {
                if(minutex == 0) {
                    alert(el.innerHTML = "DONE!");                 clearInterval(interval);
                    return;
                } else {
                    minutex--;
                    secondx = 60;
                }
            }
            if(minutex > 0) {
                var minute_text = minutex + (minutex > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }
            var second_text = secondx > 1 ? 'seconds' : 'second';
           document.getElementById("countdownthree").innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
            seconds--;
        }, 1000);
    }
