
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionById(id){
    // hide all the section
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');


    //  show the section with provide id with parameter
    document.getElementById(id).classList.remove('hidden');

    document.getElementById('show-history').classList.add("bg-lime-300");
    document.getElementById('show-donation').classList.add("bg-lime-300");

    document.getElementById(id).classList.remove("bg-lime-300")
}