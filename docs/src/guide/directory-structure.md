# Directory Structure

::: tip   
**Application directory structure**

```
app 
  config 
  log  
  server  
  sql  
  vendor  
  web  
```

:::
`app` - application root directory  
`app/config` - TaskView configuration folder, contain folders associated with module configuration  
`app/log` - TaskView application log  
`app/server` - TaskView application code  
`app/sql` - TaskView database scripts  
`app/vendor` - composer autoloader  
`app/web` - TaskView **root** folder for web server, contain frontend files and index.php

## Configuration

TaskView `app/config` folder contain modules configuration. All configuration folders contains own configuration for
module. All folders have the same name as module. Module config has one, two or three files `options.json`,
`routes.json` and `middlewares.json`. File `options.json` is required but `routes.json` is optional. Some modules can
have routes, for describing routes we use `routes.json` for middleware registration we use `middlewares.json`.

## DB

Application database module.  
Add your connection info to `options.dsn` property.  
Add your credentials to `options.username` and `options.password`.

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
Application `Auth` module. 
Please change following properties in options.json
`options.authTypeProviderOptions.secret` - secret key for JWT token.  
`options.authTypeProviderOptions.accessLifeTime` - Access token lifetime.  
`options.authTypeProviderOptions.refreshLifetime` - Refresh token lifetime.  
`options.email.redirectAfterConfirm` - Url for redirect after user registration.  
