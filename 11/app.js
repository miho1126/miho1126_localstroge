console.log(localStorage);
let data = [];
document.getElementById('form-button').addEventListener('click',function(){
  document.getElementById("form-text").innerHTML = "こんにちは" + document.getElementById('name').value + "さん！"
  data.push(document.getElementById('form-text').innerHTML.value);
  creatDOM(document.getElementById('form-text').innerHTML.value);
  localStorage.setItem('form-text',JSON.stringify(data))
});
data = JSON.parse(localStorage.getItem(''));
for(const value of data) {
  creatDOM(value);
}

function creatDOM( value ){
  let text = document.createElement('form-text').innerHTML;
  text.textContent = value;
  document.getElementById('text').appendChild(text);
}