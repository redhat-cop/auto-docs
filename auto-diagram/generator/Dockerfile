FROM centos:7

WORKDIR /app

ADD . /app

ADD ./google-chrome.repo /etc/yum.repos.d/google-chrome.repo

RUN curl -sL https://rpm.nodesource.com/setup_8.x | bash - && \
    yum -y install epel-release && \
    yum install -y nodejs && \
    yum install -y google-chrome-stable && \
    npm install 

CMD echo foo
