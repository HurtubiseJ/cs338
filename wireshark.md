
# DateTime Answers

## TCP handshake for Datetime

### Question 1
1 Source IP: 192.168.64.2   Dest IP: 128.138.140.44 Protocol: TCP INFO: [SYN]      WIN=64240 SEQ=0 LEN=0
2 Source IP: 128.138.140.44 Dest IP: 192.168.64.2   Protocol: TCP INFO: [SYN, ACK] SRC_PORT=13    SEQ=0
3 Source IP: 192.168.64.2   Dest IP: 128.138.140.44 Protocol: TCP INFO: [ACK]      SRC_PORT=49774 SEQ=1  

### Question 2
The client (or my kali machine) uses port 49774

### Question 3
The client needs a port in order for the server to send information back to the client in the correct location. 

### Question 4
5 Source IP: 128.138.140.44 Dest IP: 192.168.64.2 Protocol: DAYTIME INFO: DAYTIME RESPONSE: 60935 25-09-17...

### Question 5
[SYN] Stands for syncronize and this is one server askeding the dest server if they are able to send packets to them (also give me the information to do this properly)

[ACK] Stands for acknoledge this is the a server acknoleding the sycronization meaning the server is saying yes I can receive packets

### Question 6
The server (Not my linux machine) initated the closing of the TCP connection. We know this because the first
[FIN] packet was sent with a source IP of 128.138.140.44. This is the IP of the DAYTIME server

## HTTP 

### Question 1
In my case 2 TCP connections opened. I can tell this happended by counting the number of TCP 3 way
handshakes which occured. This means the amount of [SYN] [SYN, ACK] [ACK] pairs are present in the 
stream.

## Question 2
You are not able to tell the server directory of where index.html was requested. We are only given 
the relative path from the root of the web application. We can get this information from the request
URI which is /index.html and the host cs338.jeffondich.com. If "where" means the IP of the request then
in this case it is from our linux machine originating from our firefox browser. We can see this from 
the user agent text: Mozilla/5.0 ...

## Question 3 
Most of the above answer applied to jeff-square-colorado.jpg. This image is requested from the root 
directory. (As opposed to maisie-jeff.jgp which is inside the /misc folder). This again was requested
from our own machine by our firefox browser. One thing to note is there is now a refer http header. 
In this case the original index.html request created another request for the jeff-... asset. We can
see this from the Referer: http://cs338... referer key pair. 


# Questions

One question I had is what do the red packets mean? Some of them read "TCP previous segment not received"
or "TCP DUP". I assume these are TCP error messages for duplicate packets and not received packets?
I would like more information on what the mean exactly and how TCP handles these supposive errors. 

Another question would be what is the [PSH] means. It is often found combined with [ACk] ([PSH, ACK])

