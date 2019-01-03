if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","catalog.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

x=xmlDoc.getElementsByTagName("SPORT");
i=0;

function displaySport()
{
    tITLE=(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
    ort=(x[i].getElementsByTagName("ORT")[0].childNodes[0].nodeValue);
    year=(x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue);
    Preise=(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
    dAURTION=(x[i].getElementsByTagName("DAURTION")[0].childNodes[0].nodeValue);
    txt="TITLE: " + tITLE + "<br>ORT: " + ort + "<br>Year: "+ year  + "<br>PRICE: " + Preise + "<br>DAURTION: "+ dAURTION ;
    document.getElementById("show").innerHTML=txt;
}

function next()
{
    if (i<x.length-1)
    {
        i++;
        displaySport();
    }
}

function previous()
{
    if (i>0)
    {
        i--;
        displaySport();
    }
}




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

