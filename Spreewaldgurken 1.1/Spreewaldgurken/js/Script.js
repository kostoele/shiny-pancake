function myFunctionnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
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