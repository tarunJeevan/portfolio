---
title: Developer Journey Part 2 - Rust
summary: The continuation of my journey in learning Rust. This post covers my learning and usage of Rust concepts such as error-handling, writing tests, Test Driven Development (TDD), and more into creating my own grep-like CLI tool. Though starting from what's presented in the official Rust book, I added additional functionality to truly make it my own. 
author: 'Tarun Jeevan'
publishedAt: '2025-02-03'
tags: ['Dev Journal', 'Rust']
---

Continuing my journey of learning Rust, I read through chapters 8-13 of the [official Rust book](https://doc.rust-lang.org/stable/book/). To better ensure I properly learned the covered concepts, I started building a command-line tool similar to `grep` based on the I/O project from [chapter 12](https://doc.rust-lang.org/stable/book/ch12-00-an-io-project.html). This project helped me solidify my understanding of Rust&apos;s error handling and testing capabilities as well as its robust type system. In addition to following along with the Rust book, I also implemented additional functionality to further challenge myself and better test my understanding of Rust. 

In this post, I&apos;ll walk through the key lessons I learned while implementing my own version of `grep`.

## **Structuring the Project with Modules**
I started by structuring the project as recommended by the book to separate program structure and logic into separate files. Instead of cramming everything into `main.rs`, I split my code into multiple files:
- `main.rs`: Handles argument parsing and program entry.
- `lib.rs`: Contains core logic for searching and reading files.

This separation made my code more readable and maintainable, reinforcing the importance of modular design in Rust.

## **Handling Command-Line Arguments**
Rust provides the `std::env::args` function to capture command-line arguments and that is what I initially used in early iterations of my project. As I tried to extend the parsing logic to account for optional flags, better validation, help systems, and more, I realized that I was doing too much and began looking for a crate with my desired functionality. 

After some research, I happened upon `clap`, a library that makes argument parsing much cleaner and more powerful. Instead of manually iterating over arguments, `clap` allows for a declarative approach that simplified my code so I could focus on the features important to my program. I simply defined a struct with the desired fields and used the `#[derive(Parser)]` attribute to generate the necessary parsing logic. 

```rs
use clap::{ArgAction, Parser};

#[derive(Parser, Debug)]
#[command(name = "mygrep", about = "A grep-like CLI tool")]
struct Cli {
    /// The query string to search for
    query: String,

    /// The file to search in
    file: String,

    /// Turn on for case insensitive search
    #[arg(short, long, action = ArgAction::SetTrue)]
    ignore_case: bool,

    /// Turn on to show line numbers
    #[arg(short, long, action = ArgAction::SetTrue)]
    line_numbers: bool,
}
```
*Clap makes it easier to parse arguments and handle optional flags.*

Though `clap` simplified my program logic, it was still a challenge to even figure out how to use it. I ended up watching a few YouTube tutorials, reading documentation, and conducting my own experiments to figure out how it works and get comfortable with using it. 

## **Reading Files Efficiently**
As per the book&apos;s explanation, I started by using `std::fs::read_to_string` but soon switched to the `std::fs::File` and `std::io::BufRead` modules to read in file content as a stream. As my program grew more complex and I added features such as toggleable line numbers and case sensitivity, the book&apos;s file reading code proved insufficient. Once again, I went looking for a good answer and, after some research, discovered a suitable solution using external crates such as `regex` and `colored` as well as complex pattern matching to create a working solution.

## **Error Handling and Testing**
Rust&apos;s error handling and testing capabilities were a key focus of this project. I used the `Result` type to handle errors and `panic!` to exit the program when necessary. I also wrote tests for every key function - such as searching with case sensitivity enabled or disabled - to ensure they worked as expected. This process helped me understand the importance of writing tests and how Rust&apos;s type system can help catch errors at compile time.

## **Conclusion**
Building my own version of `grep` in Rust was a challenging but rewarding experience. I learned a lot about Rust&apos;s error handling, testing, and modular design capabilities, as well as how to use external crates to extend my program&apos;s functionality. I also gained a deeper understanding of Rust&apos;s type system and how it can help prevent errors in my code. Overall, this project was a great way to solidify my knowledge of Rust and prepare me for more complex projects in the future.

## **Next Steps**
I plan to furhter expand on this project by adding more features such as match inversion, customizable color palletes, and more advanced search options. I also want to improve error handling and extend testing in my program to make it more robust and reliable.

For my next project, I plan to build a simple web server in Rust, which is the next project described in the Rust handbook. As usual, I will follow the book before extending the project&apos;s capabilities to further explore the language&apos;s capabilities. I&apos;m excited to continue learning and growing as a Rust developer and can&apos;t wait to see what new challenges await me. Stay tuned for more updates on my Rust journey!

Follow my progress on [my GitHub repo](https://github.com/tarunJeevan/rust-journey)!