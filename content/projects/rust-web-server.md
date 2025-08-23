---
title: Multi-threaded HTTP Server (Rust)
summary: A modular, multi-threaded HTTP server built in Rust, supporting static file serving, multiple HTTP methods, and robust error handling. This project explores systems programming, concurrency, and HTTP protocol implementation from scratch.
image: /images/projects/rust-web-server/web-server-thumbnail.png
author: 'Tarun Jeevan'
publishedAt: '2025-07-03'
tags: ['Rust', 'Concurrency', 'Web Dev']
---
![Rust HTTP Server Thumbnail](/images/projects/rust-web-server/web-server-thumbnail.png)

## **Project Overview**
The **Multi-Threaded HTTP Server** is a personal project designed to deepen my understanding of systems programming, HTTP protocol internals, and Rust's concurrency model. I started it as part of the Final Project in the [Rust Programming Language Book](https://doc.rust-lang.org/stable/book/ch21-00-final-project-a-web-server.html) and then continued to build on it to futher my understanding of server design, HTTP protocols, and concurrency. Built from scratch without external web frameworks, this server demonstrates how to handle HTTP requests, serve static files, manage multiple connections concurrently, and implement robust error handling—all using Rust's type system and module organization.

- **Development Period**: May 2025 - July 2025
- **GitHub Reponsitory**: [Rust Journey Repo](https://github.com/tarunJeevan/rust-journey)

## **Project Objectives**
The main goal was to build a modular HTTP server that:
- Handles multiple simultaneous connections using a custom thread pool.
- Parses and responds to HTTP requests for various methods (GET, POST, PUT, DELETE, OPTIONS).
- Serves static files and custom error pages.
- Demonstrates idiomatic Rust code organization and defensive programming.

## **Project Structure**
I started with just `main.rs` and `lib.rs` files but eventually split my codebase into multiple files organized for clarity and modularity, following Rust&apos;s idiomatic module system (shown below).

```
9-web_server/
├── Cargo.toml
├── public/
│   ├── index.html
│   ├── test-methods.html
│   └── error/
│       ├── 404.html
│       ├── 405.html
│       └── 500.html
└── src/
    ├── main.rs
    ├── lib.rs
    ├── models.rs
    ├── utils.rs
    ├── models/
    │   ├── http.rs
    │   ├── request.rs
    │   ├── response.rs
    │   └── thread_pool.rs
    └── utils/
        ├── parsing.rs
        └── routing.rs
```
- **public/**: Static files served by the server, including the default index page, error pages, and a test page for HTTP methods.
- **src/models/**: Core data structures (Request and Response structs, HTTP enums, and a thread pool struct).
- **src/utils/**: Parsing and routing logic.
- **main.rs**: Entry point that sets up the TCP Listener and thread pool.

## **Key Features and Functionality**
### **Multi-Threaded Request Handling**
A custom `ThreadPool` struct manages a pool of worker threads, allowing the server to handle multiple incoming connections concurrently for improved throughput and responsiveness.

### **HTTP Parsing and Routing**
- **Request Parsing**: Reads the request line, headers, and body from the TCP stream, parsing them into a `Request` struct.
- **Routing**: The `route()` function dispatches requests to handler functions based on the HTTP method (GET, POST, PUT, DELETE, OPTIONS).

### **Serving Static Files**
The server serves files from the `public/` directory. If a requested file is missing, it serves a custom error page (e.g., 404.html).

### **Handling Multiple HTTP Methods**
- **GET**: Serves static files. 
- **POST**: Processes form data and writes results to a file, then redirects or responds. 
- **PUT**: Creates or overwrites files. 
- **DELETE**: Deletes files. 
- **OPTIONS**: Returns allowed methods in the `Allow` header. 

### **Custom Error Handling**
Custom error pages for 404, 405, and 500 errors are served directly, with appropriate status codes and headers.

## **Implementation Highlights**
### **Request and Response Structs**
The `Request` and `Response` structs encapsulate all relevant data for HTTP transactions. 

```rs
// models/request.rs
pub struct Request {
    protocol: String,
    method: HttpMethod,
    resource: PathBuf,
    queries: HashMap<String, String>,
    headers: HashMap<String, String>,
    body: Vec<u8>,
}
```

```rs
// models/response.rs
pub struct Response {
    protocol: String,
    status_code: Option<usize>,
    description: Option<String>,
    headers: HashMap<String, String>,
    body: Option<String>,
}
```

### **Routing and Handlers**
The `route()` function in `routing.rs` matches the HTTP method and delegates to the appropriate handler. Each handler constructs a Response object, setting status codes, headers, and body as needed.

For example, the `get()` handler serves files or error pages:
```rs
fn get(req: Request) -> Response {
    let mut res = Response::default();
    res.add_header(set_date_header());
    let path = req.get_resource();

    if path.exists() {
        let contents = read_file(path.to_str().unwrap_or("error"));
        res.set_status(200);
        if let Some(content) = &contents {
            res.add_header(get_content_type(path));
            res.add_header(("Content-Length".to_owned(), content.len().to_string()));
        }
        res.set_body(contents);
    } else {
        let contents = read_file("public/error/404.html");
        res.set_status(404);
        if let Some(content) = &contents {
            res.add_header(get_content_type(Path::new("public/error/404.html")));
            res.add_header(("Content-Length".to_owned(), content.len().to_string()));
        }
        res.set_body(contents);
    }
    res
}
```

### **Testing with HTML and JavaScript**
The `test-methods.html` page provides forms and buttons for sending POST, PUT, and DELETE requests using JavaScript&apos;s `fetch()` API, enabling interactive testing of the server&apos;s endpoints.

```js
function sendDelete(event) {
    event.preventDefault();
    const form = document.getElementById("delete-test-form");
    const filename = form.elements.filename.value;

    fetch(`/${filename}.html`, {
        method: "DELETE"
    })
    .then(response => {
        if (response.status === 204) {
            alert("File deleted successfully.");
        } else {
            return response.text().then(data => {
                alert("Error:\n" + data);
            });
        }
    })
    .catch(err => alert("DELETE error: " + err));
}
```

## **Challenges and Solutions**
1. **Handling Different Content-Types**: Supporting various `Content-Type` values for POST/PUT requests (form data, JSON, plain text) required parsing logic in the handler functions. Future enhancements include using `serde_json` for JSON and supporting file uploads.
2. **Modularization and Maintainability**: As the server grew, logic was split into modules for data structures, parsing, and routing, improving readability and extensibility.
3. **Testing and Debugging**: Manual testing with HTML/JS and debugging with LLDB helped identify issues like request parsing edge cases and URL formatting.

## **Lessons Learned**
- **Benefits of Modularity**: Separating concerns into modules and files makes the codebase easier to extend and maintain.
- **Defensive Programming**: Always handle malformed input gracefully.
- **Importance of Varied Testing Methods**: Manual testing with HTML/JS is quick, but automated tests (e.g., with `reqwest`) are recommended for robustness.
- **HTTP Standards**: Various HTTP standards such as use-cases for different HTTP codes, using redirects for post-success or similar flows, not for errors, key headers for different response types, etc.

## **Future Development Plans**
- Add support for persistent connections (keep-alive).
- Expand `post()` handler to handle more `Content-Types`.
- Implement logging middleware.
- Add HTTPS support.
- Expand to async I/O with `tokio` for even better scalability.
- Add more comprehensive automated tests.

## **Conclusion**
Building this HTTP server from scratch in Rust has been a rewarding journey into systems programming, concurrency, and protocol design. The project demonstrates how to structure a modular, multi-threaded server with robust error handling and extensible features, providing a solid foundation for further experimentation and learning.

For a closer look at the codebase and implementation details, visit the [GitHub Repository](https://github.com/tarunJeevan/rust-journey).