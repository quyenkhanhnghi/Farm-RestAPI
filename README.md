
# Project REST_API Farm

Description: This project aims to build a REST API using Node.js and how to use Slugify to create user-friendly URLs. A RESTful API is a popular approach to building web services that use HTTP requests to perform operations on data. By building a REST API with Node.js, I can create a scalable and efficient backend for web applications.

In this project, I will cover the following topics:

- Setting up a Node.js project and installing necessary packages
- Introduction to RESTful API
- Designing and implementing the REST API with Node.js
- Understanding HTTP methods and endpoints
- Using Slugify to create pretty URLs for the REST API
- Styling the API documentation with HTML and CSS - based on Jonas Schmedtmann's project


## API Reference

#### Get all products

```http
  GET/overview or GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `overview` | `string` | **Required**.             |

#### Get product

```http
  GET /product/${Slugify-name-product}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Slugify-name-product`      | `string` | **Required**. Slugify of name's product to fetch    |

## Demo
