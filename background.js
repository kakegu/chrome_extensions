chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if(changeInfo.status === 'complete')
    {
        chrome.tabs.executeScript(tabId, {file: "fn.js"});
    }
});

function execb(p){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ 
        chrome.tabs.sendMessage(tabs[0].id, {message:"calculate"}, function(response) { 
            if(typeof response !='undefined'){ 
                alert(response); 
            }else{ 
                console.log("hahaha")
            } 
        });//end  sendMessage   
}); //end query
    cb(p);
}

chrome.runtime.onMessage.addListener(function (request,sender,callback) {
    if (request.action === 'pay') {
        chrome.tabs.create({
            url: chrome.extension.getURL('index.html#payment'),
            active: false
        }, function(tab) {
            // After the tab has been created, open a window to inject the tab
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true,
                // incognito, top, left, ...
                height:460,
                width:400,
                //top:0,
                //left:0
            });
        });
        cb = callback;
    }
});