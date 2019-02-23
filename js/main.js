//var first = document.getElementsByClassName('item')[0];
//
//var second = document.getElementsByClassName('item')[1];
//
//var third = document.getElementsByClassName('item')[2];
//
//var fourth = document.getElementsByClassName('item')[3];
//
//var fifth = document.getElementsByClassName('item')[4];
//



//first.innerHTML = "<h1>20</h1>";
//third.innerHTML = "<h1>30</h1>";
//fifth.innerHTML = "<h1>50</h1>";

//function firste() {
////    var input = document.getElementById('input');
////    console.log(input);
////    var input1 = first.innerHTML = '<input type="text" value="" id="input"/> <button onclick="hii()">click here</button> <p id = "ans" > </p>  ';
//    
//
//
//}


//var an = 10;
//var x;
//var y;
//
//function hii() {
//    x = document.getElementById('input').value;
//
//    y = document.getElementById('ans');
//
//    y.innerHTML = x;
//    console.log()
//
//    var e = y.innerHTML;
//    return e;
//}
//
//var z = hii(x, y).returnValue;
//console.log(z);
//
//function hii1() {
//    var a = document.getElementById('input1').value;
//    var b = document.getElementById('ans1');
//    b.innerHTML = a;
//}
//console.log(b);






//var input = document.getElementById('input').value;
//
//console.log(input);
//var input2 = input;
//var x = document.getElementById('ans')
//console.log(x);
//function hii() {
//    x.innerHTML = input2;
//    console.log(x);
//}

var item = document.getElementById('list');

function h1() {

    var a = document.getElementById('first').innerText;

    console.log(a);

    var b = document.getElementById('second').innerText;

    console.log(b);

    ans = +a + +b;

    document.getElementById('third').innerText = ans;

}
