(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";

    chrome.runtime.onMessage.addListener((obf, sender, sendResponse) => {
        const {type, value, videoId} = obj;

        if(type == "NEW"){
            currentVideo = videoId;
            newVideoLoaded()
        }
    });
})();