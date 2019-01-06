displayINFO(0);

function displayINFO(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionInfo(this, i);
        }
    };
    xmlhttp.open("GET", "INFO.xml", true);
    xmlhttp.send();
}

function myFunctionInfo(xml, i) {
    var xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("INFO");
    document.getElementById("show").innerHTML =
        "Country: " +
        x[i].getElementsByTagName("country")[0].childNodes[0].nodeValue +
        "<br>Company: " +
        x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
        "<br>Street: " +
        x[i].getElementsByTagName("street")[0].childNodes[0].nodeValue +
        "<br>PostCode: " +
        x[i].getElementsByTagName("code")[0].childNodes[0].nodeValue +
        "<br>Tel: " +
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