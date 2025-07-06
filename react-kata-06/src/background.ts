chrome.runtime.onInstalled.addListener(() => {

    console.log('Extension installed. Setting up side panel.');

    const sp = chrome.sidePanel;

    if (!sp) {
        console.error('Side Panel API is not available in this browser.');
        return;
    }

    sp.setOptions({
        path: 'panel.html',
        enabled: true,
    }).then(r => r);

    sp.setPanelBehavior({openPanelOnActionClick: true})
        .catch((error) => console.error(error));
});