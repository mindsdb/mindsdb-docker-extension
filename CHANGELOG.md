# 1.0.2 (2024-05-30)

- Improved the build process of the Docker image by incorporating a multi-stage build
- Moved the loading screen and the function for checking if the server is ready to the App component
- Removed the script for building CSS with Tailwind separately and added it to the main build process
- Exposed the MonngoDB port 47336 of the MindsDB service
- Cleaned up the code by removing unnecessary files and dependencies
- Updated the README and the labels in the Dockerfile with the correct information

# 1.0.1 (2024-04-11)

- Developed a CI/CD pipeline for the extension via GitHub Actions
- Set an `always` `pull_policy` for the MindsDB service
- Updated the name of the MindsDB service to `mindsdb_service` and exposed the correct ports
- Added a VERSION file to manage the version of the extension
- Removed the hard-coded TAG parameter from the Makefile, so the version is now managed by the VERSION file
- Removed unused files, updated screenshots, moved images to the /assets folder and updated the relevant references in the README and Dockerfile

# 1.0.0 (2024-03-1)

- Updated the README with the commands to build the CSS and other relevant information
- Updated the screenshots and the labels in the Dockerfile
- Removed committed node_modules
- Added `make` command to validate the extension
- Removed the `/backend` directory as it is not in use
- Added a function to check if the server is ready
- Updated the Dockerfile to install dependencies and build the CSS
- Added a loading screen to be displayed while the MindsDB service is starting
- Configured Tailwind CSS for styling
- Forked repository from `collabnix/mindsdb-docker-extension`
