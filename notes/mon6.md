Monday Oct, 6th

# What to know for exam:

- Base64
- Maybe to encode, take each 3-byte chunck and turn it into 4 6-bit chunks
- Notes
- labs
- readings

- Symmetric encryption
	- Key, plaintext, ciphertext
	- Be aware of the AES competition
	- Block ciphers and modes : chiper block chaining, eltrectronic code book. 
	...
	- Name a few block ciphers: AES, DES, TripleDES, TwoFish

- DIffie-Hellman key exchange
	- Whats the porpous
	- Steps, what do alice and bob do in what order
	- Why eve will fail
	- What happens in an advisary in the middle 

- RSA

-Public-key/asymmetric encryption
	- Notation E(P, M) or E(S, M) for message M
	- Replationship between E, P, S
	- How can a person use E and S to sign something **

- TCP

- HTTP

- TLS

- HTTPS

- Cryptographic hashes

- base64

- ASN.1, DER, PEM


# TLS from ALICE perspective

1) After TCP handshake, it starts with client hello. TLS PACKET 1

2) Alice and bob do a Diffie-Hellman --> Shared secret s

3) Alice convert s to AES key K

4) Bob sends alice certificate: "Bob uses RSA public key"

5) Alice checks to make sure a trusted thrird party has signed the certificate. 
	- Certificate is legit (Bob uses this public key) BUT we don't know if this is the real bob yet. (Does "Bob" have access to real Bob's private key)

6) Alice sends "Bob" a challenge" to verify Bobs secret (Packet one also contains random int for this challenge)
 
7) Challenge passed? Then Alice belives Bob is real and can now communicate ecrpyting with AES key K  

Note: Moving aways from RSA due to needing really long keys.


## First Packet, client hello

Random integer for Priv verification, Cipher agreement, Diffie-Hellman integers. 

### Second Packet, server Hello

Another random int if client needs verification, One cipher suite (the agreement), cont on Diffie-Hellmanl




# What is MAC? 

	MAC(K, M) => Fixed-length digest (Similar to a hash function) 
k = Shared secret key, M = message

	Sig(S , M) => Fixed-length digest
S = secret of sender/signer, M = message
P = public key of signer which is publicly available

Say Alice sends Bob, What can bob conclude?
	(Bob Validates both Sig and MAC
	D || MAC(K  , D)   -> Bob can recompute MAC(K, D) and check received MAC(K, D) to ensure they are equal.  
	D || Sig(S_a, D) -> Bob can decrypt Sig with E(P_a, Sig(S_a, D)) == H(D)? (Assuming Sig(S_a, D) = E(S_a, H(D)))

Suppose Bob has vailidated both, what can Bob conclude about the sender?
	D || MAC(K  , D)   => Sender has K
		Suppose Bob believes only Alice has K (Then sender is Alice and Mal hasn't modified D)
	D || Sig(S_a, D)   => Sender has S_a
		Suppose Bob belives only Alice has S_a (Then sender is Alice and Mal hasn't modified D)

























