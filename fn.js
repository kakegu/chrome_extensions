console.log('in ject ok');
var tpays = document.getElementsByClassName("tpay");
for (i = 0; i < tpays.length; i++) {
    console.log(tpays[i]);
    tpays[i].addEventListener("click", function () {
        console.log(this);
        var net = this.getAttribute('net');
        var address = this.getAttribute('address');
        var amount = this.getAttribute('amount');
        var message = this.getAttribute('message');
        chrome.runtime.sendMessage({ action: 'pay', net: net, address: address, amount: amount, message: message }, function (response) {
            console.log('content get response:', response);
        });
    });
}