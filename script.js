let text;
function func1(){
    document.querySelector(".previous-text").style.color = "black";
    text = document.querySelector("input").value;
    document.querySelector(".previous-text").textContent = text;
    document.querySelector(".previous>img").style.display= "inline-block";
    document.querySelector(".previous").style.visibility = "visible";
    // console.log("HI");
}

function del() {
    document.querySelector(".previous-text").innerHTML = "!!! Message Deleted !!!";
    document.querySelector(".previous-text").style.color = "red";
    // document.querySelector(".previous>img").style.visibility = "hidden";
    document.querySelector(".previous>img").style.display = "none";
}
