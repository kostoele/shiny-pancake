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




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}