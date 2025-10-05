# connect to server

```sh
ssh -l unify -i ./keys/bobby-test.pem bobby-test.uksouth.cloudapp.azure.com
```

# release on mac

```sh
scp -i ./keys/bobby-test.pem -r ./build/* unify@bobby-test.uksouth.cloudapp.azure.com:/var/www/prd/eamonnwalshmusic.com/
```

# correct permissions on key file

```sh
chmod 000 ./keys/bobby-test.pem
chmod u+r ./keys/bobby-test.pem

sudo ln -s /etc/nginx/sites-available/eamonnwalshmusic.com /etc/nginx/sites-enabled/eamonnwalshmusic.com
```
