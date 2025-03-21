# **Slack Webhook Handler**

## 📌 **Overview**

This project is a webhook handler for Slack’s URL verification process. It accepts POST requests and responds with the challenge value if it contains type = url_verification.

## 🛠 **Tech Stack**

- **Node.js**
- **Express.js**

## 🚀 **How It Works**

1. The webhook receives a **POST** request with a **JSON payload**.
2. If the request contains `{ "type": "url_verification" }`, it extracts the **challenge** value.
3. The server responds with `{ "challenge": "<received_value>" }`.

## 📡 **Deployment Steps**

This webhook is deployed using **Railway.app**, a cloud-based platform for easily hosting Node.js applications. The application is configured to listen for incoming Slack event requests on a public URL. 

## 🔗 **Webhook Public URL**

Deployed webhook URL:  
```sh
https://slack-webhook-production-1ea0.up.railway.app/
```

## 🧪 **Testing the Webhook**

### **Using curl**

```sh
curl -X POST -H "Content-Type: application/json" -d '{"type": "url_verification", "challenge": "test-challenge-value"}' https://slack-webhook-production-1ea0.up.railway.app/slack-webhook
```

Expected Response:
```sh
{
  "challenge": "test-challenge-value"
}
```
### **Using Postman**

Open Postman and create a new **POST request.**

Set the **request URL** to: 
```sh
https://slack-webhook-production-1ea0.up.railway.app/slack-webhook
```
Go to the Body tab and choose raw, then select **JSON format.**

**Enter the following JSON:**
```sh
{
   "type": "url_verification",
   "challenge": "test-challenge-value"
}
```
Click **Send**, and the response should return:
```sh
{
   "challenge": "test-challenge-value"
}
```

