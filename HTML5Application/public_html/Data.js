/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getData( name ) {
    return JSON.parse(localStorage.getItem(name));
}
function toTreeList(obj, name) {
    var li = document.createElement("li");
    if (typeof(name) !== "undefined") {
        var strong = document.createElement("strong");
        strong.appendChild(document.createTextNode(name + ": "));
        li.appendChild(strong);
    }
    if (typeof(obj) !== "object"){
        li.appendChild(document.createTextNode(obj));
    } else {
        var ul = document.createElement ("ul");
        for (var prop in obj){
            ul.appendChild(toTreeList(obj[prop],prop));
        }
        li.appendChild(ul);
    }
    return li;
}            

