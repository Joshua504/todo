const showPopup = document.querySelector(".show-popup");
const exitPopup = document.querySelector(".exit");
const popup = document.querySelector(".popup");

showPopup.addEventListener("click", () => {
  popup.classList.add("display-pop");
});
exitPopup.addEventListener("click", () => {
  popup.classList.remove("display-pop");
});

const inputEl = document.querySelector(".input");
const addTaskEl = document.querySelector(".add-task");
const contentBox = document.querySelector(".content-box");

const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();

const valueContainer = [];

addTaskEl.addEventListener("click", () => {
  const value = inputEl.value;
  valueContainer.push(value);

  const contentItem = ` 
<div class="content-item">
<div>
  <input class="checkbox" type="checkbox" />
</div>
<div class="text"><p>${value}</p></div>
<div><p>${hours} : ${minutes}</p></div>
<select id="dropdown">
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
    inputEl.value = ''
    popup.classList.remove("display-pop");
  }
});
