let li = document.querySelectorAll('li');
let input = document.querySelector('.output');
let clear = document.querySelector('.clear')
let equal = document.querySelector('button')


li.forEach((ele)=>{
    ele.addEventListener("click",function(e){{
        if(e.target.dataset.id == "C"){
            input.value = "";
        }else{
            input.value += e.target.dataset.id;
        }
    }})
});
equal.addEventListener('click',function (e) {
    e.preventDefault();
    input.value = eval(input.value);
    });