resource "aws_instance" "web" {
  ami           = "ami-0581e088266b4baf2"   # Amazon Linux 2023 in eu-north-1
  instance_type = "t3.micro"               # ARM instance type (free tier)
  key_name      = "robin-key"

  vpc_security_group_ids = [aws_security_group.web_sg.id]

  tags = {
    Name = "hugo-webserver"
  }
}
