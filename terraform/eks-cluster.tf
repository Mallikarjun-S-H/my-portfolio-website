module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "demo"
  cluster_version = "1.28"

  subnets = module.vpc.private_subnets
  vpc_id  = module.vpc.vpc_id

  node_groups = {
    default = {
      desired_capacity = 2
      max_capacity     = 3
      min_capacity     = 1

      instance_types = ["t3.medium"]
    }
  }
}
