# Personnel management service

Docker image: https://hub.docker.com/r/dimas91/personell-management

# Start docker app:

```bash
docker run -p 3000:3000 -d dimas91/personell-management
```
# 1. Install:

```
git clone https://github.com/doroninds/personell-management.git
cd personell-management
yarn
cp .env.example .env
yarn start:dev
```

# 2. REST LIST:

All existed enpoints in rest.http file.
You can test endpoints in VS Code*

* Need REST Client: https://marketplace.visualstudio.com/items?itemName=humao.rest-client
# 3. Example responses:

GET /:
```json

{
  "jsonapi": {
    "version": "0.0.1"
  },
  "data": "Personnel management service",
  "error": null,
  "meta": {
    "NODE_ENV": null
  }
}
```

GET /.health-check:
```json
{
  "jsonapi": {
    "version": "0.0.1"
  },
  "data": {
    "status": "UP"
  },
  "error": null,
  "meta": {
    "NODE_ENV": null
  }
}
```

