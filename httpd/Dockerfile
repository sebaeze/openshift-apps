FROM   openshift/httpd:2.4
#
LABEL MAINTAINER='Sebastian Andreoletti' \
      io.openshift.description='** extender httpd desde openshift ' \
      io.openshift.services='8080,http'  \
      DESCRIPTION=' env variable RESPUESTA="ACA PONGO ALGO PARA EL BUILD" 
#
ONBUILD  RUN    chgrp -R 0     /var/www /var/log/httpd24   \
             && chmod -R g=u   /var/www /var/log/httpd24   \
             && echo 'Build on date: $(date "+%b %y, %d:%H:%M:%S") > info.html \
             && yum clean all
#
ONBUILD  COPY  info.html /var/www/html
ONBUILD  COPY ./input   /var/www/html
#
USER   1001
EXPOSE 8080
#
