FROM node:latest

RUN yum update -y
RUN yum install httpd

ADD ./dist /var/www/

EXPOSE 80
