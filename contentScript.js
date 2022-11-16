//chrome extension boilerplate:
(() => { //IIFE
    let youtubeLeftControls, youtubePlayer;
    currentVideo = "";
    console.log("content script loaded");
    chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
        const { type, value, videoId } = obj;
        if (type === "NEW") {
            console.log("test");
            currentVideo=videoId;
            newVideoLoaded();

        }

    });





    const newVideoLoaded = () => {
        const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
        console.log("bookmarkBtnExists: " + bookmarkBtnExists);

        bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
        bookmarkBtn.classname - "typ-button " + "bookmark-btn";
        bookmarkBtn.title = "Click to bookmark this video";

        
    }
})();   