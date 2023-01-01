const usuarioAutenticado = new Promise( (resolve, reject) => {
        const auth = true;

        if( auth) {
            resolve("Usuario autenticado"); // El resolve nos da a entender que es promise se cumplió
        } else {
            reject("Por favor veirifique su correo"); // Reject nos dice que no se cumplió el promise
        }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))


// En los Promises existen 3 valores
// Pending: Que el promise está pendiente a cumplirse, como su nombre lo indica, no se ha cumplido pero tampoco lo ha rechazado
// Fulfilled: Se ha cumplido el Promise
// Rejected: El promise ha sido rechazado