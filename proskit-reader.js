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
    //TODO: Add the rest of the model.
    //TODO: enum values in units, precision, measuretype.
};

//TODO: Get port as param
let port = new SerialPort("/dev/cu.SLAB_USBtoUART", {
    baudRate: 2400,
    dataBits: 8,
    stopBits: 1,
    // bufferSize: 8,
    // parser: SerialPort.parsers.raw,
    parser: SerialPort.parsers.byteLength(14,'ascii'),
});


port.on("open", function() {
    console.log("Port is open");
    console.log("Flushing data");
    port.flush(); //sync data
});


port.on("data", function(data) {

    if (!port.isOpen()){return};

    let value = data.slice(0, 5).toString('ascii');


    console.log(data);
    // console.log(data_model);
    //TODO: Analize the rest of the segments

    console.log(data.toString('ascii'));

    //TODO: Return the JSON model with a event fired.
});


port.on("close", function() {
    console.log("Port is closed!!!");
});