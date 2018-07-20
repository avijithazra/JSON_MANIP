(function () {
  "use strict";

  document.body.style.backgroundImage = "url('../resource/bgimg.jpg')";
  var d2 = document.createElement("div");
  d2.setAttribute("id", "input");
  document.getElementById("mainContainer").appendChild(d2);
  document.getElementById("input").style.backgroundColor = "#007ACC";
  document.getElementById("input").style.width = "30%";

  var d3 = document.createElement("div");
  var d4 = document.createElement("div");
  d3.setAttribute("id", "head");
  d4.setAttribute("id", "body");
  document.getElementById("input").appendChild(d3);
  document.getElementById("input").appendChild(d4);
  document.getElementById("head").style.height = "20%";

  var name = document.createTextNode("New Task");
  document.getElementById("head").appendChild(name);
  
  var inbx = document.createElement("input");
  inbx.setAttribute("id", "name");
  document.getElementById("body").appendChild(inbx);
  var taskName = document.getElementById("name").value;


  function readJSON(callback) {
    var xmlhttp = new XMLHttpRequest();
    var file = "../json_file/jsondata.json";

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var x = xmlhttp.responseText;
        write(x);
      }
    };
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
  }

  function write(jsn) {
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
