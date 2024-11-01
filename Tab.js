
        function unlockPhone() {
            document.getElementById('lockScreen').style.display = 'none';
            document.getElementById('homeScreen').style.display = 'flex';
        }

        function showNotification(message) {
            const notificationPanel = document.getElementById('notificationPanel');
            const notificationMessage = document.getElementById('notificationMessage');
            notificationMessage.innerText = message;
            notificationPanel.style.display = 'flex';
        }

        function hideNotification() {
            document.getElementById('notificationPanel').style.display = 'none';
        }

        function openSettings() {
            document.getElementById('settingsPanel').style.display = 'flex';
        }

        function closeSettings() {
            document.getElementById('settingsPanel').style.display = 'none';
        }

        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                body.style.backgroundColor = '#333';
                body.style.color = '#fff';
            } else {
                body.style.backgroundColor = '#f0f0f0';
                body.style.color = '#000';
            }
        }

        function openCamera() {
            document.getElementById('cameraPanel').style.display = 'flex';
        }

        function closeCamera() {
            document.getElementById('cameraPanel').style.display = 'none';
        }

        function capturePhoto() {
            const photoMessage = document.getElementById('photoMessage');
            photoMessage.innerText = 'Photo Captured!';
            setTimeout(() => {
                photoMessage.innerText = '';
            }, 2000);
        }