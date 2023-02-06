# Basic Bash Commands
| Command | Used for|
| ------- | -------| 
| cd      | Change Directory |
| ls    | List command used for showing the content of a directory. |
| rm      | Remove command used for removing a file or a directory |
| mv      | Used to move files or folders to another location |
| touch   | Allows creating of a new empty file or to upate a timestamp on a file|
| cp      | Used to make a copy of a file or foldler |
| mkdir   | Make a new directory |
| pwd     | Print work directory, shows the current location in the shell|
| cat   | Allows reading or concatenation of a file |
| less  | Displays the contents of a file one page at a time. |
| grep  | Global regular expression, allows for searching contents of files or folders |


# Pipes
> When working with the command line, you can use pipes to combine commands together. Pipes allows to pass the output of one command as the input of another command.
```bash
ls | wc -w
cat file.txt | wc -w
```

# Redirection
> there are three types of redirections.
* **Standard Input**: The standard input redirection gives you the option to record your input and save it to a file either by overwriting or appending the file. It is represented by `<` and its code is `0`.
```bash
cat > text.txt
## this is a sadh dash dash
cat < text.txt
## returns the content
```
* **Standard Output**: The redirection standard output allow you to control where the output goes. It is represented by `>` and its code is `1`.
```bash
ls -l > output.txt
```
* **Standard Error**: The standard error redirect allows you to specify that the error should be written to a file. It is represented by `2>` and its code is `2`.
```bash
ls -l 2> error.txt
ls -l 2> output_error.txt 2>&1
```