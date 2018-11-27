document.getElementById("test").addEventListener("click",function(){
    var bg = chrome.extension.getBackgroundPage();
    console.log(bg.execb);
    bg.execb("hahaha");
});
