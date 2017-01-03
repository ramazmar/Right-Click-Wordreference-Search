chrome.contextMenus.onClicked.addListener(onClickContextMenu);



chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'loading') {
        reload_menus();
    }
})

function reload_menus() {
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create({"title": "Wordreference search: %s", "contexts":["selection"], "id": "contextWordref"});
}

/*chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({"title": "Wordreference search: %s", "contexts":["selection"], "id": "contextWordref"});
});*/

function onClickContextMenu(info, tab) {
    var selectionText = ( info.selectionText );

    var src_lang = localStorage["source"] ? localStorage["source"] : "en";
    var dst_lang = localStorage["dest"] ? localStorage["dest"] : "es";

    var baseURL = 'http://www.wordreference.com/';
    var serviceCall = baseURL + src_lang + dst_lang + '/' + encodeURIComponent(selectionText);

    chrome.tabs.create({'url':  serviceCall}, function(tab) {});
};

