// Noakhali donation 
// document.getElementById('btn-flood-Noakhali').addEventListener('click',function(){
//    const balance= getInputFieldValueById('input-flood-Noakhali')
  
//    const accountBalance=getTheElementId('mainBalance')
//    const newBalance=accountBalance-balance;
//    document.getElementById('mainBalance').innerText=newBalance
// document.getElementById('Noakhali-donation').innerText=balance

// })

document.getElementById('btn-flood-Noakhali').addEventListener('click',function(){
   const balance= getInputFieldValueById('input-flood-Noakhali')
  
   const accountBalance=getTheElementId('mainBalance')
   if(accountBalance<balance || isNaN(balance) ||balance<0 ){
      alert('Invalid Donation Amount')
   }
   else{
      const newBalance=accountBalance-balance;
      document.getElementById('mainBalance').innerText=newBalance
   document.getElementById('Noakhali-donation').innerText=balance

   // add to history
   const div=document.createElement('div')
   div.innerHTML=`
   <p class="text-xl py-3 ">${balance}Taka is Donated for Flood Relief in Noakhali,Bangladesh</p>
        <p class="text-md">${new Date().toLocaleDateString()}</p>
   `
   const historyContainer=document.getElementById('history-container')
   historyContainer.appendChild(div)
   }
})



// Feni Donation
document.getElementById('feni-donation-btn').addEventListener('click',function(){
   const inputFeniDonation=getInputFieldValueById('input-feni-donation')
   const accountBalance=getTheElementId('mainBalance')
   if(accountBalance<inputFeniDonation || isNaN(inputFeniDonation) ||inputFeniDonation<0 ){
      alert('Invalid Donation Amount')
   }
   else{
      const newBalance=accountBalance-inputFeniDonation;
   document.getElementById('mainBalance').innerText=newBalance
   document.getElementById('feni-donation').innerText=inputFeniDonation

    // add to history
    const div=document.createElement('div')
    div.innerHTML=`
    <p class="text-xl py-3 mt-5">${inputFeniDonation}Taka is Donated for Flood Relief in Feni,Bangladesh</p>
         <p class="text md ">${new Date().toLocaleDateString()}</p>
    `
    const historyContainer=document.getElementById('history-container')
    historyContainer.appendChild(div)
   }

})

// Quota Movement
document.getElementById('quota-movement-btn').addEventListener('click',function(){
   const inputQuotaMovement=getInputFieldValueById('input-quota-movement')
   const accountBalance=getTheElementId('mainBalance')
   if(accountBalance<inputQuotaMovement || isNaN(inputQuotaMovement) ||inputQuotaMovement<0 ){
      alert('Invalid Donation Amount')
   }
   else{
      const newBalance=accountBalance-inputQuotaMovement;
   document.getElementById('mainBalance').innerText=newBalance
   document.getElementById('quota-movement').innerText=inputQuotaMovement

   // add to history
   const div=document.createElement('div')
   div.innerHTML=`
   <p class="text-xl py-3 mt-5">${inputQuotaMovement}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class="text md ">${new Date().toLocaleDateString()}</p>
   `
   const historyContainer=document.getElementById('history-container')
   historyContainer.appendChild(div)
   }
   

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


// blog click
document.getElementById('blog-site').addEventListener('click',function(){
   window.location.href='./blog.html'
})


// history
document.getElementById('History-btn').addEventListener('click',function(){
  showSectionById('history-section')
})

// domain
document.getElementById('donation-btn').addEventListener('click',function(){
   showSectionById('donate-section')
})



