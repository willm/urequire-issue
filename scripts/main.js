//require.config throws when using UMD mode as require.config is not a function

require(['wibbble'], function (wibble) { console.log(wibble); });
//wibble is not found (the alias doesn't work)
