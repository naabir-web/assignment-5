
const donateBtn = document.getElementById('donateBtn');
const modal = document.getElementById('modal');
const Continue = document.getElementById('continue');



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


             //  reset the donation input field
             document.getElementById('input-money').value = '';

            // modal appear
            modal.classList.remove('hidden');
            modal.classList.add('flex'); 
            content.classList.add('blurred'); 

            const donationHistory = document.getElementById('donation-section');
            const newDonation = document.createElement('div');
            newDonation.classList.add('bg-white', 'rounded-xl', 'p-6', 'shadow', 'my-4','border'); 

            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' });

            const donationCause = "Flood at Noakhali, Bangladesh";

            newDonation.innerHTML = `
                <div class="history-card">
                    <p class="text-xl text-black font-bold pb-2">${donationInput} BDT donated successfully ${donationCause}</p>
                    <p class="text-base text-gray-600 font-normal">Date: ${formattedDate} (Bangladesh Standard Time)</p>
                </div>
            `;
            donationHistory.appendChild(newDonation);

           
        }

        

    }
    
});



// close the modal on clicking the continue button
 Continue.addEventListener('click', function() {
    const modal = document.getElementById('modal');
    const content = document.getElementById('content');

    modal.classList.remove('flex');
    modal.classList.add('hidden');
    content.classList.remove('blurred');
});




