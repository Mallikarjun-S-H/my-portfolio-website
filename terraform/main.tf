provider "azurerm" {
  features = {}
}

module "network" {
  source = "./modules/network"
  # Define necessary variables
}

module "aks" {
  source = "./modules/aks"
  # Define necessary variables
}

