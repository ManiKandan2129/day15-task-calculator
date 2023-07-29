function creatediv(tagname, classname, classvalue, idname, idvalue){
    var div = document.createElement(tagname);
    div.setAttribute(classname, classvalue);
    div.setAttribute(idname, idvalue);
    return div; 
}

function createbutton(tagname, type, typevalue, idname, idvalue, content){
    var button = document.createElement(tagname);
    button.innerHTML = content;
    button.setAttribute(type, typevalue);
    button.setAttribute(idname, idvalue);
    return button;
}

var container = creatediv("div", "class", "container", "id", "container");
var row1 = creatediv("div", "class", "row", "id", "row1");
var col1 = creatediv("div", "class", "col-12", "id", "col1");
var title = document.createElement("p");
title.innerHTML = "Do Simple Mathematical Operations here..!";
title.setAttribute ("id", "description");

var head = document.createElement("h1")
head.setAttribute("id","title");
head.innerHTML = "Simple Calculator"


var box = creatediv("div", "class", "box", "id", "box");
var row2 = creatediv("div", "class", "row", "id", "row2");
var col2 = creatediv("div", "class", "col-12", "id", "col2");
var ans = creatediv("div", "class", "ans", "id", "ans");
ans.innerHTML = "   ";

var row3 = creatediv("div", "class", "row", "id", "row3");
var col3 = creatediv("div", "class", "col-12", "id", "col3");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "result");
input.setAttribute("placeholder","0");
col3.append(input);

var row4 = creatediv("div", "class", "row", "id", "row-num");
var col4 = creatediv("div", "class", "col-3", "id", "row-button");
var seven = createbutton("button", "type", "button", "id", "seven","7");
var col5 = creatediv("div", "class", "col-3", "id", "row-button");
var eight = createbutton("button", "type", "button", "id", "eight","8");
var col6 = creatediv("div", "class", "col-3", "id", "row-button");
var nine = createbutton("button", "type", "button", "id", "nine","9");
var col7 = creatediv("div", "class", "col-3", "id", "row-button");
var plus = createbutton("button", "type", "button", "id", "add","+");

var row5 = creatediv("div", "class", "row", "id", "row-num");
var col8 = creatediv("div", "class", "col-3", "id", "row-button");
var four = createbutton("button", "type", "button", "id", "four","4");
var col9 = creatediv("div", "class", "col-3", "id", "row-button");
var five = createbutton("button", "type", "button", "id", "five","5");
var col10 = creatediv("div", "class", "col-3", "id", "row-button");
var six = createbutton("button", "type", "button", "id", "six","6");
var col11 = creatediv("div", "class", "col-3", "id", "row-button");
var minus = createbutton("button", "type", "button", "id", "subtract","-");

var row6 = creatediv("div", "class", "row", "id", "row-num");
var col12 = creatediv("div", "class", "col-3", "id", "row-button");
var one = createbutton("button", "type", "button", "id", "one","1");
var col13 = creatediv("div", "class", "col-3", "id", "row-button");
var two = createbutton("button", "type", "button", "id", "two","2");
var col14 = creatediv("div", "class", "col-3", "id", "row-button");
var three = createbutton("button", "type", "button", "id", "three","3");
var col15 = creatediv("div", "class", "col-3", "id", "row-button");
var multi = createbutton("button", "type", "button", "id", "multi","x");

var row7 = creatediv("div", "class", "row", "id", "row-num");
var col16 = creatediv("div", "class", "col-3", "id", "row-button");
var clear = createbutton("button", "type", "button", "id", "clear","C");
var col17 = creatediv("div", "class", "col-3", "id", "row-button");
var zero = createbutton("button", "type", "button", "id", "zero","0");
var col18 = creatediv("div", "class", "col-3", "id", "row-button");
var equal = createbutton("button", "type", "button", "id", "equal","=");
var col19 = creatediv("div", "class", "col-3", "id", "row-button");
var divide = createbutton("button", "type", "button", "id", "divide","/");


document.body.append(container);
container.append(row1);
row1.append(head, title, col1);
col1.append(box);

box.append(row2);
row2.append(col2);
col2.append(ans);
box.append(row3);
row3.append(col3);

box.append(row4);
row4.append(col4, col5, col6, col7);
col4.append(seven);
col5.append(eight);
col6.append(nine);
col7.append(plus);

box.append(row5);
row5.append(col8, col9, col10, col11);
col8.append(four);
col9.append(five);
col10.append(six);
col11.append(minus);

box.append(row6);
row6.append(col12, col13, col14, col15);
col12.append(one);
col13.append(two);
col14.append(three);
col15.append(multi);

box.append(row7);
row7.append(col16, col17, col18, col19);
col16.append(clear);
col17.append(zero);
col18.append(equal);
col19.append(divide);


one.addEventListener("click",()=>ans.innerHTML += 1);
two.addEventListener("click",()=>ans.innerHTML += 2);
three.addEventListener("click",()=>ans.innerHTML += 3);
four.addEventListener("click",()=>ans.innerHTML += 4);
five.addEventListener("click",()=>ans.innerHTML += 5);
six.addEventListener("click",()=>ans.innerHTML += 6);
seven.addEventListener("click",()=>ans.innerHTML += 7);
eight.addEventListener("click",()=>ans.innerHTML += 8);
nine.addEventListener("click",()=>ans.innerHTML += 9);
zero.addEventListener("click",()=>ans.innerHTML += 0);
multi.addEventListener("click",()=>ans.innerHTML += "*");
divide.addEventListener("click",()=>ans.innerHTML += "/");
plus.addEventListener("click",()=>ans.innerHTML += "+");
minus.addEventListener("click",()=>ans.innerHTML += "-");
clear.addEventListener("click",()=>ans.innerHTML = " ");
equal.addEventListener("click",()=>input.value = eval(ans.innerHTML))
clear.addEventListener("click",()=>input.value = " ");

document.addEventListener("keyup",(num)=>{
    if(num.key === "1"){
        ans.innerHTML += 1; 
    }
    else if(num.key === "2"){
        ans.innerHTML += 2;
    }
    else if(num.key === "3"){
        ans.innerHTML += 3;
    }
    else if(num.key === "4"){
        ans.innerHTML += 4;
    }
    else if(num.key === "5"){
        ans.innerHTML += 5;
    }
    else if(num.key === "6"){
        ans.innerHTML += 6;
    }
    else if(num.key === "7"){
        ans.innerHTML += 7;
    }
    else if(num.key === "8"){
        ans.innerHTML += 8;
    }
    else if(num.key === "9"){
        ans.innerHTML += 9;
    }
    else if(num.key === "0"){
        ans.innerHTML += 0;
    }
    else{
        alert("Only Numbers are Allowed")
    }
})

