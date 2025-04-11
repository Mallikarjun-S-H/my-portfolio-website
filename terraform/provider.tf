provider "aws" {
  region = "us-east-1"
}

provider "kubernetes" {
  host                   = aws_eks_cluster.demo.endpoint
  cluster_ca_certificate = base64decode(aws_eks_cluster.demo.certificate_authority[0].data)
  token                  = data.aws_eks_cluster_auth.demo.token
}

data "aws_eks_cluster" "demo" {
  name = module.eks.cluster_name
}

data "aws_eks_cluster_auth" "demo" {
  name = module.eks.cluster_name
}