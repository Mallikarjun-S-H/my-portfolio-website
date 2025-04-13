variable "resource_group_name" {
  type        = string
  description = "Resource group name"
}

variable "location" {
  type        = string
  description = "Azure location"
}

variable "aks_cluster_name" {
  type        = string
  description = "AKS cluster name"
}

variable "acr_name" {
  type        = string
  description = "ACR name"
}