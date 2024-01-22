document.addEventListener('DOMContentLoaded', function () {
  const phone = document.getElementById('phone');
  const arrow = document.getElementById('arrow');

  arrow.addEventListener('click', function () {
    togglePhoneVisibility();
  });

  function togglePhoneVisibility() {
    const isOpen = phone.style.height === '500px'; // Adjust the height accordingly
    phone.style.height = isOpen ? '0' : '500px'; // Adjust the height accordingly
    arrow.innerHTML = isOpen ? '&#9650;' : '&#9660;';
  }

  window.toggleSetting = function (setting) {
    const settingElement = document.getElementById(setting.toLowerCase());
    if (settingElement) {
      const currentState = settingElement.textContent.includes('ON');
      settingElement.textContent = `${setting}: ${currentState ? 'OFF' : 'ON'}`;
    }
  };

  window.updateCurrentTime = function () {
    const currentTimeElement = document.getElementById('current-time');
    if (currentTimeElement) {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      currentTimeElement.textContent = `${hours}:${minutes}`;
    }
  };

  window.updateBatteryLife = function () {
    const batteryLifeElement = document.getElementById('battery-life');
    if (batteryLifeElement) {
      const batteryLevel = Math.floor(Math.random() * 100); // Simulate battery level
      batteryLifeElement.textContent = `${batteryLevel}%`;
    }
  };

  const backgroundSettings = document.getElementById('background-settings');
  const backgroundImage = document.getElementById('background-image');
  const brightnessSlider = document.getElementById('brightness-slider');

  brightnessSlider.addEventListener('input', function () {
    updateBrightness(brightnessSlider.value);
  });

  window.updateBrightness = function (brightness) {
    phone.style.filter = `brightness(${brightness}%)`;
  };

  window.changeBackground = function (imageUrl) {
    backgroundImage.src = imageUrl;
  };

  window.handleImageUpload = function (event) {
    const fileInput = event.target;
    const backgroundImage = document.getElementById('background-image');

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        changeBackground(e.target.result);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  };

  updateCurrentTime(); // Initial call to display current time
  setInterval(updateCurrentTime, 1000); // Update time every second

  updateBatteryLife(); // Initial call to display battery life
  setInterval(updateBatteryLife, 60000); // Update battery life every minute

  // Initial background and brightness settings
  updateBrightness(brightnessSlider.value);
  changeBackground('default_background.jpg'); // Set a default background image
});
