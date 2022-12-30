const metodoPago = "BTC";

switch (metodoPago){
    case "Tarjeta":
        console.log("Pagaste con tarjeta");
        break;
    case "BTC":
        console.log("Pagaste con cripto");
        break;
    case "Efectivo":
        console.log("Pagaste con efectivo");
        break;
    default:
        console.log("Paga prro");
        break;
}