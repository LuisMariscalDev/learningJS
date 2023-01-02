// Async / Await

function descargarNuevosClientes(){
    return new Promise (resolve => {
        console.log("Descargando clientes, aguarde un momento...");

        setTimeout(() => {
            resolve("Los clientes han sido descargados");
        }, 5000);
    })
}

function descargarUltimosPedidos(){
    return new Promise (resolve => {
        console.log("Descargando pedidos, aguarde un momento...");

        setTimeout(() => {
            resolve("Los pedidos han sido descargados");
        }, 5000);
    })
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    }catch {
        console.log(error);
    }


}

app();

