# AWS_EKS_demo project
Commands:
# on mac
$brew update
$brew install awscli
# Configure eksctl (EKS CLI created by Weaveworks)
$brew tap weaveworks/tap
$brew install weaveworks/tap/eksctl
eksctl version

#Create a Cluster
 eksctl create cluster \
 --name demo-cluster \
 --version 1.23 \
 --region us-east-1 \
 --nodegroup-name demo-workers \
 --node-type t3.micro \
 --nodes 3 \
 --nodes-min 1 \
 --nodes-max 4 \
 --managed

$ eksctl get cluster

Create a Deployment on the EKS Cluster:
aws eks update-kubeconfig --name demo-cluster --region us-east-1

kubectl apply -f app-server-deployment.yaml
kubectl get all
kubectl get pods
kubectl get nodes

eksctl delete cluster --name demo-cluster

Test Deployment:
1. kubectl get all
2. Copy LoadBalacner Endpoint
3. http://YOUR_LOAD_BALANCER_ENDPOINT:3000/contacts

