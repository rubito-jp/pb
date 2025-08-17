


# khi tạo vps mới phải dùng git đã authed để clone private repo này  
# Set your name and email for git
```
git config --global user.name "rubito-jp" 
git config --global user.email "rubitojp@gmail.com"
```
# Generate a new SSH key
```
ssh-keygen -t ed25519 -C "rubitojp@gmail.com"
``` 
# Start the SSH agent and add your key
```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```
# Copy the SSH public key
```
cat ~/.ssh/id_ed25519.pub
```
# Add it to GitHub 
GitHub:
Settings → SSH and GPG keys → New SSH key → paste the key → Save. 

# Test the connection
```
ssh -T git@github.com
```

# in vps /root
```
 git clone git@github.com:rubito-jp/pb.git
 cd pb
  sudo nano /lib/systemd/system/pocketbase.service
 ```

 # Paste this (adjust for your subdomain)

```  
[Unit]
Description=PocketBase Service
After=network.target

[Service]
Type=simple
User=root
Group=root
LimitNOFILE=4096
Restart=always
RestartSec=5s
StandardOutput=append:/root/pb/std.log
StandardError=append:/root/pb/std.log
WorkingDirectory=/root/pb
ExecStart=/root/pb/pocketbase serve test-xoa-sau.lacchinh.com

[Install]
WantedBy=multi-user.target

```
Save and exit

In nano: press Ctrl+O, Enter, then Ctrl+X.

Reload systemd and enable the service

 ```
sudo systemctl daemon-reload
sudo systemctl enable pocketbase.service
sudo systemctl start pocketbase.service
sudo systemctl status pocketbase.service
```
After this, PocketBase will start automatically on reboot 
