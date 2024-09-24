
const donateBtn = document.getElementById('donateBtn');
const modal = document.getElementById('modal');
const Continue = document.getElementById('continue');
const content = document.getElementById('content');




// donateBtn.addEventListener('click', function(e) {

//     e.preventDefault();

//     const donationInput = document.querySelector('input').value.trim();
    
//     if (donationInput === '' || isNaN(donationInput) || parseFloat(donationInput) <= 0) {
//         alert('Please enter a valid donation amount.');
//     } else {
        
//         modal.classList.remove('hidden');
//         modal.classList.add('flex');
//         content.classList.add('blurred');
//     }
// });

donateBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const donationInput = getInputFieldValueById('input-money');

    
    if (donationInput === '' || isNaN(donationInput) || parseFloat(donationInput) <= 0) {
        alert('Please enter a valid donation amount.');
    }else{
        
        const balance = getTextFieldValueById('account-balance');
        
        const newBalance = balance - donationInput;
        
        if(newBalance < 0){
           return alert('You do not have any sufficient money.');
        }else{
            document.getElementById('account-balance').innerText = newBalance;

            const donate = getTextFieldValueById('donate-money');
            const donateBalance = donate + donationInput;
            document.getElementById('donate-money').innerText = donateBalance;


            const modal = document.getElementById('modal');
            const content = document.getElementById('content');
            modal.classList.remove('hidden');
            modal.classList.add('flex'); 
            content.classList.add('blurred'); 

            const donationHistory = document.getElementById('donation-section');
            const newDonation = document.createElement('div');

            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' });
            
            newDonation.innerHTML = `
                <div class="history-card">
                    <p><strong>${donateBalance} Taka</strong> is Donated for </p>
                    <p>Date: ${formattedDate} (Bangladesh Standard Time)</p>
                </div>
            `
            donationHistory.appendChild(newDonation); 

            //  reset the donation input field
            document.getElementById('input-money').value = '';
        }

        

    }
    
});



//  Add functionality to close the modal on clicking the "Continue" button
document.getElementById('continue').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    const content = document.getElementById('content');

    modal.classList.remove('flex');
    modal.classList.add('hidden');
    content.classList.remove('blurred');
});

// Continue.addEventListener("click", function(){
//     location.reload();
// })


