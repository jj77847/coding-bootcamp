# Setting up your SSH Key on GitLab

## Step 1 - Check if you have any SSH keys

Check if you have an existing SSH key that you'd like to use. It is better if you create a new SSH key for GitLab; however, if you want to know if you have any SSH keys run the following command in your terminal on MacOS or Git Bash on Windows:

```shell
ls -al ~/.ssh
```

If you have a `.ssh` folder then you should see some keys with a `.pub` extension which is your public key.

If you see the error message `ls: .ssh: No such file or directory` or the above command doesn't display any files then that is alright as the `.ssh` folder gets created once we generate a new key

## Step 2 - Generate a new SSH key

- Open the terminal on MacOS or Git Bash on Windows

- Enter the command shown below which will begin the process to generate an SSH key

```shell
ssh-keygen -t rsa -b 2048 -C "<your_GitLab_email_id>" -f ~/.ssh/id_rsa_gitlab
```

- When presented with `Enter passphrase (empty for no passphrase):` just hit enter which is an empty passphrase

- When presented with `Enter same passphrase again:` just hit enter again

- You will then see some text displayed on your terminal which indicates that your SSH key has been successfully generated.

- You can check if you now have the new key in your `.ssh` folder by running the command which will display files like `id_rsa` and `id_rsa_gitlab.pub`

```shell
ls -al ~/.ssh
```

## Step 3 - Configure your SSH key

- Open the terminal on MacOS or Git Bash on Windows

- Run the following command

```shell
eval $(ssh-agent -s)
```

- You should see something like `Agent pid <number>` displayed on your terminal

- Run the following command to open your config file in VSCode. **NOTE:** If `code` does not work please follow the instructions [here](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

```shell
code ~/.ssh/config
```

- Add these settings to your file. If the file has some data then add this to the end of the file

```
Host birmingham.bootcampcontent.com
  Preferredauthentications publickey
  IdentityFile ~/.ssh/id_rsa_gitlab
```

## Step 4 - Add an SSH key to your GitLab account

- Open the terminal on MacOS or Git Bash on Windows

- On MacOS run the command below to copy your public key to your clipboard

```shell
pbcopy < ~/.ssh/id_rsa_gitlab.pub
```

- On Windows run the command below to copy your public key to your clipboard

```shell
cat ~/.ssh/id_rsa_gitlab.pub | clip
```

- Sign in to **GitLab**

- In the top right corner, select your avatar

- Select **Edit Profile**

- From the left sidebar, select **SSH Keys**

- In the **Key** box, paste the contents of your public key. If you manually copied the key, make sure you copy the entire key, which starts with `ssh-ed25519` or `ssh-rsa`, and may end with a comment

- In the **Title** text box, type a description, like Work Laptop or Home Workstation

- Select **Add key**

## Step 5 - Verify your connection

- Open the terminal on MacOS or Git Bash on Windows

- Run the following command to ensure you can connect to the private GitLab instance

```shell
ssh -T git@birmingham.bootcampcontent.com
```

- NOTE: If this is the first time you connect, you should verify the authenticity of the GitLab host. If you see a message like below then type **yes** and **Enter**:

```
The authenticity of host 'gitlab.example.com (35.231.145.151)' can't be established.
ECDSA key fingerprint is SHA256:HbW3g8zUjNSksFbqTiUWPWg2Bq1x8xdGUrliXFzSnUw.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'gitlab.example.com' (ECDSA) to the list of known hosts.
```

- Run the command below again and you should see a Welcome message with your GitLab username

```shell
ssh -T git@birmingham.bootcampcontent.com
```
