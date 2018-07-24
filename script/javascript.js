(function () {
  "use strict";

  document.getElementById("newTask").onclick = addTask;

  var allToDo;

  function addTask() {
    var newTaskName = document.getElementById("nwTaskName").value;
    var newTaskDateTime = document.getElementById("nwTaskDateTime").value;

    document.getElementById("nwTaskName").value = "";
    document.getElementById("nwTaskDateTime").value = "";

    if (typeof (localStorage["toDo"]) == "undefined") {
      allToDo = {};
    } else {
      allToDo = JSON.parse(localStorage["toDo"]);
    }

    var y = {};
    y[newTaskName] = { newTaskDateTime };

    allToDo = Object.assign(allToDo, y);

    localStorage["toDo"] = JSON.stringify(allToDo);

    write(allToDo);
  }

  function readData(callback) {
    if (typeof (localStorage["toDo"]) == "undefined") {
      allToDo = {};
      var noToDo = document.createElement("div");
      noToDo.appendChild(document.createTextNode("No To Do in List"));
      document.getElementById("list").appendChild(noToDo);
    } else {
      allToDo = JSON.parse(localStorage["toDo"]);
      write(allToDo);
    }
  }

  function write(jsn) {
    for (var data in jsn) {

      if (obj.hasOwnProperty(data)) {

        var nm = document.createElement("div");
        var tm = document.createElement("div");
        nm.setAttribute("id", "tskName" + data);
        tm.setAttribute("id", "tskTime" + data);
        document.getElementById("list").appendChild(nm);
        document.getElementById("list").appendChild(tm);


        var labelNm = document.createElement("label");
        labelNm.appendChild(document.createTextNode("Name of Task: "));
        document.getElementById("tskName" + data).appendChild(labelNm);

        var inNm = document.createElement("input");
        document.getElementById("tskName" + data).appendChild(inNm);
        inNm.value = obj[data]["Name"];

        var labelTm = document.createElement("label");
        labelTm.appendChild(document.createTextNode("Date of Task: "));
        document.getElementById("tskTime" + data).appendChild(labelTm);

        var inTm = document.createElement("input");
        document.getElementById("tskTime" + data).appendChild(inTm);
        inTm.value = obj[data]["Address"];

        var b2 = document.createElement("BR");
        document.getElementById("list").appendChild(b2);
      }
    }
  }

  window.Init = function () {
    readData();
  };

  Init();
})();
