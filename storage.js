document.getElementById('btn-add-name').addEventListener('click',()=>{
    const nameField = document.getElementById('name-field');
    const nameValue =JSON.stringify(nameField.value) ;
    localStorage.setItem('name',nameValue);
    nameField.value= '';
})
document.getElementById('btn-add-age').addEventListener('click',()=>{
    const ageField = document.getElementById('age-field');
    const age =JSON.stringify(ageField.value);
    localStorage.setItem('age',age);
    ageField.value = '';
})
document.getElementById('btn-remove-name').addEventListener('click',()=>{
    localStorage.removeItem('name');
})
document.getElementById('clear-btn').addEventListener('click',()=>{
    localStorage.clear();
})