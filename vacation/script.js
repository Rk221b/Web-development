var username = window.prompt("Enter Your Name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += " , " +username;

var enterdays = document.getElementById("enterdays");
enterdays.onclick = calculatedays;

function calculatedays() {
    
    var daysinput = document.getElementById("days");
    var days = daysinput.value;
    
    var daymessage = document.getElementById("daysmessage");
    
    if(days < 4)
        {
            daymessage.innerHTML = "Short trips are always worth it !!";
        }
     else if(days < 7){
         daymessage.innerHTML = "Cool, you'll be there for almost a week!";
     }
     else{
         daymessage.innerHTML = "You'll have plenty of time to relax and have fun!";
     }
    
    var hours = days * 24;
var min = hours * 60;
var sec = min * 60;

var hourmessage = document.getElementById("hoursmessage");
hourmessage.innerHTML = "That means you will be traveling for " + hours + " hours.";

var minmessage = document.getElementById("minmessage");
minmessage.innerHTML = "That means you will be traveling for " + min + " minutes.";

var secmessage = document.getElementById("secmessage");
secmessage.innerHTML = "That means you will be traveling for " + sec + " seconds.";

var timingnext = document.getElementById("timingnext");
timingnext.removeAttribute("hidden");

timingnext.onclick = function() {
    
    document.getElementById("budgetsection").removeAttribute("hidden");
}

}

    var budgetinput = document.getElementById("enterbudget");
     budgetinput.onclick = calculatebudget;


function calculatebudget() {
    var getbudget = document.getElementById("tripbudget")
    var budget = getbudget.value;
    
    var daysinput = document.getElementById("days");
    var days = daysinput.value;
    
    var daily = budget * 0.021; 
    var perday = daily / days;
    
    
     var budgetmsg = document.getElementById("tripExchangeMsg");
    budgetmsg.innerHTML = "That means you will need " + daily + " NZD for your trip";
    
    var perdaymsg = document.getElementById("dailyExchangeMsg");
    perdaymsg.innerHTML = "That means you will need " + perday + " NZD per day for your trip";
    
    
    
}


var images = ["images/1.png" , "images/2.png" ,"images/3.png" ,"images/4.png" ];
document.body.style.backgroundImage = "url(" + images[0] + ")";

var currentimage = 0;

setInterval(changeimages, 3000);

function changeimages() {
    if(currentimage < images.length)
        {
            
            document.body.style.backgroundImage = "url(" + images[currentimage] + ")";
            currentimage++;
        }
    if(currentimage == images.length)
        {
            currentimage = 0;
        }
    
}
