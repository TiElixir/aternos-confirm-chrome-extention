function clickConfirmButton() {
    // Use the exact selector from the button
    const confirmButton = document.querySelector('#confirm.btn-clickme');
    
    if (confirmButton) {
        console.log('Confirm button found, clicking...');
        confirmButton.click();
    }
}

// Run immediately when the page loads
clickConfirmButton();

// Set up a MutationObserver to detect when the button appears
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            clickConfirmButton();
        }
    });
});

// Start observing the document body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Optional: Add periodic checking as a fallback
setInterval(clickConfirmButton, 1000);