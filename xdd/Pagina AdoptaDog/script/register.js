const readFormData= ()=>{
    const email = document.getElementById("email").value
    const contraseña = document.getElementById("contraseña").value
    if (email== "" || contraseña == ""){
        alert("Unos de los campos estan vacios")
    }else if (email== "admin" || contraseña == "admin"){
        alert("Admin registrado exitosamente")
    }else{
        alert("Usuario registrado exitosamente")
    }
    console.log(email,contraseña)
}

const button = ()=>{
    document.getElementById("btnRegister").addEventListener("click",()=>{
        readFormData() 
    })
}