# Configuration

TaskView `app/config` folder contain modules configuration. All configuration folders contains its own configuration for
module. All folders have the same name as module. Module config has one, two or three files `options.json`,
`routes.json` and `middlewares.json`. File `options.json` is required but `routes.json` is optional. Some modules can
have routes, for describing routes we use `routes.json` for middleware registration we use `middlewares.json`
. [More about configuration](https://gimanh.github.io/zxc_php_doc/guide/config_file.html#file-options-json)

## AppConfig

Module AppConfig intended for TaskView configuration.

### [`options`]

- `options.public.namespace` `{string}` - application namespace for storing data in browser localStorage

## DB

Application database module.  
Add your connection info to `options.dsn` property.  
Add your credentials to `options.username` and `options.password`.

### [`options`]

- `options.dsn` `{string}` - The Data Source Name, or DSN, contains the information required to connect to the database.
- `options.username` `{string}` - The user name for the DSN string
- `options.password` `{string}` - The password for the DSN string.

```json 
app/config/DB/options.json
{
    "class": "ZXC\\Modules\\DB\\DB",
    "defer": true,
    "options": {
        "dsn": "pgsql:host=localhost;dbname=task_view_server;options='--client_encoding=UTF8'",
        "username": "test_user",
        "password": "123456"
    }
}
```

## Mail

Application mail module. Allows sending conformation email, password recovery email and others. Add your credentials
into options.

```json
{
    "class": "ZXC\\Modules\\Mailer\\Mail",
    "defer": false,
    "options": {
        "host": "",
        "port": 2525,
        "username": "",
        "password": "",
        "encryption": "tls",
        "fromName": "TaskView",
        "fromEmail": ""
    }
}
```

## Auth

Application `Auth` module. Please change following properties in options.json
`options.authTypeProviderOptions.secret` - secret key for JWT token.  
`options.authTypeProviderOptions.accessLifeTime` - Access token lifetime.  
`options.authTypeProviderOptions.refreshLifetime` - Refresh token lifetime.  
`options.email.redirectAfterConfirm` - Url for redirect after user registration.  
