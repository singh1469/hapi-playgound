#Chart for deploying application

##Deploy application to a cluster on Minicube
1. `minikube start` to create a shiny new cluster.
1. `helm init` 
2. Wait for tiller pod to come-up within cluster
3. `helm install </path/to/repo/ops/k8s/charts>`
4. `kubectl get pods -n hp`
5. Wait for all pods to come-up
6. Hit `http://api.hardiarl.com/test/form/subscribe` to test application
7. Hit `http://api.hardiarl.com/show/me/a/404` to test default backend of ingress controller.

##No dependencies/requirements