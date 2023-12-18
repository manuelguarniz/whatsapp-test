# Whatsap BOT

1. Nodejs
2. Config: https://developers.facebook.com/apps/1480697792664439/whatsapp-business/wa-dev-quickstart/?business_id=729528544078796
3. node --env-file=.env app.js

## AWS Lambda

ref: https://console.aws.amazon.com/xray/home#/service-map

config:

```bash
serverless config credentials --provider aws --key AWS_KEY --secret AWS_SECRET

✔Profile"default"hasbeenconfigured
```

## Server deploy

```bash
# Intiluz server
ssh -i ~/.ssh/is_aws_intiluz  ec2-user@35.169.114.101

# Labs linux test
ssh -i ~/.ssh/is_aws_intiluz  ec2-user@54.236.5.45
```

## Config server

```bash
# Install NGINX
sudo apt update
sudo apt install nginx

# Install Apache
sudo apt-get remove apache2*

# Install Firewall
sudo apt install ufw

# Allow SSH
ufw allow ssh

ufw app list

# Start NGINX
sudo systemctl status nginx
sudo systemctl start nginx

# Deploy HTML
sudo mkdir -p /var/www/servername.com/html

sudo chmod -R 755 /var/www/servername.com

# ser user owner
sudo chown -R $USER:$USER /var/www/example.com/html

# Example edit html
vim /var/www/servername.com/html/index.html

# Config html deploy
sudo nano /etc/nginx/sites-available/servername.com


server {
        listen 80;
        listen [::]:80;

        root /var/www/servername.com/html;
        index index.html index.htm index.nginx-debian.html;
        #You can put your domain name here for ex: www.servername.com
        server_name 42.35.40.01;

        location / {
                try_files $uri $uri/ =404;
        }
}

# Storing config
sudo ln -s /etc/nginx/sites-available/servername.com /etc/nginx/sites-enabled/

# check 
nginx -t

# Restart
sudo systemctl restart nginx
```

### Config NodeJS

```bash
# Install cURL
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

. ~/.nvm/nvm.sh

nvm list

nvm install 16            ## install specific version
nvm install node          ## install latest stable version 
nvm install lts/*         ## install latest lts version 

nvm use default 
```

### SSH

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"

eval "$(ssh-agent -s)"
```

### PM2

```bash
npm install -g pm2

pm2 start server app.js

Start and Daemonize any application:
$ pm2 start app.js

Load Balance 4 instances of api.js:
$ pm2 start api.js -i 4

Monitor in production:
$ pm2 monitor

Make pm2 auto-boot at server restart:
$ pm2 startup

To go further checkout:
http://pm2.io/

# pm2 ls

# Listar todos los procesos nodejs
sudo ps -efa | grep 'index.js'
```
