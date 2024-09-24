function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value
    const inputNumber=parseFloat(inputValue).toFixed(2)
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

    // hidden
    function showSectionById(id){
        // hide all the section
        document.getElementById('donate-section').classList.add('hidden')
        document.getElementById('history-section').classList.add('hidden')
        // remove hidden
        document.getElementById(id).classList.remove('hidden')
    }

 // home click
 document.getElementById('Home-site').addEventListener('click',function(){
    window.location.href='./index.html'
 })