terraform {
  backend "s3" {
    bucket         = "statelock121"   # must be correct
    key            = "eks/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock-table"      # optional
  }
}
