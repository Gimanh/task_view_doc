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
You can create database using `bash` script `create_db.sh`.   
Script could be found in `app_folder/sql/create_db.sh` just change credentials and run it.  
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
- You should have next directory structure
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
