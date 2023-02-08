# Git 
> Git is a version control system designed to help users keep track of changes to files within their projects.
## Advantages
* speed
* reliability
* free and open-source 
* accessible syntax

# Github
> GitHub is a Cloud-based hosting service that lets you manage Git repositories from a user interface.
## Major Features:
* Access Control
* Pull Rqquest
* Automation

## Git Workflow
> There are three stations in git workflow

`Modify` *-- git add -->* `Commit/Stage` *-- git commit -->* `Committed`


`git status`: check for any update or modifications in the local machine.
`git add <filename>`: add the file to the commit
`git restore --stage <filename>`: restored added file from commit.
`git log --merge`: show the merge log
`git log -p <commit-id>`:details in the given commit id.
`git diff`: show the difference between the pushed contents.
`git blame <filename>`: show the date, time, and author of changes made.
`git blame -L 5, 15 <filename>`: return details from line no. 5 to 15.
*The order in which the change information will display in each line as follows: < ID><Author><Date><Time><Line number><Content>  *

## Branches
`git checkout -B <branch>`: make a new branch and switch to it directly
`git branch <branch>`: make a new branch

*When you create a pull request you are asking the other developers to review your work and approve it to be merged with the repository.*.

*When you use Git Push, Git compares a snapshot of your local repository with the remote one and only replaces the files that have been changed.*

*Whenever a change occurs for a commit, the single hashed ID will update to be the latest commit for that working directory.*
