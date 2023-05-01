EventUtil.addHandler(window, "load", initcomp);

function initcomp() {
    list = document.getElementById("list");

    EventUtil.addHandler(list, "click", show);

    btn1 = document.getElementById("btn1");
    btn2 = document.getElementById("btn2");
    btn3 = document.getElementById("btn3");
    EventUtil.addHandler(btn1, "click", addList);
    EventUtil.addHandler(btn2, "click", updateList);
    EventUtil.addHandler(btn3, "click", deleteList);
}

var arr = new Array();

function shopping(x, y, z) {
    this.txtname = x;
    this.txtqty = y;
    this.txtprice = z;
}

function addList() {
    var txtname = document.getElementById("txt1").value;
    var txtqty = document.getElementById("txt2").value;
    var txtprice = document.getElementById("txt3").value;
    var obj = new shopping(txtname, txtqty, txtprice);
    arr.push(obj);
    display();
}

function display() {
    var str = "";
    for (i = 0; i < arr.length; i++) {
        str += "<li>" + arr[i].txtname + " " + arr[i].txtqty + " " + arr[i].txtprice + "</li>";
    }

    list.innerHTML = str;
}

function show(event) {
    var str = event.target.innerHTML;
    strArr = str.split(" ");
    document.getElementById("txt1").value == strArr[0];
    document.getElementById("txt2").value == strArr[1];
    document.getElementById("txt3").value == strArr[2];
}

function updateList() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].txtname == document.getElementById("txt1").value) {
            arr[i].txtqty = document.getElementById("txt2").value;
            arr[i].txtprice = document.getElementById("txt3").value;
        }
    }
    display();
}

function deleteList() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].txtname == document.getElementById("txt1").value) {
            arr.splice(i, 1);
        }

    }
    display();
}