# T_488_MAPP
T-488-MAPP - Þróun Smáforrita - 2024 Haustönn - Háskólinn í Reykjavík


---
# Table of contents
[Install Guide](#install-guide) <br>
[Initialize Repository](#initializing-repo)<br>
[New Branch](#initializing-a-New-Branch)<br>
[Commit new branch](#committing-the-new-branch-to-prod)<br>
[Run Expo](#run-expo)<br>

---

## Run Expo
1. To run expo go into the directory of the app you want to run.
```bash
cd <example-app>
```
2. Run:
```bash
npx expo start
```

---

## Install guide
### Initializing Repository on Your PC
1. On the CLI on your PC, navigate to the directory where you want to place the repo (e.g., `/Desktop`).
2. Run:  
   ```
   git clone https://github.com/Dagurf21/T_488_MAPP.git
   ```
3. There should now be a folder called T_488_MAPP. Go into that folder
    ```
   cd T_488_MAPP
   ```
4. Install npm and expo-cli.
    ```
   npm install
   npm install -g expo-cli
    ```

5. Check if everything works by executing the following lines.
    ```
   cd the-toddler
   npx expo start
    ```

6. Go to your browser and open `http://localhost:8081`
---

## Initializing repo

---

## Instructions on how to run the app using Expo

---

## Git: Add, Commit, Push, and Branches

### Initializing a New Branch
When starting work on the source code, always create a new branch before making any changes.

1. **Navigate to the project directory**  
   Open your CLI and go to the project directory: `~/T_488_MAPP`.

2. **Ensure you are up-to-date on the `prod` branch**  
   - **2.1** Check your current branch by running `git branch`. The branch you are on will be indicated with an asterisk (`*`).  
      - **2.1.1** If you are already on the `prod` branch, proceed to step 2.2.  
      - **2.1.2** If you are not on the `prod` branch, switch to it by running:  
        ```
        git checkout prod
        ```
   - **2.2** Update the `prod` branch by pulling the latest changes:  
       ```
       git pull origin prod
       ```

3. **Create a new branch based on the `prod` branch**  
   After updating `prod`, you can create a new branch:  
   - **3.1** Use the following command to create and switch to a new branch:  
     ```
     git checkout -b <new-branch-name>
     ```

Replace `<new-branch-name>` with a descriptive name for your branch, reflecting the work you’ll be doing.

---


### Committing the New Branch to Prod

Once you've completed your work on the new branch and are ready to merge it into `prod`, follow these steps:

1. **Ensure your branch is up-to-date with `prod`**  
   - **1.1** Switch to the `prod` branch:  
       ```
       git checkout prod
       ```  
   - **1.2** Pull the latest changes from `prod`:  
       ```
       git pull origin prod
       ```  
   - **1.3** Switch back to your branch:  
       ```
       git checkout <your-branch-name>
       ```  
   - **1.4** Rebase your branch onto the latest `prod`:  
       ```
       git rebase prod
       ```

2. **Resolve any merge conflicts (if applicable)**  
   If conflicts arise during the rebase, resolve them manually. After resolving conflicts:  
   - **2.1** Mark the conflicts as resolved:  
       ```
       git add <file-with-conflict>
       ```  
   - **2.2** Continue the rebase process:  
       ```
       git rebase --continue
       ```

3. **Commit your changes to `prod`**  
   - **3.1** Switch to the `prod` branch:  
       ```
       git checkout prod
       ```  
   - **3.2** Merge your branch into `prod`:  
       ```
       git merge <your-branch-name>
       ```  
   - **3.3** Push the updated `prod` branch to the remote repository:  
       ```
       git push origin prod
       ```

4. **Clean up your local repository (optional)**  
   - **4.1** Delete your branch locally:  
       ```
       git branch -d <your-branch-name>
       ```  
   - **4.2** Delete your branch from the remote repository (if applicable):  
       ```
       git push origin --delete <your-branch-name>
       ```
       
Replace `<your-branch-name>` with the actual name of your branch throughout the steps.

---

## Create new react native app
```
npx create-expo-app
```
