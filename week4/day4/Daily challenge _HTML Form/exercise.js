const form = document.getElementById('userForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  const data = {
    firstName: firstName,
    lastName: lastName
  };

  output.textContent = JSON.stringify(data, null, 2);
});
