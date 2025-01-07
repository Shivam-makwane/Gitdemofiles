let ss = document.getElementsByClassName('fruit');
console.log(ss[2].textContent);
ss[2].style.backgroundColor = "yellow";
for (let i = 0; i < ss.length; i++){
    ss[i].style.fontWeight = 'bold';
}