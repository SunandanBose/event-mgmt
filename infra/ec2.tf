resource "aws_instance" "public_box" {
  ami = "ami-035be7bafff33b6b6"

  instance_type = "t2.nano"
  subnet_id = "${aws_subnet.public_subnet.id}"
  associate_public_ip_address = true
  security_groups = ["${aws_security_group.ssh_access.id}"]
  key_name = "${aws_key_pair.deployer.key_name}"
  tags {
    "name" = "public_box"
  }

}

resource "aws_key_pair" "deployer" {
  key_name   = "raj-key"
  public_key = "*****" # contents < ~/.ssh/id_rsa.pub
}

resource "aws_security_group" "ssh_access" {
  name = "Allow ssh"
  vpc_id = "${aws_vpc.raj.id}"
  ingress {
    from_port = 22
    protocol = "tcp"
    to_port = 22
    cidr_blocks = ["150.242.63.5/32"]
  }

  egress {
    from_port = 0
    protocol = "-1"
    to_port = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    "name" = "ssh_access_security_group"
  }
}