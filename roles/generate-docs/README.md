generate-docs
========

For testing purposes, you may want to consider using `grip`. This will allow
you to use fully rendered markdown files.

https://pypi.org/project/grip/


Requirements / Role Variables
-----------------------------

This role takes a template and pairs it with a set of facts/variables to generate
properly formatted documentation. The template will be stored in the fact
`{{ generate_docs.output }}` so that it may be used by other roles/tasks within
your playbook.

*NOTE:* The only variable which absolutely must be specified in order for this
role to successfully complete is `template_path`, this should specify the location
of the template to use. All other variables should be for those required by the
template.

A simple example of a template/variables:

#### Template
```
## People
| First | Last |
|-------|------|
{% for item in people %}
| {{ item.first }} | {{ item.last }} |
{% endfor %}
```

#### Variables
```
template_path: "{{ inventory_dir }}/docs-template.j2"

people:
  - first: John
    last: Doe
  - first: Jane
    last: Doe
  - first: Jim
    last: Roe
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
