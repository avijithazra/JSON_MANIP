(function () {
  "use strict";

  document.getElementById("newTask").onclick = addTask;

  var allToDo;

  function addTask() {
    var newTaskName = document.getElementById("nwTaskName").value;
    var newTaskDateTime = document.getElementById("nwTaskDateTime").value;

    if ((newTaskName != null && newTaskName != "") && (newTaskDateTime != null && newTaskDateTime != "")) {
      document.getElementById("nwTaskName").value = "";
      document.getElementById("nwTaskDateTime").value = "";

      if (typeof (localStorage["toDo"]) === "undefined") {
        allToDo = {};
      } else {
        allToDo = JSON.parse(localStorage["toDo"]);
      }

      var y = {};
      y[newTaskName] = { newTaskDateTime };

      allToDo = Object.assign(allToDo, y);
      localStorage["toDo"] = JSON.stringify(allToDo);
      readData();
    } else {
      alert("Data Needed");
    }
  }

  function readData() {
    if (typeof (localStorage["toDo"]) === "undefined" || localStorage["toDo"] === "{}") {
      allToDo = {};
      var noToDo = document.createElement("div");
      var noToDoText = document.createTextNode("No To Do in List");
      noToDo.appendChild(noToDoText);
      document.getElementById("list").innerHTML = "";
      document.getElementById("list").appendChild(noToDo);
    } else {
      allToDo = JSON.parse(localStorage["toDo"]);
      write(allToDo);
    }
  }

  function write(obj) {
    document.getElementById("list").innerHTML = "";
    for (var data in obj) {
      if (obj.hasOwnProperty(data)) {
        var dataId = data;
        var fullDiv = document.createElement("div");
        fullDiv.setAttribute("id", dataId);
        document.getElementById("list").appendChild(fullDiv);

        document.getElementById(dataId).onclick = editDelete;

        var nm = document.createElement("div");
        var tm = document.createElement("div");

        nm.setAttribute("id", "taskName" + dataId);
        tm.setAttribute("id", "taskTime" + dataId);
        document.getElementById(dataId).appendChild(nm);
        document.getElementById(dataId).appendChild(tm);

        var labelNm = document.createElement("label");
        labelNm.appendChild(document.createTextNode("Name of Task: "));
        document.getElementById("taskName" + dataId).appendChild(labelNm);

        var inNm = document.createElement("input");
        document.getElementById("taskName" + dataId).appendChild(inNm);
        inNm.setAttribute("id", "nameShow" + dataId);
        document.getElementById("nameShow" + dataId).disabled = true;
        inNm.value = data;

        var labelTm = document.createElement("label");
        labelTm.appendChild(document.createTextNode("Time of Task: "));
        document.getElementById("taskTime" + dataId).appendChild(labelTm);

        var inTm = document.createElement("input");
        document.getElementById("taskTime" + dataId).appendChild(inTm);
        inTm.setAttribute("id", "timeShow" + dataId);
        document.getElementById("timeShow" + dataId).disabled = true;
        inTm.value = obj[data]["newTaskDateTime"];
      }
    }
  }

  function editDelete() {
    var tempId = this.id;
    var dlt = confirm("Do you Want to Delete " + tempId + "?");
    if (dlt) {
      var temp = JSON.parse(localStorage.toDo);
      delete temp[tempId];
      localStorage.toDo = JSON.stringify(temp);
      readData();
    } else {
      var edt = confirm("Do you Want to Edit " + tempId + "?");
      if (edt) {
        var temp = JSON.parse(localStorage.toDo);
        document.getElementById("nwTaskName").value = tempId;
        document.getElementById("nwTaskDateTime").value = temp[tempId]["newTaskDateTime"];
        delete temp[tempId];
        localStorage.toDo = JSON.stringify(temp);
      }
    }
  };

  //View Json Data
  // function write(jsn) {
  //   for (var data in jsn) {

  //     if (obj.hasOwnProperty(data)) {

  //       var nm = document.createElement("div");
  //       var tm = document.createElement("div");
  //       nm.setAttribute("id", "tskName" + data);
  //       tm.setAttribute("id", "tskTime" + data);
  //       document.getElementById("list").appendChild(nm);
  //       document.getElementById("list").appendChild(tm);


  //       var labelNm = document.createElement("label");
  //       labelNm.appendChild(document.createTextNode("Name of Task: "));
  //       document.getElementById("tskName" + data).appendChild(labelNm);

  //       var inNm = document.createElement("input");
  //       document.getElementById("tskName" + data).appendChild(inNm);
  //       inNm.value = obj[data]["Name"];

  //       var labelTm = document.createElement("label");
  //       labelTm.appendChild(document.createTextNode("Date of Task: "));
  //       document.getElementById("tskTime" + data).appendChild(labelTm);

  //       var inTm = document.createElement("input");
  //       document.getElementById("tskTime" + data).appendChild(inTm);
  //       inTm.value = obj[data]["Address"];

  //       var b2 = document.createElement("BR");
  //       document.getElementById("list").appendChild(b2);
  //     }
  //   }
  // }

  window.Init = function () {
    readData();
  };

  Init();
})();
