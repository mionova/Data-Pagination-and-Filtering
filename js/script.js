/**********************************************
100DaysOfCode-Challenge: Day 45
Project 2 - Data Pagination and Filtering - WIP
**********************************************/

/*
Step 1: Display a page
`showPage` function to create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
  const startIndex = page * 9 - 9
  const endIndex = page * 9 - 1
  let ul = document.querySelector('.student-list');
  ul.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      //adding an li element
      let li = document.createElement('li');
      li.innerHTML =
        `
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        `
      ul.appendChild(li);
      li.className = "student-item cf";
    }
  }
}

/*
Step 2: Display pagination buttons
`addPagination` function to create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  //A variable to store the value of the number of pagination buttons needed if we want to display 9 students on a page
  const numPaginationButtons = Math.ceil(list.length / 9);
  let ul = document.querySelector('.link-list');
  //remove any pagination buttons that might have previously been displayed
  ul.innerHTML = '';

  for (let i = 0; i < numPaginationButtons; i++) {

    //adding an li element
    let li = document.createElement('li');
    li.innerHTML =
      `<button type="button">${i+1}</button>`
    ul.appendChild(li);

    // if (i = 0) {
    //   li.className = "active";
    // }
  }
}

// Call functions

showPage(data, 1);
addPagination(data);