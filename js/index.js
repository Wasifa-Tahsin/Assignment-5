// Noakhali donation 
document.getElementById('btn-flood-Noakhali').addEventListener('click',function(){
   const balance= getInputFieldValueById('input-flood-Noakhali')
  
   const accountBalance=getTheElementId('mainBalance')
   const newBalance=accountBalance-balance;
   document.getElementById('mainBalance').innerText=newBalance
document.getElementById('Noakhali-donation').innerText=balance

})

// Feni Donation
document.getElementById('feni-donation-btn').addEventListener('click',function(){
   const inputFeniDonation=getInputFieldValueById('input-feni-donation')
   const accountBalance=getTheElementId('mainBalance')
   const newBalance=accountBalance-inputFeniDonation;
   document.getElementById('mainBalance').innerText=newBalance
   document.getElementById('feni-donation').innerText=inputFeniDonation

})

// Quota Movement
document.getElementById('quota-movement-btn').addEventListener('click',function(){
   const inputQuotaMovement=getInputFieldValueById('input-quota-movement')
   const accountBalance=getTheElementId('mainBalance')
   const newBalance=accountBalance-inputQuotaMovement;
   document.getElementById('mainBalance').innerText=newBalance
   document.getElementById('quota-movement').innerText=inputQuotaMovement

})