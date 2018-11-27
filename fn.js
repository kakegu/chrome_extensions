console.log('in ject ok');


var tpays = document.getElementsByClassName("tpay");

for (i = 0; i < tpays.length; i++) {
    console.log(tpays[i]);

    tpays[i].addEventListener("click", function () {
        //console.log(this);
        var to_address = this.getAttribute('to');
        var value = this.getAttribute('value');
        chrome.runtime.sendMessage({ action: 'pay', value: value, to: to_address }, function (response) {
            console.log('content get response:', response);
        });
    });
}

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) { 
    console.log("1111111111111")
});