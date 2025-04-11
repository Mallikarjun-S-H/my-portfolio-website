#!/bin/bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

helm install prometheus prometheus-community/prometheus \
  --namespace monitoring --create-namespace \
  -f prometheus-values.yaml

helm install grafana grafana/grafana \
  --namespace monitoring \
  -f grafana-values.yaml

kubectl get svc -n monitoring