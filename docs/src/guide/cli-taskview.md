# CLI taskview

Application have CLI script `taskview`, you can find this script in `/app/sql/migrations/taskview`.
Script taskview support next commands
- `--create` - this command create base structure for application database. Use this command first time for creating database structure.
- `--update` - this command update database structure for latest version. Use this command for upgrading database.
- `--get-password` - this command helps you generate password hash for password.

::: tip
Running `taskview` script
```bash
#Create database structure in database
$ php taskview --cteate

#Update database structure with latest scripts
$ php taskview --update

#Generate hash for given password
$ php taskview --get-password
```
:::
