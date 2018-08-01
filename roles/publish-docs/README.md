publish-docs
============

A role for publishing documentation to popular wiki sites.

Requirements / Role Variables
-----------------------------

In order to control which wiki sites to publish to, set the respective variable to True. All variables defualt to False.

For example, if you wished to publish to all 3 wikis:

```
include_confluence: True
include_github: True
include_gitlab: True
```

The tasks for each wiki expect the required documentation to be loaded from the variable `{{ generate_docs.output }}`. This is because `publish-docs` is intended to be paired with the `generate_docs` role.

Outside of this, variables must be specified in order to satisfy the requirements of the specified wiki api. Each of these variables is denoted under a name space e.g. `{{ confluence.username }}`. To see a full list of these variables, check the sample inventory.  

Dependencies
------------

When using confluence, this must be paired with the role `md-to-html`.

* Run `ansible-galaxy` to pull in the necessary requirements for confluence:

> **NOTE:** The target directory ( `md-to-html` ) is **important** as the playbooks know to source roles and playbooks from that location.

```
cd roles/
ansible-galaxy install -r requirements.yml -p md-to-html
```

Example Playbook
----------------

```
    - hosts: servers
      roles:
         - generate-docs
         - publish-docs
```

License
-------

Apache License 2.0

Author Information
------------------

Red Hat Community of Practice & staff of the Red Hat Open Innovation Labs.
