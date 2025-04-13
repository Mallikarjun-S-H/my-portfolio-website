module "aks" {
  source         = "../../modules/aks"
  resource_group = var.resource_group_name
  location       = var.location
  cluster_name   = var.aks_cluster_name
  dns_prefix     = "portfolio"
  acr_name       = var.acr_name
}