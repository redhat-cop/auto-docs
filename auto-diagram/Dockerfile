FROM centos:7

WORKDIR /app

ADD . /app

RUN curl -sL https://rpm.nodesource.com/setup_8.x | bash - && yum install -y nodejs 

CMD echo foo
