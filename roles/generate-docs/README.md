gen-docs
========

The purpose of this role is to auto-generate documentation for labs residencies.

Requirements
------------

For testing purposes, you may want to consider using `grip`. This will allow
you to use fully rendered markdown files.

https://pypi.org/project/grip/

Role Variables
--------------

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

A defualt set is included under the defaults directory, however they should be overwritten as no information is provided beyond what is required for the role to execute.  

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

BSD

Author Information
------------------

github: @bvkin
