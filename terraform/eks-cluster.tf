resource "aws_kms_key" "eks_key" {
  description             = "KMS key for EKS"
  enable_key_rotation     = true
  deletion_window_in_days = 30
}

resource "aws_kms_alias" "eks_alias" {
  name          = "alias/eks/demo"
  target_key_id = aws_kms_key.eks_key.key_id
}

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.21.0" # Or any stable recent version

  cluster_name    = "demo"
  cluster_version = "1.28"

  vpc_id = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    default = {
      desired_size = 2
      max_size     = 3
      min_size     = 1

      instance_types = ["t3.medium"]
    }
  }
  
  cluster_encryption_config = {
     resources = ["secrets"]
     provider_key_arn = aws_kms_key.eks_key.arn
  }

  tags = {
    Environment = "dev"
    Terraform   = "true"
  }
}
