function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value
    const inputNumber=parseFloat(inputValue)
    // console.log(inputNumber)
    return inputNumber;
    
    }
    function getTheElementId(id){
        const elementId=document.getElementById(id).innerText
        const result=parseFloat(elementId)
        return result;
    }
    function addTheClassListOrHide(id){
        const classList=document.getElementById(id)
        return classList
    }