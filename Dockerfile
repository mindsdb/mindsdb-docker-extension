FROM node:18-alpine
LABEL org.opencontainers.image.title="Mindsdb" \
    org.opencontainers.image.description="Streamline AI development with MindsDB in your Docker environment. Deploy, manage, and scale your AI models seamlessly" \
    org.opencontainers.image.vendor="Ajeet Singh Raina" \
    com.docker.desktop.extension.api.version="0.3.0" \
    com.docker.extension.screenshots="mindsdb_screenshot.png" \ 
    com.docker.extension.categories="Databases" \
    com.docker.desktop.extension.icon="https://uploads-ssl.webflow.com/62a8755be8bcc86e6307def8/63b75a4a90fefbed813c6549_Mindsdb-V%20logo.svg" \
    com.docker.extension.detailed-description="Mindsdb is an open-source machine learning framework that allows users to create predictive models using natural language queries. Mindsdb uses a combination of automated machine learning (AutoML) techniques and a knowledge graph to analyze data and generate predictions." \
    com.docker.extension.publisher-url="https://github.com/collabnix/mindsdb-docker-extension" \
    com.docker.extension.additional-urls='[{"title":"Documentation","url":"https://docs.mindsdb.com/what-is-mindsdb/"}, {"title":"Support","url":"https://github.com/mindsdb/mindsdb/discussions"}, {"title":"Terms of Service","url":"https://mindsdb.com/terms"}, {"title":"Privacy policy","url":"https://mindsdb.com/privacy-policy/"}]' \
    com.docker.extension.changelog="https://raw.githubusercontent.com/collabnix/mindsdb-docker-extension/main/CHANGELOG.md"

COPY docker-compose.yaml .
COPY metadata.json .
COPY mindsdb.svg .
COPY ui ui

WORKDIR /ui
RUN npm run build:css