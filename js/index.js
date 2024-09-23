// the Noakhali donation btn
document.getElementById('btn-flood-Noakhali').addEventListener('click',function(){
   const balance= getInputFieldValueById('input-flood-Noakhali')
  
   const accountBalance=getTheElementId('mainBalance')
   const newBalance=accountBalance-balance;
   document.getElementById('mainBalance').innerText=newBalance
document.getElementById('Noakhali-donation').innerText=balance

})

