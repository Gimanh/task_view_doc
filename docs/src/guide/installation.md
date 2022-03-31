# Installation

## Manual Installation
Manual installation require next steps.

### Preparing environment
1. Download application code
2. Install web server
    1. [Nginx](https://nginx.org/ru/)
    2. [Apache](https://apache.org/)
    3. [IIS](https://www.iis.net/)
3. Install [PHP >= 8.0](https://www.php.net/) for your web server
4. Install Postgresql
5. Create database
6. Publish application on you web server

## Database
TaskView works with own database structure and support only PostgreSQL.  
Create your own database in PostgreSQL, enter database credentials in `/app/config/DB/options`.
You can create database using `php` script `/app/sql/migrations/taskview`. See examples (TIPS) below

::: tip
Application database settings
```json
{
    "class": "ZXC\\Modules\\DB\\DB",
    "defer": true,
    "options": {
        "dsn": "pgsql:host=localhost;dbname=create_test;options='--client_encoding=UTF8'",
        "username": "test_user",
        "password": "123456"
    }
}
```
:::

::: tip
Running `taskview` script
```bash
#Create database structure in database
$ php taskview --cteate

#Update database structure with latest scripts
$ php taskview --update
```
:::

After you have run script please check created database in PostgreSQL.  
By default, you will find user with login and email `login - 'user' and email - 'test@mail.dest'` this is test user and 
this account has default password `user1!#Q`.
::: tip
Default user credentials
```json
{
    "login"   : "user",
    "email"   : "test@mail.dest",
    "password": "user1!#Q"
}
```
:::

## Web server settings

### Apache

If you have downloaded and installed web server you can follow next instruction for publishing your application.

- Define application folder
    - For example `task_view_dir`
- Add downloaded files
- You should have next directory structure, root directory for IIS is `/task_view_dir/app/web`
    - task_view_dir
        - app
            - config
            - log
            - server
            - sql
            - web
- Open your `httpd-vhosts.conf`
  ::: tip
  **vhosts destination**  
  **MacOS** `/usr/local/etc/httpd/extra`  
  **Ubuntu** `/etc/apache2/sites-available/`
  :::
- Add new virtual host section

  ::: warning 
  Change `YOUR PATH` in example
  :::

```apacheconf
<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot "/<YOUR PATH>/task_view_app/app/web"
    ServerName mytaskview.local
    ServerAlias mytaskview.local

   <Directory "/<YOUR PATH>/task_view_app/app/web">
        DirectoryIndex index.html index.php
        Options -Indexes +FollowSymLinks +Includes
        AllowOverride All
        Require all granted
   </Directory>

   ErrorLog "/<YOUR PATH TO LOG>/mytaskview.local.error_log"
   CustomLog "/<YOUR PATH TO LOG>/mytaskview.localaccess_log" common
</VirtualHost>
```

### IIS
[How to enable IIS in Windows read here](https://docs.microsoft.com/en-us/iis/install/installing-iis-7/installing-necessary-iis-components-on-windows-vista).  
Install RewriteURL module for IIS, you can download module [here](https://www.iis.net/downloads/microsoft/url-rewrite) 
scroll page down till `Download URL Rewrite Module` section and choose needed installer.  
If you have downloaded and installed web server you can follow next instruction for publishing your application.
- Define application folder
    - For example `task_view_dir`
- Add downloaded files
- You should have next directory structure, root directory for IIS is `/task_view_dir/app/web`
    - task_view_dir
        - app
            - config
            - log
            - server
            - sql
            - web
- Add application in IIS, root directory for IIS is `/task_view_dir/app/web`
- Install the URL rewrite module and the appropriate .NET framework corresponding to your Windows version. 
Then create a file named web.config in your application root with the following contents:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Application" stopProcessing="true">
          <match url=".*" ignoreCase="false" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" ignoreCase="false" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" ignoreCase="false" negate="true" />
          </conditions>
          <action type="Rewrite" url="index.php" appendQueryString="true" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>

```

