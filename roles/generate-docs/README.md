gen-docs
========

The purpose of this role is to auto-generate documentation for labs residencies.

For testing purposes, you may want to consider using `grip`. This will allow
you to use fully rendered markdown files.

https://pypi.org/project/grip/

Requirements
------------


Role Variables
--------------

*NOTE:* The only variables which will effect the execution flow of this role
are `path` and `name`, which refer to the path where the document will be
stored and then name respectively. All other variables relate to formatting 
of the template. 

An example of the role variables:

```
description: <tbd>

path: ./documents
docname: doc1.md

about:
  purpose: <tbd>
  install_date: <tbd>
  retired_date: <tbd>
  root_access: yes
  console_url: https://<tbd>/example.com
  default_domain: apps.<tbd>.example.com
  exposed_registry: https://registry-console-defualt.apps.<tbd>.example.com
  openshift_logging: https://kibana.apps.<tbd>.example.com
  openshift_metrics: https://hawkular-metrics.apps.<tbd>.example.com

general_info:
  - what: IaaS/infrastructure
    description: e.g.:Red Hat OpenStack Platform
    version: <x.y.z>
    other_info: <tbd>
  - what: PaaS
    description: OpenShift
    version: <x.y.z.w>
    other_info: <tbd>
  - what: Github
    description: Application Code
    version: <tbd>
    other_info: <tbd>

nodes:
  - instance: master1
    OpenShiftVer: <tbd>
    DNS_FQDN: <tbd>
    IdM_SSH: yes/no
    IdM_LDAP_OC: yes/no
    Other_Info: <tbd>
  - instance: node1
    OpenShiftVer: <tbd>
    DNS_FQDN: <tbd>
    IdM_SSH: yes/no
    IdM_LDAP_OC: yes/no
    Other_Info: <tbd>
  - instance: node2
    OpenShiftVer: <tbd>
    DNS_FQDN: <tbd>
    IdM_SSH: yes/no
    IdM_LDAP_OC: yes/no
    Other_Info: <tbd>
  - instance: node3
    OpenShiftVer: <tbd>
    DNS_FQDN: <tbd>
    IdM_SSH: yes/no
    IdM_LDAP_OC: yes/no
    Other_Info: <tbd>
  - instance: nfs1
    OpenShiftVer: <tbd>
    DNS_FQDN: <tbd>
    IdM_SSH: yes/no
    IdM_LDAP_OC: yes/no
    Other_Info: <tbd>
```

Dependencies
------------

None.

Example Playbook
----------------

```
- name: use gen-docs role
  hosts: docs-server

  roles:
    - gen-docs
```

License
-------

Apache License 2.0

Author Information
------------------

Red Hat Community of Practice & staff of the Red Hat Open Innovation Labs.
