const showPopup = document.querySelector(".show-popup");
const exitPopup = document.querySelector(".exit");
const popup = document.querySelector(".popup");

/* ------------------------------- show pop up ------------------------------ */
showPopup.addEventListener("click", () => {
  popup.classList.add("display-pop");
});
exitPopup.addEventListener("click", () => {
  popup.classList.remove("display-pop");
});

/* ---------------------------- clear all content --------------------------- */

const clearAll = document.querySelector(".clear-all");

clearAll.addEventListener("click", () => {
  localStorage.clear()
  contentBox.innerHTML = "";
})

/* ------------------------- display and add content ------------------------ */

const inputEl = document.querySelector(".input");
const addTaskEl = document.querySelector(".add-task");
const contentBox = document.querySelector(".content-box");

const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();

const stored = JSON.parse(localStorage.getItem('myArray'));
const valueContainer = stored && stored.length > 0? stored : [];


addTaskEl.addEventListener("click", () => {
  const value = inputEl.value;

  const contentItem = ` 
<div class="content-item">
<div>
  <input class="checkbox" id="chess" type="checkbox" />
</div>
<div class="text"><p>${value}</p></div>
<div><p>${hours} : ${minutes}</p></div>
<select id="dropdown" class="drop">
  <option value="option1">active</option>
  <option value="option2">progress</option>
  <option value="option3">done</option>
</select>
<div class="progress-bar">
  <div class="progress"></div>
</div>
</div>
`;

  if(value === ''){
    popup.classList.remove("display-pop");
  }else{
    contentBox.innerHTML += contentItem;
    valueContainer.push(contentItem);
    console.log('valueContainer: ', valueContainer);
    localStorage.setItem('myArray', JSON.stringify(valueContainer));
    inputEl.value = ''
    popup.classList.remove("display-pop");
  }
});

const dropdown = document.getElementById('dropdown');
const prog = document.querySelector(".progress");
console.log('prog : ', prog );
// console.log('dropDown: ', dropdown);

// if(dropDown.textContent.includes('active')){
//   prog.style.width = "20%"
//   prog.style.backgroundColor = "#AA4A44";
// }else if(dropDown.textContent.includes('progress')){
//   prog.style.width = "50%"
//   prog.style.backgroundColor = "#FFA500";
// }else{
//   prog.style.width = "100%"
//   prog.style.backgroundColor = "#4caf50";
// }

/* ------------------------- getting stored contents ------------------------ */

window.addEventListener("DOMContentLoaded", () => {

  let storedArray = JSON.parse(localStorage.getItem('myArray'));
  if(storedArray) {
    displayArray(storedArray); 
  }
})

function displayArray(arry) {

  arry.forEach(item => {
      contentBox.innerHTML += item;
  });
}
/* ------------------------------- handle edit ------------------------------ */


// function toggleElement() {
//   console.log('checkBox: ', chess);
//   const editMenu = document.querySelector(".edit-menu");
//   console.log('editMenu: ', editMenu);

//   if(checkBox.checked) {
//     editMenu.style.display = "block";
//   } else {
//     editMenu.style.display = "none"; 
//   }
// }
// toggleElement()