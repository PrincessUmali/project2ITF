function check() {
    var check1 = document.getElementById("register");
    var check2 = document.getElementById("FamProg");
    var check3 = document.getElementById("Email");
    var check4 = document.getElementById("PointofContact");
    var check5 = document.getElementById("HostingCommand");
    var text = document.getElementById("text");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    var text4 = document.getElementById("text4");
    var text5 = document.getElementById("text5");
    if (check1.checked) {
        text.style.display = "inline-block";
    }
    else {
        text.style.display = "none";
    }
    if (check2.checked) {
        text2.style.display = "inline-block";
    }
    else {
        text2.style.display = "none";
    }
    if (check3.checked) {
        text3.style.display = "inline-block";
    }
    else {
        text3.style.display = "none";
    } 
    if (check4.checked) {
        text4.style.display = "inline-block";
    }
    else {
        text4.style.display = "none";
    } 
    if (check5.checked) {
        text5.style.display = "inline-block";
    }
    else {
        text5.style.display = "none";
    }
}
function validForm() {
    var eventType = document.getElementById("eventType");
    var title = document.getElementById("title");
    var start = document.getElementById("start");
    var finish = document.getElementById("finish");
    var post = document.getElementById("postingDate");
    if (eventType.value == "Choose") {
        alert("Please select an event type!");
        return false;
    }
    else if (title.value == "") {
        alert("Please enter an event title!");
        return false;
    }
    else if (start.value == "") {
        alert("PLease put a starting date of the event!");
        start.focus();
        return false;
    }
    else if (finish.value == "") {
        alert("Please put a date that signifies the end of the event!");
        finish.focus();
        return false;
    }
    else if (post.value == "") {
        alert("Please put a posting date.");
        post.focus();
        return false;
    }
    else if (start.value > finish.value) {
        alert("The end of the event should not be earlier than the starting date.");
        start.focus();
        finish.focus();
        return false;
    }
    else if (post.value <= start.value && post.value <= finish.value) {
        alert("Please move the posting date after the end of the event!");
        post.focus();
        start.focus();
        finish.focus();
        return false;
    } 
    else {
        document.getElementById("Submited").innerHTML = "Your Event has been saved.";
        alert ("The Event has been saved!");
    }
    check();
}
validForm();