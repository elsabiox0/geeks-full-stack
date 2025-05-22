// First, get the div with id "container" and log it in the console
const container = document.getElementById('container');
console.log(container);

// Then, find all the <ul> elements that have the class "list"
const lists = document.querySelectorAll('ul.list');

// Loop through all the list items and if the item says "Pete", change it to "Richard"
lists.forEach(list => {
  list.querySelectorAll('li').forEach(item => {
    if (item.textContent === 'Pete') {
      item.textContent = 'Richard';
    }
  });
});

// Next, remove the second <li> from the second list (the one that has Sarah and Dan)
if (lists.length > 1) {
  const secondList = lists[1];
  const secondItem = secondList.querySelectorAll('li')[1];
  if (secondItem) {
    secondList.removeChild(secondItem);
  }
}

// Now, change the first <li> of every list to your own name
const myName = 'YourName';  // Change this to your actual name
lists.forEach(list => {
  const firstItem = list.querySelector('li');
  if (firstItem) {
    firstItem.textContent = myName;
  }
});

// Add a class called "student_list" to both <ul> elements
lists.forEach(list => {
  list.classList.add('student_list');
});

// Add two more classes "university" and "attendance" to the first <ul> only
if (lists.length > 0) {
  lists[0].classList.add('university', 'attendance');
}

// Give the div with id "container" a light blue background and some padding
container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

// Hide the <li> that contains "Dan"
lists.forEach(list => {
  list.querySelectorAll('li').forEach(item => {
    if (item.textContent === 'Dan') {
      item.style.display = 'none';
    }
  });
});

// Put a border around the <li> that says "Richard"
lists.forEach(list => {
  list.querySelectorAll('li').forEach(item => {
    if (item.textContent === 'Richard') {
      item.style.border = '2px solid black';
    }
  });
});

// Change the font size for the entire page
document.body.style.fontSize = '18px';

// Finally, if the div's background color is light blue, show an alert greeting the first two users
if (container.style.backgroundColor === 'lightblue') {
  let users = [];
  lists.forEach(list => {
    list.querySelectorAll('li').forEach(item => {
      if (item.style.display !== 'none') {
        users.push(item.textContent);
      }
    });
  });

  let user1 = users[0] || '';
  let user2 = users[1] || '';
  alert(`Hello ${user1} and ${user2}`);
}
