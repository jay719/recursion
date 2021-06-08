// Fibonacci Sequence

// function forLoopExample(n){
//     for (let i = 0;){}
// };

function reverse(str){
    if(str.length <= 1){
        return str;
    }
    else {
        console.log(str.charAt(str.length - 1))
        return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
    }
}

reverse("tst")