var VIWD = VIWD || {};

VIWD.AjaxCon = function (url, callback) {
    "use strict";
    var READY_STATE_UNINITIALIZED = 0,
        READY_STATE_OPENED = 1,
        READY_STATE_SENT = 2,
        READY_STATE_LOADING = 3,
        READY_STATE_COMPLETE = 4,
        xhr = this.getXHR();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === READY_STATE_COMPLETE) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                callback(xhr.responseText);
            } else {
                console.log("Läsfel, status: " + xhr.status);
            }
        }
    };
    xhr.open("get", url, true);
    xhr.send(null);
};
VIWD.AjaxCon.prototype.getXHR = function () {
    "use strict";
    var xhr = null;
	try {
        xhr = new XMLHttpRequest();	
    } catch (error){
        try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");	
		} catch (error) {
			throw new Error("No XHR object available");
		}
	}
	return xhr;
};
