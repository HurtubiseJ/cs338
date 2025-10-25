John Hurtubise

# COOKIES

## A.
Going to cs338.jeffondich.com/fdf/ and navigating to the cookies in the inspector, we can see one cookie. This cookie is named "Theme" with a inital value of "default", the domain has a value of "cs338.jeffondich.com". Simply reloading the page does not modify this value.

## B. 
After using the theme menu the value of the cookie changes to the user selection from the menu. For example clicking "red" in the menu sets the cookie value to "red". 

## C.
When setting the theme the HTTP packet contains the header "Cookie: theme=default". When setting the theme to "red". Then, the server responds with a HTTP packet. It contains the header "Set-Cookie: theme=red; Expiers=Thu, 22 Jan 2026 22:04:35 GMT; Path=/"
Yes; The Cookie header sent initally its the exisiting value of the cookie in inspect element. The value being set is sent in the URL of the HTTP request. Then, the server sends the set-cookie header. Once the browser recieves this the value of the cookie in inspect is changed to the value in the set-cookie header.

## D.
Yes. The theme remains as the value I last selected. This is due to the cookie storing this information for future use between sessions.

## E. 
The current theme is sent to the server via the cookie header in each HTTP request. This ensures the server responds with the correct theme. 

## F.
The theme is set using query parameters in the URL "?theme=<value_of_theme>". This tells the server to responsed with a set-cookie header with the value of the theme query in the received URL. 

## G.
You can go to inspect element => application => cookies and find the theme cookie. You are then able change the value of the theme cookie to a different color without using the theme dropdown.

## H.
You would intercept a HTTP request from client to server. Then, modify the request URL to include the ?theme=<color> URL param. Another option in to modify the cookie being sent in the request to your desired color choice. 

## I.
This is stored in Googles application library under Chrome. There is then a cookies folder which contains a sqllite db which stores cookie information for every site.

# CROSS-SITE SCRIPTING (XSS)

## A. 
The three types of attacks are Stored XSS, Reflected XSS, and DOM-based XSS. The site I found this information is here: https://www.acunetix.com/websitesecurity/xss/ 

## B.
For Moritary's attack after clicking the post, you can see some of the text in the post body is red. This is done by adding a <span> tag with the color red. To achieve this Moritary first created a post and included the span text in the middle of the content. This is then stored on the servers database. Then, when a user clicks this post the content is sent to the client with the span tag included in the post body. When the browser is rendering the pages content, the <span> tag is interpreted as a HTTP element. This then displays the text as red to the user. 

For his second post the same method is used. This time the <script> element is used. In this case instead of changing rendering the content in the <script> tag is executed by the clients browser. In this case it causes a popup to appear. 

This type of XSS attack is a Stored XSS attack. The malicous script is stored in the content of the post on the server. Then when a user requests that content, the malicious code is sent to the client where it is executed. 

## C. 
A more malicious action the Moriarty could have done is scrape all the cookies on the browser for same domain. In our case the cookies are not sensitive (just a theme color). But there are cases on other sites where sensitive information such as session details or payment details is stored. In this case the malicious code could then get these cookie values and use them to cause damage.

## D.
Another attack would be injecting your own HTML/Page. There could be a case were instead of going to a real payment screen malicious JS modifys the HTML to display a decoy payment screen. If done well the user would be unaware they are inputting payment information to a alternate and unknown source. 

## E. 
First would be input sanitization. This means that all HTML tags such as <script> or <span> are stripped before storage on the DB. This would mean such code is not executed when sent to a client.  


