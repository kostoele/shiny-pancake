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
    var x = xmlDoc.getElementsByTagName("holldays");
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