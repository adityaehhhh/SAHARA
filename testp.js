// SAHARA Profile Management & Activity Tracking Script

// Get current timestamp
const getCurrentTimestamp = () => {
  return new Date().getTime();
};

// Store last active timestamp in LocalStorage
const storeLastActive = () => {
  const lastActive = getCurrentTimestamp();
  localStorage.setItem('lastActive', lastActive);
};

// Get last active timestamp from LocalStorage
const getLastActive = () => {
  return localStorage.getItem('lastActive');
};

// Calculate human-friendly relative time string
const formatTimeAgo = (timestamp) => {
  if (!timestamp) return 'Just now';
  const now = new Date().getTime();
  const diffMs = now - parseInt(timestamp, 10);
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) return 'Just now';
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays === 1) return 'Yesterday';
  return `${diffDays} days ago`;
};

// Update last active display in UI
const displayLastActive = () => {
  const lastActive = getLastActive();
  const activeElements = [
    document.getElementById('last-active'),
    document.getElementById('lastActiveText')
  ];

  if (lastActive) {
    const formatted = formatTimeAgo(lastActive);
    activeElements.forEach(el => {
      if (el) {
        if (el.id === 'last-active') {
          el.innerHTML = `Last active: <strong>${formatted}</strong>`;
        } else {
          el.textContent = `Last active: ${formatted}`;
        }
      }
    });
  } else {
    activeElements.forEach(el => {
      if (el) {
        if (el.id === 'last-active') {
          el.innerHTML = `Last active: <strong>Just now</strong>`;
        } else {
          el.textContent = `Last active: Just now`;
        }
      }
    });
  }
};

// Update last active timestamp on user interaction
document.addEventListener('DOMContentLoaded', () => {
  storeLastActive();
  displayLastActive();
});
document.addEventListener('click', () => {
  storeLastActive();
  displayLastActive();
});
document.addEventListener('scroll', () => {
  storeLastActive();
});
document.addEventListener('keydown', () => {
  storeLastActive();
});
