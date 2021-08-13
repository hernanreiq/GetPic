var inputGroupFile01 = document.getElementById('inputGroupFile01');
var text_inputGroupFile01 = document.getElementById('text-inputGroupFile01');

inputGroupFile01.addEventListener('change', ()=>{
    text_inputGroupFile01.innerText = "Selected image";
});