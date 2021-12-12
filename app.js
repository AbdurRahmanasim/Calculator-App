function getNumber(num){
    var result = document.getElementById("result");
     result.value += num ;
}
function Clear(){
    var result = document.getElementById("result");
     result.value = "" ;
}


function Del(){
    var result = document.getElementById("result");
     result.value = result.value.slice(0,-1)   ;
}
function result(){
    var result = document.getElementById("result");
     result.value = eval(result.value);
}
