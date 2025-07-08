---
title: Developer Journey Part 4 - Rust
summary: Part 4 of my journey in learning Rust. This post covers my introduction to Rust topics such as smart pointers, concurrency and parallelism, Object-Oriented programming in Rust, and other advanced features and functionality. All of this culminated in the final project of the Rust Programming Language book - a multi-threaded web server - which I then extended with additions of my own. 
author: 'Tarun Jeevan'
publishedAt: '2025-07-06'
tags: ['Dev Journal', 'Rust']
---

## **What I Learned**
As I continued my Rust journey, I dove into some of the language&apos;s most powerful features: smart pointers, concurrency, parallelism, and Rust&apos;s unique take on object-oriented programming. This phase of learning was both challenging and rewarding, pushing me to think differently about systems programming and safe concurrency.

### **Smart Pointers**
Rust&apos;s ownership and borrowing system is already unique, but smart pointers like `Box`, `Rc`, and `RefCell` take things to another level. I learned how to use these types to manage heap allocation, shared ownership, and interior mutability. Understanding when and why to use each pointer type was crucial, especially as my projects grew in complexity.

### **Concurrency and Parallelism**
One of the highlights of this phase was learning how Rust enables safe concurrency, or 'fearless concurrency' as Rust calls it. I explored threads, channels, and the `Send` and `Sync` traits. Rust&apos;s compiler checks made it much harder to write code with data races or undefined behavior, which gave me confidence to experiment with multi-threaded designs.

#### **Threads and Thread Pools**
I started with basic thread spawning using `std::thread`, then moved on to building a custom thread pool as part of my final project. Implementing a thread pool from scratch helped me understand how to manage worker threads, distribute tasks, and gracefully shut down the pool. This was a major step up from the single-threaded CLI tools and games I&apos;d built previously.

#### **Asynchronous Programming**
While my main focus was on threads and synchronous concurrency, I also got a taste of async programming in Rust. I learned about the `async`/`await` syntax and how crates like `tokio` can be used for scalable, non-blocking I/O. I plan to explore this further in future projects.

### **Object-Oriented Programming**
Rust doesn&apos;t have traditional object-oriented features such as classes, interfaces, and inheritance, but it offers traits and struct composition to achieve polymorphism and code reuse. I practiced designing modular code using traits, and learned how to use enums and pattern matching for state management—especially useful in larger projects like my snake game and web server.

## **Final Project**
To put all these concepts into practice, I built a **multi-threaded HTTP server** from scratch as the final project in the [Rust Programming Language Book](https://doc.rust-lang.org/stable/book/ch21-00-final-project-a-web-server.html). I didn&apos;t stop at the book&apos;s version though — I extended it with new features, modularized the codebase, and experimented with real-world HTTP handling.

### **Conclusion**
Building a multi-threaded HTTP server from scratch in Rust was a challenging but incredibly rewarding experience. It brought together everything I&apos;d learned so far about systems programming, concurrency, and protocol design, and gave me a solid foundation for future projects. I&apos;m excited to keep pushing my Rust skills further with my next planned foray into development with Rust - a cross-platform writing and worldbuilding tool built using Tauri 2.0.

### **Next Steps**
I plan to further expand on this project by adding more features such as:
- Add support for persistent connections (keep-alive).
- Expand the `post()` handler to handle more `Content-Types`.
- Implement logging middleware.
- Add HTTPS support.
- Explore async I/O with `tokio` for scalability.
- Add more comprehensive automated tests.

I also plan on using everything I learned to begin working on my revised writing and worldbuilding app using Tauri 2.0. The introduction to systems and web-related programming has given me the confidence to move my old project from planning to development.

Follow my progress on [my GitHub repo](https://github.com/tarunJeevan/rust-journey)!