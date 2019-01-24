


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



function accesskey() {
    document.getElementById('home').accessKey = "1"
    document.getElementById('Packages').accessKey = "2"
    document.getElementById('Special').accessKey = "3"
    document.getElementById('Daytrip').accessKey = "4"
    document.getElementById('Holliday').accessKey = "5"
    document.getElementById('Sport').accessKey = "6"
    document.getElementById('Description').accessKey = "7"
    document.getElementById('fotos').accessKey = "8"
    document.getElementById('video').accessKey = "9"
    document.getElementById('wallpaper').accessKey = "w"
    document.getElementById('About').accessKey = "a"
    document.getElementById('Contact').accessKey = "c"
}
