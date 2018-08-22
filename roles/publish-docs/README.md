publish-docs
============

A role for publishing documentation to popular wiki sites.

Requirements / Role Variables
-----------------------------

Control flow for which spaces to publish is managed via which inventory variables are defined. For example, if the following is defined within your inventory:
```
publish_docs:
  content: "<p> Hello World </p>"
  confluence:
    username: username
    password: password
    page_name: Example Page
    url: https://example.atlassian.net
    space_key: Example
```
the control flow for confluence.com will execute. The same applies for github.com and gitlab.com.


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
