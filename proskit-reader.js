/**
 * Created by david on 3/29/17.
 */
const SerialPort = require("serialport");


let data_model = {
    "$schema": "http://json-schema.org/draft-04/schema#",

    "rawValue": {"type": "integer"},
    "value": {"type": "number"},
    "units": {"type": "string"},

    "precision": {"type": "integer"},

    "autoRange": {"type": "boolean"},
    "measureType": {"type": "string"},
    //TODO: Add the rest of the model to d
};

let port = new SerialPort("/dev/cu.SLAB_USBtoUART", {
    baudRate: 2400,
    dataBits: 8,
    stopBits: 1,
    // bufferSize: 14,
    // parser: SerialPort.parsers.raw,
    parser: SerialPort.parsers.byteLength(14),
});


port.on("open", function() {
    console.log("Port is open");
    console.log("Flushing data");
    port.flush();
});


port.on("data", function(data) {

    data_model.rawValue = data.slice(0, 5).toString('ascii');

    console.log(data_model);
    //TODO: Analize the rest of the segments

    console.log(data.toString('ascii'));
});

port.on("close", function() {
    console.log("port is closed!!!");
});