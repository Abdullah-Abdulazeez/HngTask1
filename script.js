function updateTime() {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000); // updates every second
