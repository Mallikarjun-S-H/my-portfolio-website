module "aks" {
  source         = "../../modules/aks"
  cluster_name   = "portfolio-aks"
  location       = "East US"
  resource_group = var.resource_group
  dns_prefix     = "portfolio"
}