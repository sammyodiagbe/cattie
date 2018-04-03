//IIEF
( function(){
    var token;
    let blink = document.getElementById("blink");
    let wideeye = document.getElementById("wideeye");
    let yawn = document.getElementById("yawn");
    let wave = document.getElementById("wave");
    let tickle = document.getElementById("tickle");
    let zzz = document.getElementById("zzz");
    let animationActive = false;
    let wiggleTail = document.getElementById("wiggletail");

    let blinkInterval = setInterval(function() {
        let nodes  = [];
        let lefteye = document.getElementById("lefteye");
        let righteye = document.getElementById("righteye");
        nodes.push(righteye, lefteye);
        animate(nodes, "blink")
    }, 5000);

    blinkInterval;
    window.onclick = function(e) {
        let animation = "";
        var nodes = [];
        
        switch(e.target) {
            case blink:
                let lefteye = document.getElementById("lefteye");
                let righteye = document.getElementById("righteye");
                nodes.push(righteye, lefteye);
                animate(nodes, "blink");
                break;
            case wideeye:
                let lefteyeAfter = document.getElementById("lefteyeafter");
                let righteyeAfter = document.getElementById("righteyeafter");
                nodes.push(lefteyeAfter, righteyeAfter);
                animate(nodes, "wideeyes");
                break;
            case yawn:
                let mouth = document.getElementById("mouth");
                nodes.push(mouth);
                animate(nodes, "yawn");
                break;
            case wave:
                let wavingHand = document.getElementById("leftleg");
                nodes.push(wavingHand)
                animate(nodes, "wave");
                break;
            case tickle: 
                console.log("tickling");
                break;
            case wiggleTail:
                console.log("wiggling tail");
                break;
            case zzz:
                document.getElementsByTagName("body")[0].style.background = "#000000";
                break;
            default:
                return;
        }
    }
    let animate = function(elem, animation) {
        if(animationActive) {
           
            return;
        }
//clearInterval(blinkInterval);
        animationActive = true;
        for(let a = 0; a < elem.length; a++) {
            elem[a].style.animationName = animation;
            elem[a].addEventListener("animationend", function() {
                elem[a].style.animationName = "";
                animationActive = false;
                blinkInterval;
            }, false);
        }
    };

    
} )();