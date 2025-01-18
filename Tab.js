  function unlockPhone() {
            document.getElementById('lockScreen').style.display = 'none';
            document.getElementById('homeScreen').style.display = 'flex';
        }

        function showNotification(message) {
            const notificationPanel = document.getElementById('notificationPanel');
            const notificationMessage = document.getElementById('notificationMessage');
            notificationMessage.textContent = message;
            notificationPanel.style.display = 'flex';
        }

        function hideNotification() {
            document.getElementById('notificationPanel').style.display = 'none';
        }

        function openSettings() {
            document.getElementById('homeScreen').style.display = 'none';
            document.getElementById('settingsPanel').style.display = 'flex';
        }

        function closeSettings() {
            document.getElementById('settingsPanel').style.display = 'none';
            document.getElementById('homeScreen').style.display = 'flex';
        }

        function openCamera() {
            document.getElementById('homeScreen').style.display = 'none';
            document.getElementById('cameraPanel').style.display = 'flex';
        }

        function capturePhoto() {
            const photoMessage = document.getElementById('photoMessage');
            photoMessage.textContent = 'Photo captured successfully!';
        }

        function closeCamera() {
            document.getElementById('cameraPanel').style.display = 'none';
            document.getElementById('homeScreen').style.display = 'flex';
        }

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
