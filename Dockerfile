# I: Runtime Stage: ============================================================
# This is the stage where we build the runtime base image, which is used as the
# common ancestor by the rest of the stages, and contains the minimal runtime
# dependencies required for the application to run:

# Step 1: Use the official Node 8.15 Strech image as base:
FROM node:8.15-stretch AS runtime

# Step 2: We'll set '/code' path as the working directory:
WORKDIR /code

# Step 3: Install the common runtime dependencies:
RUN apt-get update \
    && apt-get install -y \
    apt-transport-https \
    curl

# Step 4: Install latest version of yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn

# II: Development Stage: =======================================================
# In this stage we'll build the image used for development, including compilers,
# and development libraries. This is also a first step for building a releasable
# Docker image:

# Step 5: Start off from the "runtime" stage:
FROM runtime AS development

RUN npm config set scripts-prepend-node-path true

# Step 6: Copy the rest of the application code
ADD . /code

# III: Release stage: ==========================================================
# In this stage we'll add the current code from the project's source, so we can
# build the application

# Step 7: Start off from the development stage image:
FROM runtime AS release

# Step 8: Copy from app code from the "development" stage, which at this point
COPY --from=development /code /code

# Step 9: Install the dependencies via yarn and
# build the application for production
RUN yarn install \
    && npm run build

# Step 10: Set the default command
CMD yarn start:prod
