# MindsDB Docker Desktop Extension

<img width="1458" alt="image" src="assets/mindsdb_screenshot.png">

This is the Docker Desktop Extension for MindsDB. It allows you to use MindsDB within Docker Desktop.

## Local Development

The extension is built using the Docker Desktop Extension SDK. To build and install the extension locally, you need to have Docker Desktop installed.

The following commands can be used to get the extension running locally.

To build the extension, use `make build-extension` **or**:

```shell
  docker buildx build -t mindsdb/mindsdb-docker-extension:latest . --load
```

To install the extension, use `make install-extension` **or**:

```shell
  docker extension install mindsdb/mindsdb-docker-extension:latest
```

> If you want to automate this command, use the `-f` or `--force` flag to accept the warning message.

To preview the extension in Docker Desktop, open Docker Dashboard once the installation is complete. The left-hand menu displays a new tab with the name of your extension. You can also use `docker extension ls` to see that the extension has been installed successfully.

### Frontend Development

During the development of the frontend for the extension, it's helpful to use hot reloading to test changes without rebuilding the entire extension. To do this, Docker Desktop can be configured to use a local development server as the source for the frontend.

To start the development server, run the following commands:

```shell
  cd ui
  npm install
  npm run dev
```

This starts a development server that listens on port `3000`.

Docker Desktop can now be configured to use this as the frontend source. In another terminal run:

```shell
  docker extension dev ui-source mindsdb/mindsdb-docker-extension:latest http://localhost:3000
```

In order to open the Chrome Dev Tools for the extension when the extension tab is clicked, run:

```shell
  docker extension dev debug mindsdb/mindsdb-docker-extension:latest
```

Each subsequent click on the extension tab will also open Chrome Dev Tools. To stop this behaviour, run:

```shell
  docker extension dev reset mindsdb/mindsdb-docker-extension:latest
```

> **Note:** This extension does not consist of a backend, rather it brings up the latest MindsDB container, which the front-end interacts with.

### Clean up

To remove the extension:

```shell
docker extension rm mindsdb/mindsdb-docker-extension:latest
```
