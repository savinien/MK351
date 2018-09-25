# Crash course on git and github

0. [Setup](#gitsetup)
1. [git basics](#gitbas)
2. [atom interface](#gitatom)

Main reference [git documentation](https://git-scm.com/doc).

<a name="gitsetup"></a>
## 0. Setup

Install [git](https://git-scm.com/downloads).

Create a free account on [github](http://github.com). If you'd like it, you can afterwards apply for the [student developper pack](https://education.github.com/pack).

At the command line clone the class repo: `git clone https://github.com/savinien/MK351.git`, or `git clone https://github.com/savinien/MK351.git name_of_your_repertory` where `name_of_your_repertory` is the name of the repertory you'd like to store the class repo.


<a name="gitbas"></a>
## 1. git basics

**Git** is a version-control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source-code management in software development, but it can be used to keep track of changes in any set of files.

**Github** is is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features.

Git is universally used to you work on a project with your collaborators, saving your code in a remote server, typically on github.
The main project on github, at the current development version, is typically called the **master branch**. Collaborators typically work on **branches** to develop specific parts of the project without modifying the whole project, and **merge** their branches to the master branch once they've completed their work.

When you start working on your machine, you first **initialize** git in your working repertory or **clone** a github repo to copy it down to your working repertory (which initializes git on it). When you are working on your project, you **pull** the project from github to get its latest state of development, work on your branch on your machine, **pull** your work back to github, and eventually **merge** your branch to the master branch when you are done.

These steps can be done as follows:
- **initialize** git in a repertory on your machine: `git init`
- **clone** a github repo (which initializes git on it): `git clone https://github.com/githubUserId/project.git`. This will create a folder "project" in your working repertory with the remote github project in it. To store the github project into a folder with a different name: `git clone https://github.com/githubUserId/project.git folder_with_different_name`
- **pull** from github: `git pull`
- **stage** changes to your local files: `git add my_modified_file`. To stage all files in your repertory: `git add -A`
- **commit** your changes: `git commit -m "message"` where your leave a precise and concise `message` about what you did. A commit is like a snapshot of your project at a specific time of development.
- **push** your work back to github: `git push`

Git offers much more than these basic operations. Commits and especially pushs have to be *carefully coordinated* with your collaborators to avoid conflicts...

Github offers a user friendly interface to git, where you can see very easily differences of your versions from commit to commit, visualize the branches, see who contributed to what, and so on.

<a name="gitatom"></a>
## 1. atom interface

Most of the git operations described above can be done within the atom code editor: click on the bottom right icon which displays the number of files currently modified, and you'll toggle a git tab (or go to `View/Toggle Git Tab`).
