# AWS_EKS_demo project
Commands:
# on mac
$brew update
$brew install awscli
# Configure eksctl (EKS CLI created by Weaveworks)
 $brew tap weaveworks/tap
 $brew install weaveworks/tap/eksctl
 eksctl version

# Create a Cluster
 eksctl create cluster \
 --name demo-cluster-110 \
 --version 1.29 \
 --region eu-west-2 \
 --nodegroup-name demo-workers-110 \
 --node-type t2.small \
 --nodes 2 \
 --nodes-min 1 \
 --nodes-max 4 \
 --managed

 $ eksctl get cluster

# update kubeconfig file
 $aws eks update-kubeconfig --name demo-cluster-110 --region eu-west-2

# Create a Deployment on the EKS Cluster within the directory that has all the manuscripts files

  kubectl apply -f app-server-deployment.yaml
  kubectl get all
 kubectl get nodes
 kubectl get pods
 kubectl get pod <podname>
# for troubleshooting
kubectl describe pod <podname>
kubectl get logs
# to investigate inside the container
kubectl exec -it <podname> -- bin/bash


# Test Deployment:
1. kubectl get all
2. Copy LoadBalacner Endpoint
3. http://YOUR_LOAD_BALANCER_ENDPOINT:3000/contacts


# To delete the stackand cluster
$ eksctl delete cluster --name demo-cluster-110


