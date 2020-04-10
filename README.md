NAME OF APP: Toddler
LINK TO LIVE APP: https://toddler.now.sh/
CLIENT REPO: https://github.com/lfranckx/ratemybaby-client
API REPO: https://github.com/lfranckx/ratemybaby-api

SUMMARY:
This is an App built to hopefully give people an avenue of entertainment and creativity.  The idea behind the app is Tinder, but for babies.  The user can upload a picture of their kid or however many children they have and create profiles for the world to rate. 

<img width="785" alt="Screen Shot 2020-04-10 at 12 47 40 PM" src="https://user-images.githubusercontent.com/52330544/79020062-ad084800-7b2c-11ea-81b1-f44318351a6c.png">
<img width="822" alt="Screen Shot 2020-04-10 at 12 49 05 PM" src="https://user-images.githubusercontent.com/52330544/79020076-b5608300-7b2c-11ea-9be6-eee723b14223.png">
<img width="809" alt="Screen Shot 2020-04-10 at 12 49 29 PM" src="https://user-images.githubusercontent.com/52330544/79020087-bd202780-7b2c-11ea-85f5-f9f574735bbd.png">
<img width="821" alt="Screen Shot 2020-04-10 at 12 49 57 PM" src="https://user-images.githubusercontent.com/52330544/79020096-c3ae9f00-7b2c-11ea-866f-bc1c9a8fd16a.png">


Technologies:
This app uses AWS S3 Buckets to upload and store images.  This is all in conjuction with Heroku where the server is deployed. The app is built with React and Node.js.  The API uses JWT authentication with for logging users in and bcrypt to to crypt passwords.  The server also uses multer in order to communicate with the S3 bucket. 