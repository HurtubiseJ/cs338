John Hurtubise

# Crypto Scenarios

## Scenario 1

In this case we want encrypted communication and AITM is impossible. We are able to use Diffie-Hellman Key exchange by itself. Bob and Alice agree on a p,q together. Each create a private int a and b respectivly and compute their exponentials. Bob sends A = q^(a) mod p and Alice B = q^(b) mod p. Now they can compute a shared secret s = B^a mod p = A^b mod p. We can now use s for simple block sipher encritption such as aes. 

Due to no adversary in the middle any eaves dropper would not be able to efficently compute s. Therefore, the communication is secure. 

## Scenario 2

In this case we want to prevent the ability to modify the message. To acheive this we can use public and private key asymetric encryption. In this case each entity has a public and a private key. We can send messages in the from E(Priv, Message) and decrypt using E(Pub, Message). We now must prevent the ability for Mal to modify the message. In this case we can simply have the message as so m` = E(Priv, H(Message)). We send (m`, m) to Alice and she computes Message = E(Pub, m`)) Alice can now check to make sure that H(m) = E(Pub, m`). If this is true then we know the original message was un-modified by AITM.   

## Scenario 3

Now AITM is possible and we want to prevent Mal from modifying or reading the message. In this case we need to include the idea of public key infrastructure and asymetric encription. After Alice and Bob agree on communication standards Alice sends Bob her certificate provided by a trusted CA, which includes her hashed public key. Bob then checks with the CA to ensure the certificate is legit and sends Alice tests to determine wether or not "Alice" has the private key associated with the public key. If so we know we are talking with the actual Alice. Now Alice and Bob can communicate using using Asymetric encryption of the form E(Secret, Message) to encrypt E(Pub, Message) to decript. We can also now switch to symetric encription for increased speeds if needed. 

This ensure Alice and Bob have a secure communication.   

## Scenario 4

The first plausable way that the contract could have been modified is Alice's private key had been leaked. In this case a third party would bie able to initiate encrypted communication with Bob and could have sent a false contract. It would also be possible for AITM to occur with a leaked Priv key. 

This is feasible. Alice could leak a private key in a number of ways ranging from malpractice to physical infiltration.  

The second way a false contract could be received is through bugs/malware in the TLS or Hash functions used. For the hash function it could be possible that m` and Sig could compute a equal hash. In this cases no alarms would be raised about the modified message. This is more plausible in the malware case were Mal specifically designs behavior of Bob's hash to be wrong. This is under the assumtion Mal gets Malware to Bob's machine. On the other hand it would be very unlikly that a bug caused a equal hash without a critical level bug or highly unlikly chain of events.

In the TLS case a bug could lead to unencrpted communication in a number of areas leading to a modified message. This would be unlikly as thousands of securty engineers would raise alarms about this critcal bug before a court cases about a modified contract.

Lastly, if Mal was able to spoof ceritificates through comprimising a CA she could have seperate communication with Bob and Alice where differing contracts are sent. This is unlikly as CA's follow extreamly stringent practices to ensure certificate integrity. It's also in the best interest of the CA to prevent this from happening. 


## Scenario 5

Sig_CA would be computed by the following. Sig_CA = E(S_CA, H(P_B)), in this case P_B can only be modified if S_CA is leaked. This verifies P_B is real.


## Scenario 6 
Alice would have to send tests to Bob in order to verify that Bob has the private key that is associated with the verified public key. An example of this would be hashing a random number and encryting using the known public key. Bob would then need to send proof that he knows the random number which is only possible by knowing S_B (Bob's secret key).

## Scenario 7

Two ways that the CA system could be undermined would be one: Priv_CA being leaked, and two: valdiating a false certificate. If the private key is leaked then a malicious party would be able to create and modify their own certificates in this case all sites would be vulnerable. Another case would be verifying a fake certificate for say carleton.edu. In this case the CA will verify and send valid certificates to those navigating to carleton.edu. But if the entity behind that certificate is not actually carleton.edu they could get confidential information meant for the actual carleton.edu entity. 

 
