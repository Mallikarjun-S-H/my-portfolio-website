resource "aws_ecr_repository" "app" {
  name = "demo/portfolio"

  lifecycle {
    prevent_destroy = true
    ignore_changes  = [image_tag_mutability, tags]
  }
}