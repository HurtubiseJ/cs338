John Hurtubise

# Crypto Scenarios

## Scenario 1

In this case we want encrypted communication and AITM is impossible. We are able to use Diffie-Hellman Key exchange by itself. Bob and Alice agree on a p,q together. Each create a private int a and b respectivly and compute their exponentials. Bob sends A = q^(a) mod p and Alice B = q^(b) mod p. Now they can compute a shared secret s = B^a mod p = A^b mod p. We can now use s for simple block sipher encritption such as aes. 

Due to no adversary in the middle any eaves dropper would not be able to efficently compute s. Therefore, the communication is secure. 

## Scenario 2

In this case we want to prevent the ability to modify the message. To acheive this we can use public and private key asymetric encryption. In this case each entity has a public and a private key. We can send messages in the from E(Priv, Message) and decrypt using E(Pub, Message). We now must prevent the ability for Mal to modify the message. In this case we can simply  

## Scenario 3

Now AITM is possible and we want to prevent Mal from modifying or reading the message. In this case we need to include the idea of public key infrastructure and asymetric encription. After Alice and Bob agree on communication standards Alice sends Bob her certificate provided by a trusted CA, which includes her hashed public key. Bob then checks with the CA to ensure the certificate is legit and sends Alice tests to determine wether or not "Alice" has the private key associated with the public key. If so we know we are talking with the actual Alice. Now Alice and Bob can communicate using using Asymetric encryption of the form E(Secret, Message) to encrypt E(Pub, Message) to decript. We can also now switch to symetric encription for increased speeds if needed. 

This ensure Alice and Bob have a secure communication.   
