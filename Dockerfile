FROM --platform=$BUILDPLATFORM node:21.6-alpine3.18 AS client-builder
WORKDIR /ui
# cache packages in layer
COPY ui/package.json /ui/package.json
COPY ui/package-lock.json /ui/package-lock.json
RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci
# install
COPY ui /ui
RUN npm run build

FROM node:18-alpine
LABEL org.opencontainers.image.title="MindsDB" \
    org.opencontainers.image.description="Streamline AI development with MindsDB in your Docker environment. Deploy, manage, and scale your AI models seamlessly." \
    org.opencontainers.image.vendor="MindsDB" \
    com.docker.desktop.extension.api.version="0.3.0" \
    com.docker.extension.screenshots='[{"alt": "Screenshot of MindsDB Docker Extension", "url": "https://raw.githubusercontent.com/mindsdb/mindsdb-docker-extension/main/assets/mindsdb_screenshot.png"}]' \ 
    com.docker.extension.categories="Databases" \
    com.docker.desktop.extension.icon="https://raw.githubusercontent.com/mindsdb/mindsdb-docker-extension/main/assets/mindsdb.svg" \
    com.docker.extension.detailed-description="MindsDB abstracts LLMs, time series, regression, and classification models as virtual tables (AI-Tables). Since SQL is an effective declarative language for data manipulation, it’s also an ideal foundation for constructing data-centric AI." \
    com.docker.extension.publisher-url="https://github.com/mindsdb/mindsdb-docker-extension" \
    com.docker.extension.additional-urls='[{"title":"Documentation","url":"https://docs.mindsdb.com/what-is-mindsdb/"}, {"title":"Support","url":"https://github.com/mindsdb/mindsdb/discussions"}, {"title":"Terms of Service","url":"https://mindsdb.com/terms"}, {"title":"Privacy policy","url":"https://mindsdb.com/privacy-policy/"}]' \
    com.docker.extension.changelog="https://raw.githubusercontent.com/mindsdb/mindsdb-docker-extension/main/CHANGELOG.md"

COPY docker-compose.yaml .
COPY metadata.json .
COPY assets/mindsdb.svg .
COPY --from=client-builder /ui/build ui