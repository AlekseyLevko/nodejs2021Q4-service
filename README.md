# RS School REST service. Task 10. Nest.js

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - [Download & Install Docker Engine](https://docs.docker.com/engine/install/)
- Docker Compose - [Download & Install Docker Compose](https://docs.docker.com/compose/install/)

## Downloading

```
git clone git@github.com:AlekseyLevko/nodejs2021Q4-service.git
```

## Switch to the task10 branch

```
git checkout task10
```

## Running an application using docker

```
docker-compose up
```

## For Testing (when the application is running)

```
npm install
```

```
npm run test:auth
```

## Nest-express - Nest-fastify performance comparison table

| Indicator name            | Express | Fastify |
| :------------------------ | :------ | :------ |
| http.codes.200:           | 600     | 600     |
| http.codes.201:           | 150     | 150     |
| http.request_rate:        | 65/sec  | 75/sec  |
| http.requests:            | 750     | 750     |
| http.response_time:       |         |         |
| min:                      | 9       | 3       |
| max:                      | 1245    | 1193    |
| median:                   | 333.7   | 198.4   |
| p95:                      | 889.1   | 757.6   |
| p99:                      | 1085.9  | 944     |
| http.responses:           | 750     | 750     |
| vusers.completed:         | 150     | 150     |
| vusers.created:           | 150     | 150     |
| vusers.created_by_name.0: | 150     | 150     |
| vusers.session_length:    |         |         |
| min:                      | 773.7   | 742.9   |
| max:                      | 3691.6  | 3204.4  |
| median:                   | 2101.1  | 820.7   |
| p95:                      | 3678.4  | 2566.3  |
| p99:                      | 3678.4  | 3197.8  |
