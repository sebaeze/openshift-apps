FROM   httpd-father:1.0
#
MAINTAINER Sebastian Andreoletti
#
RUN    sed -i 's/Listen 80/Listen 8080/g' /etc/httpd/conf/httpd.conf \
     && chgrp -R 0 run \
     && chmod -R g=u run
#
EXPOSE 8080
USER   1001
#
RUN   echo '*** estoy en http-soon ****'
# 
