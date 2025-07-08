---
title: Developer Journey - Rust
summary: My journey as a developer in learning Rust, a memory-safe, low-level language that has been growing in popularity, usage, and community support in the last few years. 
author: 'Tarun Jeevan'
publishedAt: '2024-11-23'
tags: ['Dev Journal', 'Rust']
---

## **Why Rust?**
I&apos;ve been interested in Rust for some time now, partially because of its reputation as a sort of successor to C++ and partially because of all the hype and excitement around it. That said, I only recently started actually learning it because I never saw any point in doing so before. My programming interests lie primarily in game development (where C++ and C# are most prominent), web development (where JavaScript is the most commonly used language), and cybersecurity (where I don't really use any programming language). 

The reason why I am finally putting in the effort to learn the language is to be able to use Tauri to the greatest extent. 

### **What is Tauri?**
Tauri is an open-source framework designed to create cross-platform desktop and mobile apps using a web frontend. Electron, a JavaScript framework that does the same thing, has been the most popular framework for this use case for a long time now but Tauri has been steadily growing in popularity as a very good - if not better - alternative. 

Unlike Electron, which uses JavaScript from top to bottom, Tauri is written primarily in Rust and has a Rust backend that uses local WebView libraries to render a JavaScript frontend as a desktop or mobile app. Because it uses local WebView libraries instead of bundling an entire Node runtime and Chromium browser, Tauri apps are significantly smaller and run much faster thanks to the Rust backend. 

Of course, you don&apos;t actually need to learn Rust to use Tauri as it provides plenty of JavaScript APIs to communicate with the Rust backend, the cloud, or a database. However, that only applies to simple apps. For apps that require complex application logic, you definitely need to know how to write Rust code in order to customize your Rust backend. 

After extensive research, I determined that Tauri was the best framework for the project I had in mind, a revision of the Writing & Worldbuilding tool I thought up a while ago (*you can find the relevant Developer Journals among my posts*). This is intended to be a complete rehaul of the concept. When I originally came up with the concept and started planning it, I was still a student and didn&apos;t have much knowledge of, or appreciation for, the software development process. My planning and documentation was haphazard and full of holes because I rushed into the part that I actually wanted to do, coding the app.

## **Developer Journal - Week 1**
Here&apos;s what I did this first week of learning Rust (check out [my repo](https://github.com/tarunJeevan/rust-journey) covering this same material).

### **Basics**
I learned the basics of Rust - installation and setup, syntax, data types, control flow, etc. I primarily did this via the officoal *Rust Programming Language* Book but I also supplemented my learning with various YouTube tutorials and explanatory videos. 

## **Projects**
Worked on and (mostly) finished 4 (actually 3) projects to practice and demonstrate my skills and knowledge. These projects are:

### **Hello World**
A simple Hello World program to familiarize myself with Cargo and Rust project structure.

### **Guessing Game**
A CLI guessing game that generates a random number and repeatedly prompts users to guess, informing them whether their guess was too low or too high after each input. I primarily followed the Rust book&apos;s directions at the beginning but added my own features. 

For example, I added a simple difficulty mode that controls how many guesses a user gets, with harder difficulty settings giving users fewer guesses to figure out the random integer. 

This project helped me familiarize myself with control flow in Rust and basic concepts such as immutability and mutability. I also started learning about the `std` crate and pattern matching with the `match` expression. 

### **Tic Tac Toe**
A CLI Tic-Tac-Toe game that prints the game rules and board in the terminal, allowing users to pick the square to put their mark in via numbers read in from `stdin`. This game unfortunately doesn't support single-player mode but I still learned a lot while making it. 

The README document in my rust-journey repo covers this in detail but some of the concepts I practiced include:
- Ownership and borrowing
- Iterators
- Error handling
- Debugging in VS Code

### **Tic Tac Toe Advanced**
In an effort to fix the failings of the previous version, I set out to create a more advanced version of the game to fill in the gaps in the previous version and enhance existing features. 

The end result was a game that makes full use of the terminal to create an enhanced player experience that doesn&apos;t rely on reading in user input. This version also implements a Minimax algorithm for the Player Two AI, creating an unbeatable opponent that can only be tied against. 

Unfortunately, this version is not yet perfected as a bug makes the UX unpleasant and frustrating. Specifically, a method that is called whevener the user presses the Tab and Backtab keys runs twice despite only being called once and I have yet to determine why exactly this happens. 

In the future, I intend to fix this bug and then reimplement two-player functionality as well as enchance the single-player mode with easier AI algorithms for varied and customizable difficulty. 

## **Next Time on Developer Journey - Rust...**
While my inability to fix the sole remaining bug in my advanced Tic-Tac-Toe game is slightly discouraging, I fully intend to continue with my journey in learning Rust as I build up my skills to the point where I can begin to learn and use Tauri to build the cross-platform Desktop apps I want. 

Stay tuned to learn more about my developer journey and feel free to ask me any questions. If you have suggestions on what projects I can attempt next or resources you found useful during your own Rust journey, please reach out (contact methods in the footer).
