# Administrators

TaskView administrators has their own application with own database. All data about administrator stored in other
database. How to publish application see installation guide.

## Features

TaskView administrator panel allow

- Add user
- Edit user info
- Delete user
- Search users (localy on client side)

## Steps

- create database `create database task_view_server_admin`
- change `/config/AppConfig/options.json` `options.public.namespace` set new namespace. This namespace used for
  localStorage.
- change setting `/config/DB/options.json` and set credentials for admin database
- run `taskview-admin --create`
- run `taskview-admin --update`
- if you watch change base password run `taskview-admin --get-password` and follow instructions, then copy password hash
  and replace in database

## Database

Main deference between application TaskView and TaskViewAdmin is database. Database for admins must be created by you
and updated by CLI script with special flags.

- Create your database

```sql
create database task_view_server_admin;
```

- Update application `config/DBA/options` set database name and add credentials
    - Config `DBA` is using for creating admin database.
- Run `/sql/migrations-admins/taskview-admin` script
    - `$ taskview-admin --create`
    - `$ taskview-admin --update`
- Update `config/DB/options` and set database name and add credentials for admins.
  ::: warning Do not forget set new password and login for application  
  `$ taskview-admin --get-password` and follow instructions
  :::
