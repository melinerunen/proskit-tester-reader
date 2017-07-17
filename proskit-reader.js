/**
 * Created by david on 3/29/17.
 */
const SerialPort = require("serialport"),
      JSONb      = require("json-buffer");
const argv = require("commander")
    .version("1.0.0")
    .usage("[options]")
    .option("-p, --port <port>", "Serial port name")
    .parse(process.argv);

if (typeof argv.port === "undefined" ){
    console.error("Port is empty");
    process.exit(1);
}

let data_model = {
    "value": {"type": "integer"},
    "units": {"type": "string"},
    "precision": {"type": "integer"},
    "autoRange": {"type": "boolean"},
    "measureType": {"type": "string"},

    //TODO: Add the rest of the model.
    //TODO: enum values in units, precision, measuretype.
};
let port;
let portConfig;
const DefaultPortConfig = {
    baudRate: 2400,
    dataBits: 8,
    stopBits: 1,
    parser: SerialPort.parsers.byteLength(14),
}

prototype.init = function(config, port) {


    port = new SerialPort(config, port);

    portConfig = config;
    port = port;
}
//TODO: Get port as param
// let port = new SerialPort("/dev/cu.SLAB_USBtoUART", portConfig);

port.on("error", function(e) {
    console.error(e);
});

port.on("open", function() {
    console.log("Port is open");
    console.log("Flushing data");
    port.flush(); //sync data
});


port.on("data", function(data) {

    if (!port.isOpen()) return;


    // let value = data.slice(0, 5).toString('ascii');


    // console.log(data.t);
    // console.log(data_model);
    //TODO: Analize the rest of the segments
    //
    // console.log('ascii',data.slice(6,14).toString('ascii'));
    // console.log('utf8',data.slice(6,14).toString('utf8'));
    // console.log('utf16le',data.slice(6,14).toString('utf16le'));
    // console.log('ucs2',data.slice(6,14).toString('ucs2'));
    // console.log('base64',data.slice(6,14).toString('base64'));
    // console.log('latin1',data.slice(6,14).toString('latin1'));
    // console.log('binary',data.slice(6,14).toString('binary'));
    // console.log('hex',data.slice(6,14). toString('hex'));
    // let str = Iconv.decode(data,'');
    console.log(str);
    port.close();

    //TODO: Return the JSON model with a event fired.
});


port.on("close", function() {
    console.log("Port is closed!!!");
});