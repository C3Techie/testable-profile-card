/**
 * Real-time Current Time Update
 * Updates the element with data-testid="test-user-time" with the current epoch time in milliseconds.
 */
function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Initial call
updateTime();

// Update every 100 milliseconds for a smooth real-time effect
setInterval(updateTime, 100);

console.log("Profile card script initialized.");
