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
xmlhttp.open("GET","INFO.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

x=xmlDoc.getElementsByTagName("info");
i=0;




function displayinfo()
{
    country=(x[i].getElementsByTagName("country")[0].childNodes[0].nodeValue);
    code=(x[i].getElementsByTagName("code")[0].childNodes[0].nodeValue);
    street=(x[i].getElementsByTagName("street")[0].childNodes[0].nodeValue);
    COMPANY=(x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue);
    email=(x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
    nummer=(x[i].getElementsByTagName("uri")[0].childNodes[0].nodeValue);
    txt="Country: " + country + "<br>Code: " + code + "<br>Street: "+ street  + "<br>Company: " + COMPANY + "<br>Email: "+ email + "<br>Nummer: "+ nummer ;
    document.getElementById("show").innerHTML=txt;
}



function myFunction() {
    var y = document.getElementById("myTopnav");
    if (y.className === "topnav") {
        y.className += " responsive";
    } else {
        y.className = "topnav";
    }
}

