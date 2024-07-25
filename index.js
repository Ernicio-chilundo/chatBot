// suports ES6
//import {create,whatsapp} from "sulla"

const sulla = require("sulla")

sulla.create().then((client) => start(client))

function start(client) {
    client.onMassage(message)=> {
        if (message.body === "Hi") {
            client.sendText(message.from, "😁 hello from sulla")
        }
    }
}