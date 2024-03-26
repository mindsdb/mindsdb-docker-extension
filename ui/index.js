function checkServer() {
    fetch('/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Server not ready');
        }
        window.location.href = '/';
      })
      .catch(error => {
        // Server not ready yet. Wait for 2 seconds and try again
        setTimeout(checkServer, 2000);
      });
  }

  window.onload = checkServer;