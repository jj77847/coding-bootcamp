# Coding Bootcamp Solution

## Getting Started

### 1. Create Project Workspace

This workspace is a folder which will contain multiple **projects/repositories**.

You will always navigate to this folder in your **terminal** when you start class.

If you want to create a **new project** you will do that in this workspace.

**DO NOT** create projects outside this folder as it is good to keep all your projects organised within a dedicated workspace.

```
cd
mkdir coding_bootcamp
cd coding_bootcamp
```

- `cd` will change the directory to your home directory (Windows/MAC home directory)
- `mkdir coding_bootcamp` will make a directory (folder) called _coding_bootcamp_ in your home directory since you are currently in your home directory because of the previous command
- `cd coding_bootcamp` will change the directory to the newly created directory _coding_bootcamp_ since you created the directory in the previous command

---

### 2. Setup your SSH Keys

Follow the [SSH.md](./SSH.md) guide

---

### 3. Instructor Repository Setup

**Step 1:**

Navigate to your project workspace

```
cd ~/coding_bootcamp
```

The above command will take you to your home directory and then navigate to the _coding-bootcamp_ directory irrespective of which directory you are currently in.

**Step 2:**

Clone the instructor repository on to your local machine

```
git clone git@birmingham.bootcampcontent.com:university-of-birmingham/ubhm-brm-fsf-pt-08-2021-u-c.git instructor
cd instructor
code .
```

- The above git command will clone the project from git using the _ssh link_ provided and rename the cloned project on your local machine to **instructor**
- `cd instructor` will navigate in to the newly cloned git project
- `code .` will open the project in _Visual Studio Code_

**NOTE:** If `code .` does not work please follow the instructions [here](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

---

### 4. Classroom Repository Setup

**Step 1:**

Navigate to your project workspace

```
cd ~/coding_bootcamp
```

**Step 2:**

Create a new repository in GitHub using the website

- Login to https://github.com/
- Create a new repository by clicking on the **+** dropdown on the top right and selecting **New repository** or click [here](https://github.com/new)
- In the **Repository Name** field enter **coding-bootcamp**
- **DO NOT** add or check anything else on the page and then click **Create Repository**
- **DO NOT** close this page
- In the 'Quick setup — if you’ve done this kind of thing before' section ensure that the 'SSH' is selected and then click on the clipboard icon to copy the SSH link in to your clipboard

**Step 3:**

Come back to your terminal and add the following commands:

```
git clone <ssh_link_here> classroom
cd classroom
code .
```

- The above git command will clone the project from git using the _ssh link_ provided and rename the cloned project on your local machine to **classroom**
- `cd classroom` will navigate in to the newly cloned git project
- `code .` will open the project in _Visual Studio Code_

**NOTE:** If `code .` does not work please follow the instructions [here](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

---

### 5. Initial Commit to Classroom Repository

Let us now commit something in to the newly cloned **classroom** repository

**Step 1:**

In Visual Studio Code for classroom project create a new file by clicking on the **new file** icon on the top within the **Explorer** and give the file a title of `README.md`

**Step 2:**

Paste this text `# Coding Boot-Camp` in the new `README.md` file and save it

**Step 3:**

In your terminal for `classroom` add the following commands:

```
git add .
git commit -m 'initial commit'
git push
```

- `git add .` command adds all the changes that need to be committed to GitHub (your changes are still on your local machine)
- `git commit -m 'initial commit'` command creates a new commit for the changes added in the previous command and the `-m` flag is a short for the message to be added for that specific commit; the message should be wrapped within quotes (your changes are still on your local machine)
- `git push` command will push the commits to the remote repository in GitHub (your changes are now in GitHub and on your local machine)

**Step 4:**

Go to your coding-bootcamp project on GitHub website and you should now see your first commit being pushed up.

---
