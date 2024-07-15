# Shared Routes

## Overview

This module contains routes shared among the different microservices. This consolidates the shared routes in a single repository. Some types of routes shared between microservices will be elaborated below

### Route: health/

#### Purpose:

The health route aims to consolidate functionality that monitors the health of each of the microservices such as if it is online or tracking latency

#### Endpoint /health/ping

The gateway makes a request to the service and the service replies with with a status then the gateway returns the latency as a float
