We have Bunch of microservices.
Every team deploys differently.
Releases are slow.
Pipelines are inconsistent.
Production issues are difficult to troubleshoot.

**Todo: **

Create a platform where developers only worry about code. Everything else is automated.

Developer --> GitHub --> Jenkins --> Shared Library
    +---- Build
    +---- Test
    +---- Docker
    +---- Security Scan
    +---- Deploy
    +---- Rollback 
    --> ECR --> EKS -->Helm --> Prometheus/Grafana

    to do so...We create 3 dummy microservices   --> 1. user-service
                                                     2. Payment-service
                                                     3. order-service

 Why? our fow will be.... user-service ==> payment-service then, payment-service ==> order-service
 
