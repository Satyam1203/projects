//class
//events
//document.body.style.backgroundColor = "red";

function add(title,author,id){
        var tr = document.createElement('tr');
        tr.innerHTML = `<td>${title}</td>
                        <td>${author}</td>
                        <td>${id}</td>
                        <td><a href="#" class="alert alert-warning del">X</a></td>`;
        var tbody = document.querySelector('tbody');
        tbody.appendChild(tr);

}

function bookKeep(){
    var title = document.querySelector('input[name=title]');
    var author = document.querySelector('input[name=author]');
    var id = document.querySelector('input[name=id]');
    add(title.value,author.value,id.value);
    title.value = "";
    author.value = "";
    id.value = "";
}
document.querySelector('input[type=button]').addEventListener('click',bookKeep);

function remove1(e){
    if(e.classList.contains('del'))
    {
        e.parentElement.parentElement.remove();
    }
}

document.querySelector('tbody').addEventListener("click",(el)=>{
    remove1(el.target);
    // document.querySelector('#new').innerHTML = el.target;

});