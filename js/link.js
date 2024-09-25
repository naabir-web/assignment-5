
document.addEventListener('DOMContentLoaded', function(){

    const navBtn = document.getElementById('navBtn');

    if(window.location.pathname === '/' || window.location.pathname.includes('index')){
        navBtn.innerText = 'Blog';
    }else if(window.location.pathname.includes('blog')){
        navBtn.innerText = 'Home';
    }
    
    navBtn.addEventListener('click', function(){
        if(navBtn.innerText === 'Blog'){
            window.location.href = 'blog.html';
        }else if(navBtn.innerText === 'Home'){
            window.location.href ='index.html';
        }
    })
})


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    
    if (window.scrollY > 50) {  
        navbar.classList.add('backdrop-blur-md', 'bg-opacity-90');  
    } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-opacity-90'); 
    }
});

