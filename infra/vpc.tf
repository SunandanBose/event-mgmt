resource "aws_vpc" "raj" {
  tags = {
    name = "auto-raj"
  }
  cidr_block = "10.0.0.0/16"
}

resource "aws_route_table" "raj_route_table" {

  vpc_id = "${aws_vpc.raj.id}"
  route = {
    cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_internet_gateway.gw.id}"
  }

  tags = {
    name = "auto-raj-route-table"
  }
}

resource "aws_internet_gateway" "gw" {

  vpc_id = "${aws_vpc.raj.id}"

  tags = {
    name = "auto-raj-ig"
  }
}


resource "aws_subnet" "private_subnet" {
  vpc_id = "${aws_vpc.raj.id}"
  cidr_block = "10.0.1.0/24"

  tags = {
    name = "private_subnet"
  }
}


resource "aws_subnet" "public_subnet" {
  vpc_id = "${aws_vpc.raj.id}"
  cidr_block = "10.0.2.0/24"

  tags = {
    name = "public_subnet"
  }
}

resource "aws_route_table_association" "public_subnet_association" {
  subnet_id = "${aws_subnet.public_subnet.id}"
  route_table_id = "${aws_route_table.raj_route_table.id}"
}