// NOTE: the following code works ONLY with the HTTP(S) protocol.
// Firefox may also work with the file:// protocol, but the other web browsers will not!

// register listener for the "on HTML finished loading" event
window.addEventListener("load", function (evt) {
  // read the XML content and when ready, display
  // the XML data by invoking the showXMLData function
  readXMLData("./data.xml", showXMLData);
});

/**
 * Read the XML data from the XML file, and execute the successCallback
 * if all went fine, otherwise execute the errorCallback function.
 *
 * @param xmlFilePath
 *    relative or absolute path of the XML data file.
 * @param successCallback
 *    reference to a function to be executed when the XML data was read
 *    and no error was encountered - its parameter is the XML document object.
 *    Defaults to a basic function that displays the XML document in the browser console.
 * @param errorCallback
 *    reference to a function to be executed when errors were encountered 
 *    during the read of the XML file - its parameter contains error details.
 *    Defaults to a basic function that displays the error details in the browser console.
 */
function readXMLData (xmlFilePath, successCallback, errorCallback) {
  var successCallback = typeof successCallback === "function" 
    ? successCallback : function (data) {console.log(data);};
  var errorCallback = typeof errorCallback === "function" 
    ? errorCallback : function (data) {console.log("Error:", data);};
  var xmlhttp = new XMLHttpRequest();     
  // register the onload event which triggers when 
  // loading was finished and no errors were encountered
  xmlhttp.onload = function (evt) {
    successCallback(xmlhttp.responseXML); 
  }
  // register the onerror event which triggers when 
  // errors are encountered (e.g., missing file, invalid content, etc)
  xmlhttp.onerror = function () {
    errorCallback("failed to load the XML file: " + xmlFilePath); 
  }
  // start reading the file (asynchronous operation)
  xmlhttp.open("GET", xmlFilePath);
  xmlhttp.send();
};

/**
 * Display XML document as HTML content.
 * It creates a div element for each Book entry and 
 * display the relevant Book information using paragraphs.
 * 
 * @param xmlDoc
 *    the XML document that contains the Books and Authors data.
 */ 
function showXMLData (xmlDoc) {
  var i = 0, j = 0, n = 0, authorNames = ""; 
  var bookXMLEl = null, authorXMLEl = null, authorXMLElements = null;
  var bookDiv = null, bookPropPara = null;
  // get reference to the HTML element where to display the XML content
  var htmlParentEl = document.getElementById("xmlDataContainer");
  // get reference to the root element of the XML Document (i.e., library)
  var xmlDocRootEl =  xmlDoc.getElementsByTagName("library")[0];
  // get the list of Book elements
  var bookXMLElements = xmlDocRootEl.getElementsByTagName("Book");
  // display the Book(s) 
  for (i = 0; i < bookXMLElements.length; i++) {
    bookXMLEl = bookXMLElements.item(i);
    bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    // Book ISBN
    bookPropPara = document.createElement("p");
    bookPropPara.innerHTML = "ISBN: " 
      + bookXMLEl.getAttribute("isbn");
    bookDiv.append(bookPropPara);
    // Book title
    bookPropPara = document.createElement("p");
    bookPropPara.innerHTML = "Title: " 
      + bookXMLEl.getElementsByTagName("title")[0].textContent;
    bookDiv.append(bookPropPara);
    // Book author(s)
    authorXMLElements = bookXMLEl.getElementsByTagName("Author");
    n = authorXMLElements.length;
    if (n > 0) {
      bookPropPara = document.createElement("p");
      bookPropPara.innerHTML = "Author(s): ";
      for (j = 0; j < n; j++) {
        authorXMLEl = xmlDoc.getElementById(authorXMLElements.item(j).getAttribute("aid"));
        bookPropPara.innerHTML += authorXMLEl.getElementsByTagName("fullName")[0].textContent;
        if (j < n-1) bookPropPara.innerHTML += ", ";
        
      }
    }
    bookDiv.append(bookPropPara);
    htmlParentEl.append(bookDiv);
  }
};


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

