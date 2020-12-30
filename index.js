function fruitsClicked(){
    var x = document.getElementsByClassName("vegetables");
    var y = document.getElementsByClassName("grocery");
    var z = document.getElementsByClassName("frozenanddairy");
    var a = document.getElementsByClassName("fruits");

    displayThis(a);
    displayNone(x);
    displayNone(y);
    displayNone(z);
}

function vegetablesClicked(){
    var x = document.getElementsByClassName("fruits");
    var y = document.getElementsByClassName("grocery");
    var z = document.getElementsByClassName("frozenanddairy");
    var a = document.getElementsByClassName("vegetables");

    displayThis(a);
    displayNone(x);
    displayNone(y);
    displayNone(z);
}

function groceryClicked(){
    var x = document.getElementsByClassName("fruits");
    var y = document.getElementsByClassName("vegetables");
    var z = document.getElementsByClassName("frozenanddairy");
    var a = document.getElementsByClassName("grocery");

    displayThis(a);
    displayNone(x);
    displayNone(y);
    displayNone(z);
}

function frozenanddairyClicked(){
    var x = document.getElementsByClassName("fruits");
    var y = document.getElementsByClassName("vegetables");
    var z = document.getElementsByClassName("grocery");
    var a = document.getElementsByClassName("frozenanddairy");

    displayThis(a);
    displayNone(x);
    displayNone(y);
    displayNone(z);
}

function allClicked(){
    var x = document.getElementsByClassName("fruits");
    var y = document.getElementsByClassName("vegetables");
    var z = document.getElementsByClassName("grocery");
    var a = document.getElementsByClassName("frozenanddairy");

    displayThis(x);
    displayThis(y);
    displayThis(z);
    displayThis(a);
}

function displayThis(classes){
    var i;
    for(i = 0; i < classes.length; i++){
        classes[i].style.display = "inline-block";
    }
}

function displayNone(classes){
    var i;
    for(i = 0; i < classes.length; i++){
        classes[i].style.display = "none";
    }
}

function enlarge(){

}