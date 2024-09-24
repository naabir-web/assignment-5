
document.getElementById('show-donation')
.addEventListener('click', function(){
    showSectionById('donation-form');

})

document.getElementById('show-history')
.addEventListener('click', function(){
    showSectionById('donation-history');

})

document.getElementById('show-donation')
.addEventListener('click', function () {

    showSectionById('donation-form');
    setActiveButton('show-donation');
});

document.getElementById('show-history')
.addEventListener('click', function () {
    
    showSectionById('donation-history');
    setActiveButton('show-history');
});