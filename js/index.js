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

// History-btn
document.getElementById('History-btn').addEventListener('click',function(){
 addTheClassListOrHide('History-btn').classList.add('bg-lime-400')
 addTheClassListOrHide('donation-btn').classList.remove('bg-lime-400')

})

// donation-btn
document.getElementById('donation-btn').addEventListener('click',function(){
   addTheClassListOrHide('donation-btn').classList.add('bg-lime-400')
   addTheClassListOrHide('History-btn').classList.remove('bg-lime-400')
})


// history
document.getElementById('History-btn').addEventListener('click',function(){
  
})

// domain
// document.getElementById('donation-btn').addEventListener('click',function(){
//    showSectionById('donate-section')
// })

// blog click
document.getElementById('blog-site').addEventListener('click',function(){
   window.location.href='./blog.html'
})



