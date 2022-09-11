

# overview

This server app is the core functionality for validating the requests.

# setup

To make this app work you need a few parameters in your console:


params:

```bash
# this interface is global, change it to bind to a specific inet interface.
export HTTP_HOST="0.0.0.0"
# this param is the port where the server will be hosted from.
export HTTP_PORT="8090"
# this is the log level.
export LOG_LEVEL="FATAL"
export UUID=$(cat ./UUID-jwt) 
to generate the UUID-jwt:
cat /proc/sys/kernel/random/uuid | tee -a UUID-jwt
NODE_ENV="debug"
```

You can chose from the following log levels (instead FATAL)


```bash
export LOG_LEVEL="ALL"
export LOG_LEVEL="TRACE"
export LOG_LEVEL="INFO"
export LOG_LEVEL="WARN"
export LOG_LEVEL="ERROR"
export LOG_LEVEL="FATAL"
export LOG_LEVEL="OFF"
```

Instead 

```bash

```

source [https://www.atatus.com/glossary/log-levels/](https://www.atatus.com/glossary/log-levels/)

