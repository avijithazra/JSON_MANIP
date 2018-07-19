(function () {
  "use strict";
  document.body.style.backgroundImage = "url('../resource/bgimg.jpg')";
  function readJSON(callback) {
    var xmlhttp = new XMLHttpRequest();
    var file = "../json_file/jsondata.json";

    xmlhttp.onreadystatechange = function () {
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
    var obj = JSON.parse(jsn);
    var thr = document.createElement("tr");
    document.getElementById("myTable").appendChild(thr);

    for (var data in obj) {
      if (obj.hasOwnProperty(data)) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var txt1 = document.createTextNode(data);
        td1.appendChild(txt1);
        tr.appendChild(td1);
        document.getElementById("myTable").appendChild(tr);

        for (var zz in obj[data]) {
          if (obj[data].hasOwnProperty(zz)) {
            var td2 = document.createElement("td");
            var txt2 = document.createTextNode(obj[data][zz]);
            td2.appendChild(txt2);
            tr.appendChild(td2);
            console.log(zz);
            
          }
        }
      }
    }
  }

  window.Init = function () {
    readJSON();
  };

  Init();
})();
