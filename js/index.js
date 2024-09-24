// Noakhali donation 
document.getElementById('btn-flood-Noakhali').addEventListener('click',function(){
   const balance= getInputFieldValueById('input-flood-Noakhali')
   const accountBalance=getTheElementId('mainBalance')
   // Reset the input field
//   document.getElementById('balance').value = '';
   if(accountBalance<balance ||  isNaN(balance)  ||balance<0 ){
      alert('Invalid Donation Amount')
   }
   else{
      my_modal_1.showModal()
      const newBalance=accountBalance-balance;
      const donation=getTheElementId('Noakhali-donation')
      const totalDonation=balance+donation
      document.getElementById('mainBalance').innerText=newBalance
   document.getElementById('Noakhali-donation').innerText=totalDonation
   
   // add to history
   const div=document.createElement('div')
   div.className="border-2 bg-white h-24 p-2"
   div.innerHTML=`
   <p class="md:text-xl md:py-3 ">${balance}Taka is Donated for Flood Relief in Noakhali,Bangladesh</p>

        <p class="text-md">Date:${new Date().toLocaleDateString()} <span>Time:${new Date().toLocaleTimeString()}</span></p>

   `
   const historyContainer=document.getElementById('history-container')
   historyContainer.appendChild(div)
   }
})




// document.getElementById('btn-flood-Noakhali').addEventListener('click',function(){
//    const currentBalance=getElementsId("mainBalance")
//    const inputValue=getInputField('input-flood-Noakhali')
//    if(currentBalance<inputValue){
//       alert('Insufficcent Balance')
//    }
//    else if(isNaN(inputValue)|| inputValue==0){
//       alert('Invalid Input')
//       return
//    }
//    const newBalance=currentBalance-inputValue;
//    const donation=getElementsId('Noakhali-donation')
//    const totalDonation=donation+inputValue;
//    document.getElementById('Noakhali-donation').innerText=totalDonation
//    document.getElementById('mainBalance').innerText=newBalance
   
// })

// Feni Donation
document.getElementById('feni-donation-btn').addEventListener('click',function(){
   const inputFeniDonation=getInputFieldValueById('input-feni-donation')
   const accountBalance=getTheElementId('mainBalance')
   if(accountBalance<inputFeniDonation ||inputFeniDonation<0 ){
      alert('Invalid Donation Amount')
   }
   else if( isNaN(inputFeniDonation) ){
      alert('invalid')
   }
   else{
     
      const newBalance=accountBalance-inputFeniDonation;
      const donation=getTheElementId('feni-donation')
      const totalDonation=inputFeniDonation+donation;
   document.getElementById('mainBalance').innerText=newBalance
   document.getElementById('feni-donation').innerText=totalDonation

    // add to history
    const div=document.createElement('div')
    div.className="border-2 bg-white h-24 p-2"
    div.innerHTML=`
    <p class="md:text-xl md:py-3 ">${inputFeniDonation}Taka is Donated for Flood Relief in Feni,Bangladesh</p>
         <p class="text md ">Date:${new Date().toLocaleDateString()}  <span>Time:${new Date().toLocaleTimeString()}</span></p>
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
      my_modal_1.showModal()
      const newBalance=accountBalance-inputQuotaMovement;
      const quota=getTheElementId('quota-movement')
      const totalDonation=quota+inputQuotaMovement
   document.getElementById('mainBalance').innerText=newBalance
   document.getElementById('quota-movement').innerText=totalDonation
   // alert('donation done')



   // add to history
   const div=document.createElement('div')
   div.className="border-2 bg-white h-24 p-2"
   div.innerHTML=`
   <p class="md:text-xl md:py-3 ">${inputQuotaMovement}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class="text md ">Date:${new Date().toLocaleDateString()}  <span>Time:${new Date().toLocaleTimeString()}</span></p>
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





 
   



