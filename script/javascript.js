(function() {
  "use strict";

  function readJSON(callback) {
    var xmlhttp = new XMLHttpRequest();
    var file = "../json_file/jsondata.json";

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var x = xmlhttp.responseText;
        writeTable(x);
      }
    };
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
  }

  function writeTable(jsn) {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.getElementById("mainContainer").appendChild(x);
    console.log(jsn);
    for (m in jsn) {
      document.getElementById("myTable").innerHTML += m + "<br>";
    }
  }

  window.Init = function() {
    readJSON();
  };

  Init();
})();
