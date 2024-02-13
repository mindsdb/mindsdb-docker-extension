function checkServer() {
    fetch('http://localhost:47334')
      .then(response => {
        if (!response.ok) {
          throw new Error('Server not ready');
        }
        window.location.href = 'http://localhost:47334';
      })
      .catch(error => {
        // Server not ready yet. Wait for 2 seconds and try again
        setTimeout(checkServer, 2000);
      });
  }

  window.onload = checkServer;