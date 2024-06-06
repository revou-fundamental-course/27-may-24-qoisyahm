document.addEventListener('DOMContentLoaded', function() {
    //about
    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
   
    // Welcome message script
    const userNameSpan = document.getElementById('user-name');
    const userName = prompt("Please enter your name:");
    if (userName) {
        userNameSpan.textContent = userName;
    }

    // Message Us form script
    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const resultDiv = document.getElementById('form-result');
        resultDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`;
    });

    // Join Us form script
    const joinForm = document.getElementById('join-form');
    joinForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const joinName = document.getElementById('join-name').value;
        const joinEmail = document.getElementById('join-email').value;
        const joinGender = document.getElementById('join-gender').value;
        const joinRegion = document.getElementById('join-region').value;
        const joinReason = document.getElementById('join-reason').value;

        const joinResultDiv = document.getElementById('join-result');
        joinResultDiv.innerHTML = `<p>Name: ${joinName}</p>
                                   <p>Email: ${joinEmail}</p>
                                   <p>Gender: ${joinGender}</p>
                                   <p>Region: ${joinRegion}</p>
                                   <p>Reason for Joining: ${joinReason}</p>`;
    });
});
