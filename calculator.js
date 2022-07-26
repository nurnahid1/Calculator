
function clearAll(){
    document.getElementById('screen').value = '';
   
    
}



function calculate(newValue){
    document.getElementById('screen').value += newValue;
}

function answer(){
    console.log('click')
    let a = document.getElementById('screen').value;
    let b = eval(a);
    document.getElementById('screen').value = b;

}