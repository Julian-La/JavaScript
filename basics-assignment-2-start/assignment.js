const task3Element = document.getElementById('task-3');
task3Element.addEventListener('click', greetingByClick);

function greetingByClick(){
    alert('Hello, does it work?');
}

function warningAlert(name){
    alert(name);
}

function addStrings(string1,string2,string3){
    let finalString = string1 + string2 + string3;
    return finalString;
}

warningAlert('signalError');
alert(addStrings('How ','are ','you'));
