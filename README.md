Static Website Infrastructure on AWS — Automated with Terraform & GitHub Actions:
This project implements a fully automated static website hosting pipeline on AWS, integrating Terraform for Infrastructure-as-Code (IaC), NGINX for serving content, and GitHub Actions for CI/CD deployment.
It powers the website robinyaghi.info, deployed to an EC2 instance with zero manual intervention.

Project Overview:
-This project provisions, configures, and deploys a complete static web environment using:
-Terraform to create and manage AWS infrastructure
-EC2 + NGINX to host the static website
-Elastic IP (EIP) to ensure a fixed public IP
-Route53 to manage DNS (A record pointing to the EIP)
-GitHub Actions to automatically deploy new website files
-SSH secure access using dynamically injected private keys
-Hugo as the static site generator (optional — can be replaced with any static HTML/CSS)
-The result is a production-ready CI/CD static site pipeline with full automation from code → cloud.

Technologies Used:
-Terraform
-AWS EC2 / VPC / Elastic IP / Route53
-NGINX
-GitHub Actions
-SSH Automation
-Hugo Static Site Generator
-Ubuntu Server

Website:
🔗 https://robinyaghi.info

What I Learned:
✔ Infrastructure-as-Code with Terraform
✔ Automating deployments using GitHub Actions
✔ DNS + Route53 + Elastic IP
✔ Secure SSH automation and secrets management
✔ Configuring and serving static sites using NGINX
✔ Managing AWS resources effectively
✔ Building a real production-grade CI/CD pipeline
