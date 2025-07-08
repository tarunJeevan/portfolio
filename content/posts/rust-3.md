---
title: Developer Journey Part 3 - Rust
summary: The continuation of my journey in learning Rust. This post covers my learning and usage of Rust concepts such as graphical libraries, game logic, and more into creating my own 2D Snake game. In a departure from my usual practice of starting with what's presented in the official Rust book before adding additional functionality, I decided to start this from scratch based on an online tutorial that I thought was interesting. That said, I still added my own features and modifications to truly make the game my own.
author: 'Tarun Jeevan'
publishedAt: '2025-06-19'
tags: ['Dev Journal', 'Rust']
---

In a slight departure from my original plan, I decided to take a detour into game development with Rust. I came across a YouTube video by [Tensor Programming](https://www.youtube.com/watch?v=DnT_7M7L7vo) that was particularly intriguing due to my interest in game development. The video walks through the process of creating a simple 2D Snake game using the `piston` framework. Despite being 7 years old, the video was engaging and informative, and I thought it would be a fun way to apply my Rust knowledge in a different context.

This project helped me expand my understanding of the `piston` framework, graphical APIs, game logic, and more. In addition to following along with the video, I also implemented additional functionality to further challenge myself and better test my understanding of Rust. 

In this post, I&apos;ll walk through the key lessons I learned while implementing my own version of the snake game.

## **Structuring the Project with Modules**
I started by structuring the project as recommended by the video to separate program structure and logic into separate files. Instead of cramming everything into `main.rs`, I split my code into multiple files:
- `main.rs`: Creates the game window and initializes the game.
- `game.rs`: Contains all of the game logic.
- `snake.rs`: Contains the snake logic and movement.
- `draw.rs`: Handles the rendering of the game elements.

This modular approach made it easier to manage the code and keep related functionality together.This organization also helped me understand how to structure larger Rust projects and the importance of keeping code modular and maintainable. I still have a lot to learn about Rust project structure, but this was a good first step in that direction.

## **Using the Piston Framework**
The `piston` framework - and the `piston_window` crate that acts as a wrapper - is a powerful tool for creating 2D games in Rust. It provides a simple API for handling graphics, input, and events. I found the documentation to be quite helpful, especially when it came to understanding how to set up the game window, handle user input, and render graphics.

I started by creating a simple window and rendering a basic shape to the screen. This helped me get familiar with the `piston` API and how to use it effectively. I also learned about the event loop and how to handle user input, which was crucial for implementing the snake movement.

## **Implementing Game Logic**
The core of the snake game is the game loop, which handles the game state and updates the screen accordingly. This is where the user input captured in `main.rs` is processed and used to update the game&apos;s state. The game loop runs continuously, checking for events and updating the game state based on user input.

### **Snake Movement and Collision Detection**
I implemented the snake movement by updating its position based on the current direction and checking for collisions with the walls or itself. The snake itself is composed of individual `Blocks` that collectively act as its body. This makes it easier to render the snake&apos;s movement and its growth upon eating food. 

I also implemented collision detection to check if the snake has collided with the walls or itself. If a collision is detected, the game ends and the player is shown a game over screen. This required me to manage different game states and transitions between them.

## **Rendering Graphics**
Rendering graphics in the `piston` framework was a new experience for me. I learned how to use the `piston_window` crate&apos;s various draw functions to draw shapes and text on the screen. The framework provides a simple API for rendering graphics, which made it easy to get started.

I started by rendering colroed rectangles to represent the snake and food. As I progressed, I learned how to render more complex shapes to create screens with borders, buttons, and, finally, I learned how to add images as textures.

I learned how to use the `piston_window` crate&apos;s `Image` and `Texture` structs to load, configure, and render my images as textures for the snake, the food, and even the background and borders of the game board. 

I learned about the importance of delta time in rendering graphics. Delta time is the time between frames, and it&apos;s crucial for ensuring that the game runs smoothly and consistently across different hardware. I used the `piston` framework&apos;s `Event` struct to calculate delta time and update the game state accordingly.

## **Adding Features and Enhancements**
As I progressed through the project, I started adding my own features and enhancements to make the game more interesting. Some of the features I added include:

- **Main Menu**: I implemented a main menu that is displayed first to players, giving them options to control various settings and preferences before starting the game. 
- **Game Over Screen**: I added a proper game over screen that allows the player to restart the game, go to settings, return to the main menu, or quit the game. 
- **Pause Functionality**: I added a pause functionality that allows the player to pause and resume the game. 
- **Game Settings**: I implemented a settings menu that makes the game highly customizable, allowing players to adjust things like the speed of the snake, wall wrapping, and rebind controls. 
- **Score Tracking**: I implemented a simple score tracking system that increments as food is eaten and resets when a new game is started. 
- **State Management**: I learned how to manage different game states, such as the main menu, game over screen, settings menu, and pause screen. I created a state machine to handle transitions between different states and updates the game accordingly, something made much easier by Rust&apos;s `match` statement and enums.

## **AI Pair Programming**
I also experimented with using AI pair programming tools like GitHub Copilot to help me with the project. I found that it was particularly useful for brainstorming new features and fixing bugs. For example, I used it to help me implement the main menu and game over screen, as well as to refine my game state management.

I found that using AI pair programming really sped up my development process and helped refine my ideas and implementations. It was like having a pair programmer who could suggest code snippets and help me debug issues in real-time.

## **Debugging**
This project also helped me improve my debugging skills. I learned how to use the Rust compiler&apos;s error messages to identify and fix issues in my code. With a project as complex as this, simple println! statements were not enough to debug issues so I learned how to debug rust code in VS Code using the `CodeLLDB` extension and configure it with `launch.json` and `tasks.json` files.

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug Snake Game",
            "type": "lldb",
            "request": "launch",
            "program": "${workspaceFolder}/7-snake_game/target/debug/snake_game",
            "args": [],
            "cwd": "${workspaceFolder}/7-snake_game",
            "sourceLanguages": ["rust"],
            "preLaunchTask": "cargo build (snake game)",
        }
    ]
}
```
*launch.json*

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "cargo build (snake game)",
            "type": "shell",
            "command": "cargo",
            "args": ["build"],
            "options": {
                "cwd": "${workspaceFolder}/7-snake_game"
            },
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": ["$rustc"],
        }
    ]
}
```
*tasks.json*

Once again, AI tools like Copilot were helful in creating the configuration files and setting up the debugging environment. I found that having a proper debugging setup made it much easier to identify and fix issues in my code, especially with the complexity of the game logic and rendering.

## **Conclusion**
Overall, this project was a great way to apply my Rust knowledge in a different context and learn more about game development. I enjoyed the process of creating a simple 2D snake game and adding my own features and enhancements. The `piston` framework is a powerful tool for creating 2D games in Rust and I found the documentation to be quite helpful.

I also learned a lot about structuring larger Rust projects, managing game states, and handling user input. This project helped me solidify my understanding of Rust and its capabilities, and I look forward to exploring more game development projects in the future.

## **Next Steps**
I plan to further expand on this project by adding more features such as:
- **Save/Load Functionality**: Implementing a save and load system that allows players to save their progress and resume later. Based on my research, this can easily be accomplished using a crate like `serde` to serialize the game state to a file and vice-versa.
- **Power-ups**: Adding power-ups that can be collected to give the snake special abilities or bonuses. I intend to make great use of AI tools like Copilot to help me brainstorm and implement these features.
- **Levels and Challenges**: Creating different levels with unique challenges, obstacles, and objectives for an interesting single-player experience.
- **Multiplayer Mode**: Implementing a multiplayer mode where players can compete against each other. This is a complex feature that will require a deeper understanding of networking in Rust, but it&apos;s something I&apos;m excited to explore.

I also want to improve the graphics and add more complex rendering techniques, such as using images and sprites. I&apos;m excited to continue learning and growing as a Rust developer and can&apos;t wait to see what new challenges await me. Stay tuned for more updates on my Rust journey!

Follow my progress on [my GitHub repo](https://github.com/tarunJeevan/rust-journey)!
