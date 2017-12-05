var minutes = minutes = 24;
var seconds = seconds = 59;
    
    function countdown(element) {
    var reset = document.getElementById('reset');
    
        reset.onclick = function() {
            minutes = 24;
            seconds = 59;
            clearInterval(interval);
        }
        
        interval = setInterval(function() {
            var el = document.getElementById(element);
            if(seconds == 0) {
                if(minutes == 0) {
                    alert(el.innerHTML = "DONE!");                 clearInterval(interval);
                    window.location.reload();
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

document.getElementById("drugideo").style.visibility="hidden";
document.getElementById("trecideo").style.visibility="hidden";
getElementById("startovi").disabled= true;
         }




var intervol;
    var minutez = 9;
    var secondz = 59;

function countdowntwo(element) {
    
        intervol = setInterval(function() {
            var el = document.getElementById(element);
            if(secondz == 0) {
                if(minutez == 0) {
                    alert(el.innerHTML = "DONE!");                 clearInterval(intervol);
                    window.location.reload();
                } else {
                    minutez--;
                    secondz = 60;
                }
            }
            if(minutez > 0) {
                var minute_text = minutez + (minutez > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }
            var second_text = secondz > 1 ? 'seconds' : 'second';
           document.getElementById("countdown").innerHTML = minute_text + ' ' + secondz + ' ' + second_text + ' remaining';
            secondz--;
        }, 1000);
    
document.getElementById("prvideo").style.visibility="hidden";
document.getElementById("trecideo").style.visibility="hidden"; 
    }


var intervul;
    var minutex = 4;
    var secondx = 59;



function countdownthree(element) {
        intervul = setInterval(function() {
            var el = document.getElementById(element);
            if(secondx == 0) {
                if(minutex == 0) {
                    alert(el.innerHTML = "DONE!");                 clearInterval(intervul);
                    window.location.reload();
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
           document.getElementById("countdown").innerHTML = minute_text + ' ' + secondx + ' ' + second_text + ' remaining';
            secondx--;
        }, 1000);
    
document.getElementById("prvideo").style.visibility="hidden";
document.getElementById("drugideo").style.visibility="hidden"; 
    }
