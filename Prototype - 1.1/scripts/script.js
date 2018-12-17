var myImage = document.querySelector('im');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/spre1'){
      myImage.setAttribute('src','images/firefox2.png');
    }
    else{
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}