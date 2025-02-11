# vegapp
A minimalist applicaton for easing the tasks of vegetable businesses.

# API Documentation

## Overview
This document provides an overview of the API endpoints available in the VegetableShop application. The API is organized into several routes, each handling different aspects of the application such as user management, admin operations, and order processing.

Api docs

## Authentication
### Admin Login
- **URL:** `/auth`
- **Method:** `POST`
- **Description:** Authenticates an admin user.
- **Request Body:**
    ```json
    {
        "username": "admin",
        "password": "password"
    }
    ```
- **Response:**
    - `200 OK` on successful authentication.
    - `403 Forbidden` on failed authentication.

## User Routes
### Create User
- **URL:** `/user/create`
- **Method:** `POST`
- **Description:** Creates a new user.
- **Request Body:**
    ```json
    {
        "username": "user",
        "email": "user@example.com",
        "password": "password"
    }
    ```
- **Response:**
    - `201 Created` on successful user creation.
    - `500 Internal Server Error` on failure.

### User Login
- **URL:** `/user/auth`
- **Method:** `POST`
- **Description:** Authenticates a user.
- **Request Body:**
    ```json
    {
        "username": "user",
        "password": "password"
    }
    ```
- **Response:**
    - `200 OK` on successful authentication.
    - `403 Forbidden` on failed authentication.

### Delete User
- **URL:** `/user/delete`
- **Method:** `GET`
- **Description:** Deletes a user.
- **Query Parameters:**
    - `id` (string): The ID of the user to delete.
- **Response:**
    - `200 OK` on successful deletion.
    - `500 Internal Server Error` on failure.

### Logout User
- **URL:** `/user/logout`
- **Method:** `GET`
- **Description:** Logs out the current user.
- **Response:**
    - `200 OK` on successful logout.
    - `500 Internal Server Error` on failure.

### Create Order
- **URL:** `/user/order`
- **Method:** `POST`
- **Description:** Creates a new order.
- **Request Body:** Order details.
- **Response:**
    - `201 Created` on successful order creation.
    - `500 Internal Server Error` on failure.

### Cancel Order
- **URL:** `/user/cancelOrder`
- **Method:** `GET`
- **Description:** Cancels an order.
- **Query Parameters:**
    - `orderId` (string): The ID of the order to cancel.
- **Response:**
    - `200 OK` on successful cancellation.
    - `500 Internal Server Error` on failure.

### Test Endpoint
- **URL:** `/user/test`
- **Method:** `GET`
- **Description:** Test endpoint to check user authentication status.
- **Response:**
    - `200 OK` with user details and authentication status.

## Admin Routes
### Create Admin
- **URL:** `/admin/cSUAD`
- **Method:** `POST`
- **Description:** Creates a new admin user.
- **Request Body:** Admin details.
- **Response:**
    - `201 Created` on successful admin creation.
    - `500 Internal Server Error` on failure.

### Get Orders
- **URL:** `/admin/orders`
- **Method:** `GET`
- **Description:** Retrieves all orders.
- **Response:**
    - `200 OK` with order details.
    - `500 Internal Server Error` on failure.

### Admin Dashboard
- **URL:** `/admin/dashboard`
- **Method:** `GET`
- **Description:** Retrieves admin dashboard data.
- **Response:**
    - `200 OK` with dashboard data.
    - `500 Internal Server Error` on failure.

### Logout Admin
- **URL:** `/admin/logout`
- **Method:** `GET`
- **Description:** Logs out the current admin.
- **Response:**
    - `200 OK` on successful logout.
    - `500 Internal Server Error` on failure.

### Delete Admin
- **URL:** `/admin/delete`
- **Method:** `GET`
- **Description:** Deletes an admin user.
- **Query Parameters:**
    - `id` (string): The ID of the admin to delete.
- **Response:**
    - `200 OK` on successful deletion.
    - `500 Internal Server Error` on failure.

### Upload Product
- **URL:** `/admin/uploadProduct`
- **Method:** `POST`
- **Description:** Uploads a new product.
- **Request Body:** Product details and image file.
- **Response:**
    - `201 Created` on successful product upload.
    - `500 Internal Server Error` on failure.

### Update Product
- **URL:** `/admin/updateProduct`
- **Method:** `POST`
- **Description:** Updates an existing product.
- **Request Body:** Updated product details.
- **Response:**
    - `200 OK` on successful product update.
    - `500 Internal Server Error` on failure.

## Home Routes
### User Login
- **URL:** `/home/auth`
- **Method:** `POST`
- **Description:** Authenticates a user.
- **Request Body:**
    ```json
    {
        "username": "user",
        "password": "password"
    }
    ```
- **Response:**
    - `200 OK` on successful authentication.
    - `403 Forbidden` on failed authentication.

## Conclusion
This document provides a comprehensive overview of the API endpoints available in the VegetableShop application. Each endpoint is described with its URL, method, description, request body, and response details.
