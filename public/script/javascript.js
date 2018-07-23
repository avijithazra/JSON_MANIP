(function () {
  "use strict";

  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundImage = "url('../resource/bgimg.jpg')";
  document.body.style.backgroundSize = "cover";


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

  var labelName = document.createElement("LABEL");
  labelName.appendChild(document.createTextNode("Name of Task: "));
  document.getElementById("body").appendChild(labelName);

  var inName = document.createElement("input");
  inName.setAttribute("id", "name");
  document.getElementById("body").appendChild(inName);
  var taskName = document.getElementById("name").value;

  var br = document.createElement("BR");
  document.getElementById("body").appendChild(br);

  var labelTime = document.createElement("LABEL");
  labelTime.appendChild(document.createTextNode("Time: "));
  document.getElementById("body").appendChild(labelTime);

  var inTime = document.createElement("input");
  inTime.setAttribute("id", "time");
  inTime.setAttribute("type", "datetime-local");
  document.getElementById("body").appendChild(inTime);
  var taskTime = document.getElementById("time").value;
  document.getElementById("time").style.cssFloat = "right";
  var br2 = document.createElement("BR");
  document.getElementById("body").appendChild(br2);
  var snd = document.createElement("BUTTON");
  snd.setAttribute("id", "btnsnd");
  snd.innerHTML = "Save";

  document.getElementById("body").appendChild(snd);
  document.getElementById("btnsnd").style.margin = "10px";
  //document.getElementById("btnsnd").style.cssFloat = "right";

  //const ff = require('fs');

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
    document.getElementById("myTable").style.cssFloat = "right";

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
