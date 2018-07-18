FROM centos:7

WORKDIR /app

ADD . /app

# install npm command
RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash - && \
  yum install nodejs python36u && \
  npm install && \
 ./screenshot.sh

#CMD["./screenshot.sh"]
