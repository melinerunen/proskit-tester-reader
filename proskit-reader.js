/**
 * Created by david on 3/29/17.
 */
const SerialPort = require("serialport-win-fix");

let model = {
    "value": {"type": "string"}
};

let port = new SerialPort("/dev/cu.SLAB_USBtoUART", {
    baudRate: 2400,
    parser: SerialPort.parsers.byteLength(14)
});


port.on("open", function() {
    console.log("Port is open");
    console.log("Flushing data");
    port.flush();
});


port.on("data", function(data) {

    model.value = data.slice(0, 5).toString();

    console.log(model);
    //TODO: Analize the rest of the segments
    console.log(data.slice(6, 11));
    console.log(data.slice(12, 14));

});

port.on("close", function() {
    console.log("port is closed!!!");
});