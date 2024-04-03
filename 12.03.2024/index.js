const form = document.querySelector("form");
const tBody=document.querySelector("tbody");
let userId=null;
renderUsers(getUsers());

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    const user=Object.fromEntries(formData);
    user.id=userId ?? idGenerator();
    saveUser(user);
    renderUsers(getUsers());
    reset();
})

function reset(){
    form.reset(); 
    UserId=null; 
  }

function idGenerator(){
    return Math.random().toFixed(4).slice(2);
}

function saveUser(user){
    const users=getUsers();
    let index=users.findIndex(el => el.id === user.id);
    index>=0?users[index]=user:users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
}

function deleteUser(id){
    const users=getUsers();
    let index=users.findIndex(el => el.id === id);
    if(index===-1) return;
    users.splice(index,1);
    localStorage.setItem('users',JSON.stringify(users));
    renderUsers(getUsers());
}

function editUser(id){
    const users=getUsers();
    let index=users.findIndex(el => el.id === id);
    if(index===-1) return;
    userId=user[index].id;
    const user=users[index];
    Array.from(form.children).forEach((el)=>{
        let inputName=el.name;
        if(Object.keys(user).includes(inputName)){
            el.value=user[inputName]
        }
    })
}

function getUsers(){
    return JSON.parse(localStorage.getItem('users'))??[];
}

function setDeleteListener(){
    const deleteBtn=Array.from(document.querySelectorAll('.delete'));
    deleteBtn.forEach(el =>{
        el.addEventListener('click', (e) =>{
            const userId=e.target.attributes.userId.value;
            deleteUser(userId)
        })
    })
}

function setEditListener(){
    const editBtn=Array.from(document.querySelectorAll('.edit'));
    editBtn.forEach(el =>{
        el.addEventListener('click', (e) =>{
            const userId=e.target.attributes.userId.value;
           editUser(userId)
        })
    })
}

function renderUsers(arr){
    tBody.innerHTML='';
    arr.forEach(user => {
        tBody.innerHTML+=
        `<tr>
        <td>${user.id}</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.address}</td>
        <td>${user.phonenumber}</td>
        <td class="icons">
        <img class="edit" src="./download (1).png" alt="">
        <img class="delete" userId=${user.id} src="./download.png" alt="">
        </td>
        </tr>`
        setDeleteListener();
        setEditListener();
    });
}

class nameValidator{
    isValid(value){
       
    }
 }
 
 function inputValidator(validator,value){
    return validator.isValid(value)
 }