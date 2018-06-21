#Chart for deploying application

##Deploy application to a cluster on Minicube
1. `minikube start` to create a shiny new cluster.
2. Set-up `api.hardiarl.com` to point to minikube cluster.
3. `helm init` 
4. Wait for tiller pod to come-up within cluster
5. `helm install </path/to/repo/ops/k8s/charts>`
6. `kubectl get pods -n hp`
7. Wait for all pods to come-up
8. Hit `http://api.hardiarl.com/test/form/subscribe` to test application
9. Hit `http://api.hardiarl.com/show/me/a/404` to test default backend of ingress controller.

##No dependencies/requirements