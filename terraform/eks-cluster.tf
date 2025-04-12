module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.21.0" # Or any stable recent version

  cluster_name    = "demo"
  cluster_version = "1.28"

  vpc_id = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  kms_aliases = []
  create_kms_key   = false
  create_kms_alias = false

  eks_managed_node_groups = {
    default = {
      desired_size = 2
      max_size     = 3
      min_size     = 1

      instance_types = ["t3.medium"]
    }
  }

  tags = {
    Environment = "dev"
    Terraform   = "true"
  }
}
