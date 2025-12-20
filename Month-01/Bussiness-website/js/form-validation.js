const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if(!name || !email || !message){
    alert("All fields are required!");
    return;
  }
  if(!validateEmail(email)){
    alert("Invalid email!");
    return;
  }
  alert("Message sent successfully!");
  form.reset();
});

function validateEmail(email){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
