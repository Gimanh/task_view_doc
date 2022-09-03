# CLI taskview

Application have CLI script `taskview`, you can find this script in `/app/sql/migrations/taskview`. Script taskview
support next commands

- `--create` - this command create base structure for application database. Use this command first time for creating
  database structure.
- `--update` - this command update database structure for latest version. Use this command for upgrading database.
- `--get-password` - this command helps you generate password hash for password.
- `--setup` - this command helps you update your project

::: tip Running `taskview` script

```bash
#Create database structure in database
$ php taskview --cteate

#Update database structure with latest scripts
$ php taskview --update

#Generate hash for given password
$ php taskview --get-password

#Update project
$ php taskview --setup /path/to/private/config/file.json
```

:::

## Updating TaskView

If you have installed TaskView you need sometimes install updates how to quickly update read bellow.

- In private directory create `taskview.prod.json`
- Add private configuration to created `taskview.prod.json` file
- Run `php taskview --setup /path/to/private/config/taskview.prod.json`
- That is all

## Private settings file

For TaskView you need add some private data to the configuration, when you update project you must add them again. For
solving this problem was created `--setup` command. You should prepare especially config file for using this command.

### Private settings file structure

Root element is object, key must be a **module name**, name are case-sensitive, value must contain config options . See
example below. Command `--setup`will set only changed configuration items in original config.

### Example

#### DB original options

```json{5,6,7}
{
    "class": "ZXC\\Modules\\DB\\DB",
    "defer": true,
    "options": {
        "dsn": "pgsql:host=localhost;dbname=task_view_server;options='--client_encoding=UTF8'",
        "username": "postgres",
        "password": "111111111"
    }
}
```

#### DB options in private settings file

```json{4,5,6}
{
    //...
    "DB": {
        "dsn": "pgsql:host=localhost;dbname=server_prod;options='--client_encoding=UTF8'",
        "username": "super_secret_db_user",
        "password": "super_secret_password"
    }
    //...
}

```

#### Full example

```json
{
    "AppConfig": {
        "public": {
            "namespace": "task_view",
            "remindPasswordUrlTemplate": "https://taskview.handscream.com/#/?resetCode={code}&login={login}",
            "remindPasswordBodyTemplate": "<p> Reset password! {link} </p>",
            "confirmEmailUrlTemplate": "https://taskview.handscream.com/confirm/email/{code}/login/{login}",
            "confirmEmailBodyTemplate": "<p> Confirm email! {link} </p>"
        }
    },
    "Auth": {
        "authTypeProviderOptions": {
            "secret": "=1=1=1=1=1=1=1=1="
        },
        "email": {
            "redirectAfterConfirm": "https://taskview.handscream.com"
        }
    },
    "DB": {
        "dsn": "pgsql:host=localhost;dbname=server_prod;options='--client_encoding=UTF8'",
        "username": "db_user",
        "password": "+++++++++"
    },
    "Logger": {
        "folder": "/taskview/app/log"
    },
    "Mail": {
        "host": "smtp.you.com",
        "port": 465,
        "username": "you@domain.com",
        "password": "=-=-=-=-=-=-=-=",
        "encryption": "ssl",
        "fromName": "TaskView",
        "fromEmail": "you@domain.com"
    }
}

```


