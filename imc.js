// prima idea
var imgArr = ["otava2_4x_v6_a_1280x720.png", "q4_a.png", "q3_c.png", "atrn_2_a.png", "atrn_5_a.png", "pointeC419_b.png", "pointeC48a9_b.png", "response4_b.png", "fotonix-it_members_5nl100i9nl6610nl33k8_1280x720b_02.jpg", "fotonix-it_members_9nl0-7210vl100k8_1280x720_07.jpg", "fotonix-it_member9_1280x720_00h.jpg", "fotonix-it_member5_1280x720_00i.jpg", "vf_prospect1_011_e.png", "vf_cyclops_005_f.png", "vf_lapses_011_b.png", "nunx_0_e.png"];

var hrefArr = ["llcd_01_4x_v6.html", "llcd_02.html", "llcd_03.html", "llcd_04.html", "llcd_05.html", "llcd_06.html", "llcd_07.html", "llcd_08.html", "llcd_09.html", "llcd_10.html", "llcd_11.html", "llcd_12.html", "llcd_13.html", "llcd_14.html", "llcd_15.html", "llcd_16.html"];

var i = 0;

// next and previous 

function loadNext() { 
    i++;     
    if (i == imgArr.length) {
    i = 0;
    }
    //a number of updates on one increment
    document.getElementById("nowImage").src = "http://www.fotonix.it/img/llcd/" + imgArr[i];
    document.getElementById("nowImage").alt = "Still frame from LLCD " + (i + 1);
    document.getElementById("nowLink").href = "http://www.fotonix.it/" + hrefArr[i];
    document.getElementById("nowLink").textContent = "View video file: LLCD " + (i + 1);
    document.getElementById("nowLink").title = "llcd " + (i + 1);

    console.log(i);
}

document.getElementById("arrow-right").addEventListener("click", loadNext);

//document.getElementById("nowImage").addEventListener("click", loadNext);

function loadPrev() {
    i--;     
    if (i < 0) {
    i = imgArr.length - 1; // -1 is required
    }
    //a number of updates on one decrement
    document.getElementById("nowImage").src = "http://www.fotonix.it/img/llcd/" + imgArr[i];
    document.getElementById("nowImage").alt = "Still frame from LLCD " + (i + 1);
    document.getElementById("nowLink").href = "http://www.fotonix.it/" + hrefArr[i];
    document.getElementById("nowLink").textContent = "View video file: LLCD " + (i + 1);
    document.getElementById("nowLink").title = "llcd " + (i + 1);
    console.log(i);
}

document.getElementById("arrow-left").addEventListener("click", loadPrev);


// slide and stop
var status = 0;
var timer = 0;

function slider() {
    if (status == 0) {
    status = 1;
    console.log("status: " + status);
    timer = setInterval(loadNext, 2400);
    console.log("timer: " + timer);
    }
}
document.getElementById("arrow-play").addEventListener("click", slider);


function stopper() {
    if (status == 1) {
    status = 0;
    console.log("status: " + status);
    clearInterval(timer);
    console.log("timer: " + timer);
    }
}
document.getElementById("square-stop").addEventListener("click", stopper);


// keyboard control
document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        console.log("37: left");
        loadPrev(); 
    } else if (e.keyCode == '39') {
        console.log("39: right");
        loadNext();
    } 
    else if (e.keyCode == '49') {
        console.log("49: 1");
        slider();
    } else if (e.keyCode == '48') {
        console.log("48: 0");
        stopper();
    } 
}
