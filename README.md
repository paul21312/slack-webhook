# **Slack Webhook Handler**

## 📌 **Overview**

This project is a webhook handler for Slack’s URL verification process. It accepts POST requests and responds with the challenge value if it contains type = url_verification.

## 🛠 **Tech Stack**

- **Node.js**
- **Express.js**

## 🚀 **How It Works**

The webhook receives a **POST** request with a **JSON payload.**

If the request contains { "type": "url_verification" }, it extracts the **challenge** value.

The server responds with { "challenge": "<received_value>" }.

## 📡 **Deployment Steps**

**Clone the repository**
```sh
  mkdir stlack-webhook
  
  cd slack-webhook
  
  git clone <link>
```
**Install dependencies:**
```sh
npm install express body-parser
```

**Run the server:**
```sh
npm start
```

## 🧪 **Testing the Webhook**

### **Using curl**

```sh
curl -X POST -H "Content-Type: application/json" -d '{"type": "url_verification", "challenge": "test-challenge-value"}' <your-ngrok-or-server-url>/slack-webhook
```

Expected Response:
```sh
{
  "challenge": "test-challenge-value"
}
```
### **Using Postman**

Open Postman and create a new **POST request.**

Set the **request URL** to **<your-ngrok-or-server-url>/slack-webhook.**

Go to the Body tab and choose raw, then select **JSON format.**

**Enter the following JSON:**
```sh
{
   "type": "url_verification",
   "challenge": "test-challenge-value"
}
```
Click Send, and the response should return:
```sh
{
   "challenge": "test-challenge-value"
}
```

