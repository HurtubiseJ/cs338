Author: John Hurtubise

# Bandit0
For this game it tests the use of the 'ls' and 'cat' commands.
To solve, ssh into banit0, ls (or ls -la) to find find the readme
file. Then use the cat command on the readme file $cat readme to find the key. 

Key: ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If

# Bandit1
This tests understanding of special characters in file names. 
In order to solve the puzzle you need to use run $cat ./- this is
because - is a special chacter and will not work with specifying it's path. 

Key: 263JGJPfgU6LtdEvgfWU1XP5yac29mFx

# Bandit2
This tests understanding of accessing files with spaces. 
To pass this test you need to surround the file with quotes.
Run $ cat ./"--spaces in this filename--" this will make the file
charaters be interpreted correctly. 

Key: MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx

# bandit3
This tests knowledge of cd and ls flags. After cd-ing into the folder
you now need to use ls -la (list list all) to see the hidden file.Once found you can cat the file contentent to get the key. 
Steps: $ cd inhere $ ls -la $ cat "...Hiding-From-You"

Key: 2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ

# Bandit4 
For this you need to understand how the terminal outputs unknown bytes. 
In this case '?' and '?' in a box signal unknown. You then follow 
the same steps as previous puzzles and cat the contents of each 
file untill a readable code is found. Also using the up key here 
speeds things up.

Key: 4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw

# bandit5
This tests knowledge of the find command. In this case we can 
use the command $ find . -type f -size 1033c What this means
if find something from the current dir . which is of type file 
with the size of 1033 bytes (c).

Key: HWasnPhtq9AVKe0dmk45nxy20cvUa6EG

# bandit6
For this challange you use the same find command with the -user flag.
The user flag can be added to find files owned but a given user. 
To find the flag you first need to cd into higher level dirs, in
this case the root dir. Once there run $ find -user bandit7. After
sifting through many permission denied logs you will find a folder
under ./var which contains the password. cat this file. 

Key: morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj

# bandit7
This game test knowlege of the grep command. To solve this problem
I used grep with the --after-context flag. To solve run 
$ grep --after-context=1 millionth data.txt (Search for millionth
in data.txt and provide one line of context on match)

Key: dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc

# bandit8
This game test knowlege of sort, grep and piping. To solve this
you must first sort the contents of the file. This is nessesary
as the uniq function only detects repeating lines if they are 
next to each other (This info is found in man uniq). Once you sort
the contents of data.txt you then want to run the uniq function 
with the -u flag to only print the uniqe lines. To solve run
$ sort data.txt | uniq -u 
The piping operator is used to run the output of sort as the input
of uniq. 

Key: 4CKMh1JI91bUIZZPXDqGanal4xvAg0JM

# bandit9
The goal of this game is the use of the string command. This prints
all strings present within the file. To solve run $ strings data.txt. 
If needed you can pipe to the grep function on === to sort the ouput. 
Although it is easy to find the string with the given command

Key: FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey

# bandit10
This game tests the use of base64 command. Using the man pages
you can find that the -d flag decodes base64 bytes. With this 
information run $ base64 -d data.txt and the code will be found. 

Key: dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr

# bandit11
This game requires the use of the tr command. Reading the man page
you can find the tr <str> <str2> replaces str1 with str2. Using this
we can go to the wiki page on the rot13 to find the conversion strings. Specificially: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz => NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm 
When can the run the command $ tr ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
 NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm < data.txt
This will then print our key. 

Key: 7k16JArUVv5LxVuJfsSVdbbtcHGlw9D4
