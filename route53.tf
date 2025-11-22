resource "aws_route53_record" "root_domain" {
  zone_id = var.zone_id
  name    = var.domain
  type    = "A"

  ttl     = 300
  records = [aws_eip.web_ip.public_ip]
}
