
const userName = document.querySelector('#user_name')
const userEdad = document.querySelector('#user_edad')
const userApellido = document.querySelector('#user_apellido')
const userEmail = document.querySelector('#user_email')
const userTel = document.querySelector('#user_tel')
const userPassword = document.querySelector('#user_password')
const user = document.querySelector('#user_password')
const userDeclaration = document.querySelector('#user_declaracion')


document.querySelector('button').addEventListener('click', (event)=>{
    event.preventDefault()
userName.value = userName.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
userApellido.value = userApellido.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
userEdad.value = userEdad.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
userEmail.value = userEmail.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
userTel.value =  userTel.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
userPassword.value = userPassword.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");
user.value = userPassword.value.replace(/[<>{}()'"&%\-=:#?|]/gi,"");

if (userName.value === '' || userApellido.value === '' || userEdad.value === '' ||
    userEmail.value === '' || userTel.value === '' || userPassword.value === '' || 
    !userDeclaration.checked) {
        alert('Porfavor, complete todos los campos requeridos.')
    return;
}
alert('Cuenta creada con exito!')
    console.log (userName.value),console.log (userApellido.value),console.log (userEdad.value),
    console.log (userEmail.value), console.log (userTel.value), console.log (userPassword.value)
})
