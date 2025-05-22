// 1. Change the ID from 'navBar' to 'socialNetworkNavigation'
const navBarDiv = document.getElementById('navBar');
navBarDiv.setAttribute('id', 'socialNetworkNavigation');

// 2. Create a new <li> element
const newListItem = document.createElement('li');

// 3. Create a text node with "Logout"
const logoutText = document.createTextNode('Logout');

// 4. Add the text to the <li>
newListItem.appendChild(logoutText);

// 5. Find the <ul> inside the nav and add the new <li> to it
const ul = document.querySelector('#socialNetworkNavigation ul');
ul.appendChild(newListItem);

// 6. Use firstElementChild and lastElementChild to get first and last <li>
const firstItem = ul.firstElementChild;
const lastItem = ul.lastElementChild;

// 7. Show their text
console.log('First link text:', firstItem.textContent);
console.log('Last link text:', lastItem.textContent);
