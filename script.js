const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

console.log(checkboxes);

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

let lastChecked;

function handleCheck(e) {
  //check if they had shift key down
  //and if they are checking it
  let inBetween = false;
  lastChecked = this;
  if (e.shiftKey && this.checked) {
    //do what we please
    //loop over checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
}
