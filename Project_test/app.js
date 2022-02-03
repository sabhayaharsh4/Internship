showTxt();
function add() {
  //console.log("h");
  let x = document.getElementById("addTxt");
  if (x.value.length == 0) {
    alert("Please Enter Text");
  } else {
    let txt = localStorage.getItem("text");
    let txtObj = "";
    if (txt == null) txtObj = [];
    else txtObj = JSON.parse(txt);
    txtObj.push(x.value);
    localStorage.setItem("text", JSON.stringify(txtObj));
    x.value = "";
    showTxt();
  }
}
function showTxt() {
  let txt = localStorage.getItem("text");
  let txtObj = "";
  if (txt == null) {
    txtObj = [];
  } else txtObj = JSON.parse(txt);
  let store = "";
  txtObj.forEach(function (element, index) {
    store += ` 
    
       <div class=" my-2 mx-2 card" style="  background-color:rgb(200, 195, 195)">
                    <div class="card-body" id="elementholder">
                        <h5 class="card-title">Data ${index + 1}</h5>
                        <p class="first1 " id="${index}"> ${element}</p>
                        <div class="row">
                        <button id="${index}"onclick="deleteTxt(this.id)" class=" col btn btn-outline-danger mx-2">Delete </button>
                        <button id="${index}"onclick="editTxt(this.id)" class="col btn btn-outline-secondary mx-2" >Edit </button>
                        <button id="${index}" class="col btn btn-outline-success mx-2"  type="button" onclick="updateText(this.id)"> Update </button>
                        </div>
                        </div>
                </div>`;
  });
  if (txtObj.length == 0) {
    document.getElementById("dataholder").innerHTML = null;
    document.getElementById("cs").style = "display:visible";
    //   "<h1 style=text:center>hii</h1>";
  } else {
    document.getElementById("dataholder").innerHTML = store;
    document.getElementById("cs").style = "display:none";
  }
}

function clr() {
  // console.log("gg");
  let confirmAction = confirm("Are you sure to Clear the list?");
  if (confirmAction) {
    let txt = localStorage.getItem("text");
    let txtObj = "";
    if (txt == null) {
      txtObj = [];
      console.log("clearif    ");
    } else {
      txtObj = JSON.parse(txt);
      console.log("clearelse");
    }
    txtObj = [];
    localStorage.setItem("text", JSON.stringify(txtObj));
    showTxt();
  } else {
    alert("Action canceled");
  }
  document.getElementById("updateValue").style.display = "none";
  document.getElementById("btnUpdate").style.display = "none";
}
function deleteTxt(index) {
  let confirmAction = confirm("Are you sure to Delete this list?");
  if (confirmAction) {
    // console.log("index", index);
    let txt = localStorage.getItem("text");
    let txtObj = "";
    if (txt == null) {
      txtObj = [];
    } else {
      txtObj = JSON.parse(txt);
    }
    txtObj.splice(index, 1);
    localStorage.setItem("text", JSON.stringify(txtObj));

    showTxt();
  } else {
    alert("Action canceled");
  }
  document.getElementById("updateValue").style.display = "none";
  document.getElementById("btnUpdate").style.display = "none";
}

//console.log(document.getElementsByClassName("first").innerHTML);
function editTxt(index) {
  // console.log(index, "index");
  //  ?nsole.log(update_);
  var update_ = document.getElementsByClassName("first1")[index].innerHTML;
  //var update_ = document.getElementsByName("first").innerHTML;
  //console.log(update_);
  searchTxt(index);
}
//   console.log(index);
//   var input = `<input type="text">`;
//   document.getElementById("dataholder").innerHTML = input;
//   //   console.log("hh");
//   //   let elem = document.getElementById("dataholder");
//   //   let noTextAreas = document.getElementsByClassName("textarea").length;
//   //   if (noTextAreas == 0) {
//   //     let html = elem.innerHTML;
//   //     elem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
//   //   }
function searchTxt(index) {
  // console.log(index, "index");
  var update_ = document.getElementsByClassName("first1")[index].innerHTML;
  // console.log(update_);
  document.getElementById("updateValue").style.display = "block";
  //   document.getElementById("btnUpdate").style.display = "block";
  document.getElementById("updateValue").value = update_;
  updateText();
}
function updateText(index) {
  var temp = document.getElementById("updateValue").value;
  console.log("index", temp[index]);
  if (temp.length !== 0) {
    document.getElementsByClassName("first1")[index].innerHTML = temp;
    let txt = localStorage.getItem("text");
    let txtObj = "";
    if (txt == null) {
      txtObj = [];
    } else txtObj = JSON.parse(txt);
    txtObj[index] = temp;
    // console.log(txtObj);
    localStorage.setItem("text", JSON.stringify(txtObj));
  } else alert("Please fill the value");
  document.getElementById("updateValue").style.display = "none";
  // showTxt();
  // localStorage.setItem("text", temp);
  // console.log(temp);
}
