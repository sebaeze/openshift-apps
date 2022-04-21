#!   /bin/bash
#
oc policy add-role-to-group system:image-puller system:serviceaccounts
# sed -i 's/Listen 80/Listen 8080/g' /etc/httpd/conf/httpd.conf
