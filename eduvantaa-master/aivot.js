$(document).ready(function(){
    $(toggle1).click(function(){
        $(laatikko1).toggle();
    });
});
$(document).ready(function(){
    $(toggle2).click(function(){
        $(laatikko2).toggle();
    });
});
$(document).ready(function(){
    $(toggle3).click(function(){
        $(laatikko3).toggle();
    });
});

function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML = "<Table>"+
        "<tr> <td> Ensimmäinen sisältö </td> </tr> </Table>";
        
    }
        // toiminnallisuus puuttuu!
    
    else if (boxNumber == 3){
        document.getElementById("laatikko3").innerHTML = "<img src='smiley1.png'>";
        //toiminnallisuus puuttuu!

    }
    else if (boxNumber == 4){
        document.location.reload();
    }
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = 1; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
}
function diagrammiFunktio(){
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    var c = document.getElementById(myCanvas);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    
    // diagrammiin voidaan kirjoittaa numeroita haluttuihin kohtiin.
    ctx.fillText(50, 0, 450);
    
    // Alla olevalla koodilla voidaan piirtää viivaa diagrammiin.
    ctx.moveTo(40, 200);
    ctx.lineTo(60, 250);
    ctx.lineTo(80, 200);
    ctx.lineTo(100, 210);
    ctx.stroke();
    }
    function diagrammiFunktio(){
        var c = document.getElementById("myCanvas");
        var arvoArray;
        var arvoPituus;
        var piste=40;
        var diagrammi = c.getContext("2d");
        arvoArray = [100, 150, 100, 110, 120, 110, 120, 120, 130, 150, +
            100, 150, 100, 110, 120, 110, 420, 320, 430, 150, +
            150, 100, 150, 100, 110, 120, 110, 120, 120, 130, 150];
            
        arvoPituus= arvoArray.length;
        
        diagrammi.beginPath();
        diagrammi.strokeStyle = "blue";
    
        diagrammi.moveTo(piste, 500-arvoArray[0]);
        diagrammi.fillText(arvoArray[0], piste, 500-arvoArray[0]);
            
        for (i = 1; i < arvoPituus; i++) {
            piste=piste+20;
            diagrammi.lineTo(piste, 500-arvoArray[i]);
            diagrammi.fillText(arvoArray[i], piste, 500-arvoArray[i]);
        }
        diagrammi.stroke();
    
        diagrammi.fillText("50", 0, 450);
        diagrammi.fillText("100", 0, 400);
        diagrammi.fillText("150", 0, 350);
        diagrammi.fillText("200", 0, 300);
        diagrammi.fillText("250", 0, 250);
        diagrammi.fillText("300", 0, 200);
        diagrammi.fillText("350", 0, 150);
        diagrammi.fillText("400", 0, 100);
        diagrammi.fillText("450", 0, 50);
    
        diagrammi.fillText("5.1.", 120, 500);
        diagrammi.fillText("10.1.", 220, 500);
        diagrammi.fillText("15.1.", 320, 500);
        diagrammi.fillText("20.1.", 420, 500);
        diagrammi.fillText("25.1.", 520, 500);
        diagrammi.fillText("30.1.", 620, 500);
    }