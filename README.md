


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

