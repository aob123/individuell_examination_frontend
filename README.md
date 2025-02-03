# Encrypt / Decrypt API - Frontend

This is a simple frontend that allows users to communicate with an API hosted on **AWS Elastic Beanstalk**.

## Website  

➡️ [Visit the Encrypt / Decrypt API Frontend](http://aob123.wuaze.com/)

## API Endpoints  

The API provides two endpoints for encryption and decryption:  

- **Encrypt:** `GET /encrypt/{string}`  
- **Decrypt:** `GET /decrypt/{string}`  

### How It Works  

- Sending a request to `/encrypt/{string}` returns an encrypted version of `{string}` using the **Caesar cipher** with a fixed key of **5**.  
- Similarly, sending a request to `/decrypt/{string}` reverses the encryption and returns the original string.  
- Learn more about the **Caesar cipher** [here](https://en.wikipedia.org/wiki/Caesar_cipher).  

## API Repository  

The backend API for this project is available here:  
➡️ [Encrypt / Decrypt API](https://github.com/aob123/individuell_examination_cicd)  

## License  

This project is open-source and available under the **MIT License**.  