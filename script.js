//your JS code here. If required.
const div = document.querySelector(".toggle-container")
const input1 = document.querySelector("#good")
const input2 = document.querySelector("#cheap")
const input3 = document.querySelector("#fast")

div.addEventListener("click",(e)=>{
	input1.disabled = true
	input2.disabled = true
	input3.disabled = true
	if(input1.checked && input2.checked){
		input3.disabled = false
	}
	if(input1.checked && input3.checked){
		input2.disabled = false
	}
	if(input2.checked && input3.checked){
		input1.disabled = false
	}
})