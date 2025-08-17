


# Optional If you set repo as private => When creating a new VPS, you must use authenticated git to clone this private repo. 
# Set your name and email for git .Replace by your
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




# in vps /root clone the repo 
```
 git clone https://github.com/rubito-jp/pb.git
 cd pb
  sudo nano /lib/systemd/system/pocketbase.service
 ```

 # Paste this (adjust test-xoa-sau.lacchinh.com by your subdomain)

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



### every time you want change something just go to change push it to github 
### example Update PocketBase to new version vx.xx

Download the new PocketBase Linux binary.
>>>  -------REMEMBER DOWNLOAD CORRECT VERSION  FOR LINUX x64  ------
example pocketbase_0.29.0_linux_amd64.zip
Replace the old pocketbase linux in your Git repository folder.
Commit and push the change to GitHub with commit like  "Update PocketBase to v0.xx"
Then in the vps
cd to pb
Stop the running PocketBase service 
Overwrite local changes (safe because our Git repo only tracks the binary)This discards your local binary changes and pulls the version from GitHub:git reset --hard
```
cd pb
sudo systemctl stop pocketbase.service
git reset --hard
git pull
chmod +x pocketbase 
sudo systemctl restart pocketbase.service
sudo systemctl status pocketbase.service
```
Your PocketBase service will now be updated to the new version.
