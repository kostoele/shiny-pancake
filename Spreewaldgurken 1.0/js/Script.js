displaySport(0);

function displaySport() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionSport(this);
        }
    };
    xmlhttp.open("GET", "catalog.xml", true);
    xmlhttp.send();
}


function myFunctionSport(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th><th>Location</th><th>Price</th><th>Duration</th><th>Days</th><th>Time</th></tr>";
    var x = xmlDoc.getElementsByTagName("SPORT");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("LOCATION")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("DURATION")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("DAYS")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("TIME")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("sporty").innerHTML = table;
}



function myFunction() {
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
