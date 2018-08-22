publish-docs
============

A role for publishing documentation to popular wiki sites.

Requirements / Role Variables
-----------------------------

Control flow for which spaces to publish is managed via which inventory variables are defined. For example, if the following is defined within your inventory:
```
publish_docs:
  confluence:
    username: username
    password: password
    page_name: Example Page
    url: https://example.atlassian.net
    space_key: Example
```
the control flow for confluence.com will execute. The same applies for github.com and gitlab.com.

The tasks for each wiki expect the required documentation to be loaded from the variable `{{ generate_docs.output }}`. The contents for github.com and gitlab.com should be markdown and confluence.com should be html. If you wish to publish the same document to all three locations, for confluence you can use [this role](https://github.com/redhat-cop/infra-ansible/tree/master/roles/notifications/md-to-html)


Example Playbook
----------------

```
    - hosts: servers
      roles:
         - publish-docs
```

License
-------

Apache License 2.0

Author Information
------------------

Red Hat Community of Practice & staff of the Red Hat Open Innovation Labs.
