(function() {
  "use strict";

  // function readJSON(callback) {
  //   var xmlhttp = new XMLHttpRequest();
  //   var file = "../json_file/jsondata.json";

  //   xmlhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       var x = xmlhttp.responseText;
  //       write(x);
  //     }
  //   };
  //   xmlhttp.open("GET", file, true);
  //   xmlhttp.send();
  // }

  // function write(jsn) {
  //   var x = document.createElement("div");
  //   x.setAttribute("id", "list");
  //   document.getElementById("mainContainer").appendChild(x);
  //   document.getElementById("list").style.cssFloat = "right";
  //   document.getElementById("list").style.width = "60%";
  //   document.getElementById("list").style.backgroundColor = "rgb(202, 221, 234)";

  //   var obj = JSON.parse(jsn);
    
    
    

  //   for (var data in obj) {
      
  //     if (obj.hasOwnProperty(data)) {
        
  //       var nm = document.createElement("div");
  //       var tm = document.createElement("div");
  //       nm.setAttribute("id", "tskName"+data);
  //       tm.setAttribute("id", "tskTime"+data);
  //       document.getElementById("list").appendChild(nm);
  //   document.getElementById("list").appendChild(tm);  


  //       var labelNm = document.createElement("label");
  //       labelNm.appendChild(document.createTextNode("Name of Task: "));
  //       document.getElementById("tskName"+data).appendChild(labelNm);

  //       var inNm = document.createElement("input");
  //       document.getElementById("tskName"+data).appendChild(inNm);
  //       inNm.value = obj[data]["Name"];

  //       var labelTm = document.createElement("label");
  //       labelTm.appendChild(document.createTextNode("Date of Task: "));
  //       document.getElementById("tskTime"+data).appendChild(labelTm);

  //       var inTm = document.createElement("input");
  //       document.getElementById("tskTime"+data).appendChild(inTm);
  //       inTm.value = obj[data]["Address"];

  //       var b2 = document.createElement("BR");
  //       document.getElementById("list").appendChild(b2);
  //     }
  //   }
  // }

  window.Init = function() {
    
  };

  Init();
})();
