var i = 0;
var x;

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

x=xmlDoc.getElementsByTagName("sports");
i=0;

function displaySport()
{
    title=(x[i].getElementsByTagName("title_")[0].childNodes[0].nodeValue);
    loc=(x[i].getElementsByTagName("loc")[0].childNodes[0].nodeValue);
    price=(x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);
    duration=(x[i].getElementsByTagName("duration")[0].childNodes[0].nodeValue);
    year=(x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue);
    txt="Title: " + title + "<br>Location: " + loc + "<br>Price: " + price + "<br>Duration: "+ duration + "<br>Year: "+ year;
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
