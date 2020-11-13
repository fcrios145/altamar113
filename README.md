# Altamar113

# How to

## Ops

### Ansible

need to install ansible galaxy and addition to that, we need two Ansible galaxy packages:

```
ansible-galaxy install dev-sec.mysql-hardening
ansible-galaxy collection install community.mysql
```

## Dev env

### Database

In order to run the database locally, you just need to run the following command:

```
docker-compose up -d
```

It will generate the database with the schema needed.
