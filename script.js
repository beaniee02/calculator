function showNumber(num){
    if(document.getElementById('display').innerText == 0){
        document.getElementById('display').innerText = num;
    }
    else if(document.getElementById('display').innerText.length < 13){
        document.getElementById('display').innerText += num;
    }
    // if(document.getElementById('display').innerText == 0){
    //     document.getElementById('clear').innerText = 0;
    // }
}
function calculate(){
    let userCalculation = document.getElementById('display').innerText;
    
    let result = eval(userCalculation);
    document.getElementById('display').innerText = result;
}
function clr(){
    document.getElementById('display').innerText = '0';
}
function del(){
    const inp = document.getElementById('display');
    if(inp.innerText.length > 1){
        inp.innerText = inp.innerText.slice(0,-1);
    } else{
        inp.innerText = '0';
    }
}
// const maxDigits = 10;
// const display = document.getElementById('display');
// function showNumber(num) {
//     if(display.innerText.length < maxDigits) {
//         if(document.getElementById('display').innerText == 0){
//             document.getElementById('display').innerText = num;
//         }
//         else{
//             document.getElementById('display').innerText += num;
//         }
//     }else{
//         // console.log('Maximum digit limit reached!');
//         display.innerText += num;
//     }
// }