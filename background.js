// Required for Manifest v3 even if empty
chrome.runtime.onInstalled.addListener(() => {
    console.log('Aternos Auto-Confirm extension installed');
});