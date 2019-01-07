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




function myFunctionnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




displayTrip(0);

function displayTrip() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "Trip_catalog.xml", true);
    xmlhttp.send();
}


function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Day</th><th>Time</th><th>Location</th><th>Price</th><th>Activities</th></tr>";
    var x = xmlDoc.getElementsByTagName("Daytrip");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("day")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("location")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("activities")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}



displayHoliday(0);

function displayHoliday() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionHoliday(this);
        }
    };
    xmlhttp.open("GET", "Holiday_catalog.xml", true);
    xmlhttp.send();
}


function myFunctionHoliday(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Name</th><th>Duration</th><th>Persons</th><th>Kids</th><th>Hotel Type</th><th>Number of Nights</th><th>Accessories</th><th>Location</th><th>Price</th></tr>";
    var x = xmlDoc.getElementsByTagName("Holldays");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("duration")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("persons")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("kids")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("hoteltype")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("nights")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("service")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("location")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("holiday").innerHTML = table;
}







displayINFO(0);

function displayINFO(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction1(this, i);
        }
    };
    xmlhttp.open("GET", "INFO.xml", true);
    xmlhttp.send();
}

function myFunction1(xml, i) {
    var xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("INFO");
    document.getElementById("show").innerHTML =
        "country: " +
        x[i].getElementsByTagName("country")[0].childNodes[0].nodeValue +
        "<br>code: " +
        x[i].getElementsByTagName("code")[0].childNodes[0].nodeValue +
        "<br>street: " +
        x[i].getElementsByTagName("street")[0].childNodes[0].nodeValue +
        "<br>COMPANY: " +
        x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
        "<br>email: " +
        x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
        "<br>nummer: " +
        x[i].getElementsByTagName("uri")[0].childNodes[0].nodeValue;

}