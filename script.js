//your JS code here. If required.
// const div = document.querySelector(".toggle-container")
// const input1 = document.querySelector("#good")
// const input2 = document.querySelector("#cheap")
// const input3 = document.querySelector("#fast")

// div.addEventListener("click",()=>{ 
// 	input1.disabled = false
// 	input2.disabled = false
// 	input3.disabled = false
// 	if(input1.checked && input2.checked){ 
// 		input3.disabled = true
// 	}
// 	if(input1.checked && input3.checked){
// 		input2.disabled = true
// 	}
// 	if(input2.checked && input3.checked){
// 		input1.disabled = true
// 	}
// })

// const div = document.querySelector(".toggle-container")
// const input1 = document.querySelector("#good")
// const input2 = document.querySelector("#cheap")
// const input3 = document.querySelector("#fast")

// div.addEventListener("click",(e)=>{
// 	if(input1.checked && input2.checked && !input3.disabled){ 
// 		input3.checked = false;
// 	}
// 	else if(input1.checked && input3.checked && !input2.disabled){
// 		input2.checked = false;
// 	}
// 	else if(input2.checked && input3.checked && !input1.disabled){
// 		input1.checked = false;
// 	}
// })

const div = document.querySelector(".toggle-container")
const input1 = document.querySelector("#good")
const input2 = document.querySelector("#cheap")
const input3 = document.querySelector("#fast")

let checkedBoxes = [];

div.addEventListener("click", (e) => {
  const target = e.target;
  if (target.type === "checkbox") {
    if (target.checked) {
      checkedBoxes.push(target);
      if (checkedBoxes.length > 2) {
        checkedBoxes[0].checked = false;
        checkedBoxes.shift();
      }
    } else {
      checkedBoxes = checkedBoxes.filter(box => box !== target);
    }
  }
});