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
    company=(x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue);
    street=(x[i].getElementsByTagName("street")[0].childNodes[0].nodeValue);
    code=(x[i].getElementsByTagName("code")[0].childNodes[0].nodeValue);
    country=(x[i].getElementsByTagName("country")[0].childNodes[0].nodeValue);
    tele=(x[i].getElementsByTagName("tele")[0].childNodes[0].nodeValue);
    email=(x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
    txt="Company: " + company + "<br>Street Address: " + street + "<br>Postcode: "+ code  + "<br>Country: " + country + "<br>Telephone: "+ tele + "<br>Email: "+ email ;
    document.getElementById("show").innerHTML=txt;
}




function myFunctionn() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


