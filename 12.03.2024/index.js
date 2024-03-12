const form = document.querySelector("form");
const tBody=document.querySelector("tbody");
renderUsers(getUsers())

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    const user=Object.fromEntries(formData);

    user.id=idGenerator();

    saveUser(user);

    renderUsers(getUsers());

    form.reset()
})

function idGenerator(){
    return Math.random().toFixed(4).slice(2)
}

function renderUsers(arr){
    arr.forEach(user => {
        tBody.innerHTML=+`
        <tr>
        <td>${user.id}</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.address}</td>
        <td>${user.phone}</td>
        <td class="icons">
        <img id="edit" src="./download (1).png" alt="">
        <img id=${user.id} src="./download.png" alt="">
        </td>
    </tr>`

    document.getElementById(`${user.id}`).addEventListener('click', ()=>{
        deleteUser(user.id)
        renderUsers(getUsers())
    })
    });
}


function saveUser(user){
    const users=getUsers;

    let index=users.findIndex(el => el.id===user.id);

    index>=0?users[index]=user:users.push(user)

    localStorage.setItem('users',JSON.stringify(users))
}


function deleteUser(id){
    const users=getUsers;

    let index=users.findIndex(el => el.id===id);

    if(index===-1) return;
    
    users.splice(index,1);

    localStorage.setItem('users',JSON.stringify(users))
}

function getUsers(){
    return JSON.parse(localStorage.getItem('users'))??[];
}
