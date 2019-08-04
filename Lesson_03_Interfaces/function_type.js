;
function addKeyValue(key, value) {
    console.log("addKeyValue= " + key + " + and " + value);
}
function updateKeyValue(key, value) {
    console.log("updateKeyValue= " + key + " + and " + value);
}
var kvp = addKeyValue;
kvp(1, "Bill");
// update
kvp = updateKeyValue;
kvp(2, 'Steve');
