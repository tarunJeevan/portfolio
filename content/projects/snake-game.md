---
title: Rust Snake Game
summary: A recreation of the classic Snake game using Rust and the Piston framework. This project explores game logic, rendering, and user input handling.
image: /images/projects/snake-game/snake-game-thumbnail.png
author: 'Tarun Jeevan'
publishedAt: '2025-06-19'
tags: ['Rust', 'Game Dev', 'Piston Framework']
---
![Snake Game Thumbnail](/images/projects/snake-game/snake-game-thumbnail.png)

## **Project Overview**
The **Rust Snake Game** is a personal project that recreates the classic Snake game using the Rust programming language and the `piston_window` crate, a wrapper for the Piston game framework. It's a part of my ongoing journey to learn Rust and explore its capabilities in game development. The project focuses on implementing event-driven design patterns, core game mechanics, rendering graphics, and handling user input, providing a hands-on experience with Rust's features and performance characteristics.
- **Development Period**: March 2025 - July 2025
- **GitHub Repository**: [Rust Journey Repo](https://github.com/tarunJeevan/rust-journey)

## **Project Objectives**
The primary goal of this project was to create a functional and engaging Snake game that showcases Rust's performance and safety features. By implementing the game logic, rendering, and user input handling, I aimed to deepen my understanding of Rust while delivering a nostalgic gaming experience.

The secondary goal was to reinforce my knowledge of game development concepts, such as event handling, game loops, and state management, in a language that emphasizes memory safety and concurrency. I explored game development patterns and practices from a lower level instead of relying on the abstractions provided by higher-level game engines. 

## **Key Features and Functionality**
### **Classic Snake Gameplay**
The game implements the classic Snake mechanics, where the player controls a snake in a 2D world that grows longer as it consumes food. The objective is to avoid colliding with walls or the snake's own body while trying to eat as much food as possible.

![Snake Game Screenshot](/images/projects/snake-game/snake-game-screenshot.png)

This simple yet addictive gameplay is enhanced with smooth and remappable controls, allowing players to customize their experience. The game also features a scoring system that tracks the player's performance, adding a competitive element.

### **Simple Scoring System**
The game implements a simple scoring system to track how much food the snake has eaten in a single session. This score is displayed near the top of the game board so it&apos;s clearly visible but doesn&apos;t distract from gameplay. 

The score itself is stored in the `Game` struct, meaning that it is maintained or refreshed along with the game session. Pausing and resuming doesn&apos;t affect the score as it doesn&apos;t affect the game. Starting a new game will reset the score as it creates a new instance of the `Game` struct. 

### **Simple Leaderboard**
The game includes a simple leaderboard that tracks the ten highest scores achieved in the game, logging a 3-letter alphanumeric name associated with the score as well as the date and time it was earned. This leaderboard is accessible from the main menu and allows players to see their best performances, adding a competitive edge to the gameplay.

The leaderboard itself contains a vector of `ScoreEntry` structs and is stored within the `Game` struct. The leaderboard is updated whenever a new high score is achieved, and it is displayed in the main menu when the player chooses to view it. When the player exits the game, the leaderboard is saved to a file so that it can be loaded the next time the game is started. Both the saving and loading of the leaderboard is done using the `serde` and `serde_json` crates, which allow for easy serialization and deserialization of the data.

```rs
#[derive(Serialize, Deserialize, Clone)]
pub struct ScoreEntry {
    pub name: String,
    pub score: u32,
    pub date: DateTime<Utc>,
}

#[derive(Serialize, Deserialize, Default, Clone)]
pub struct Leaderboard {
    pub scores: Vec<ScoreEntry>,
}

impl Leaderboard {
    /// Loads leaderboard from file
    ///
    /// `path` is the filepath to the savefile where scores are stored
    ///
    /// Returns an instance of itself containing the deserialized contents of the savefile or a default instance
    pub fn load(path: &Path) -> Self {
        if let Ok(contents) = fs::read_to_string(path) {
            return serde_json::from_str(&contents).unwrap_or(Leaderboard::default());
        }
        Leaderboard::default()
    }

    /// Save current leaderboard to a savefile, overwriting its contents if it already exists
    ///
    /// `path` is the path to the savefile
    ///
    /// Returns an IO Result containing the Unit type on success and an IO error on failure
    pub fn save(&self, path: &Path) -> std::io::Result<()> {
        let json = serde_json::to_string_pretty(&self)?;
        fs::write(path, json)
    }
    ... // Other methods for adding scores, sorting, etc.
}
```
*Leaderboard struct and methods in `leaderboard.rs`*

### **Sprites and Textures**
The game uses simple 2D sprites and textures to make gameplay more appealing and aesthetically pleasing. Textures are loaded into the game at runtime and rendered dynamically as needed when the game runs. 

This is done using Piston&apos;s `Image` and `Texture` structs, which are used to load and draw images as textures and sprites. 

### **Multiple Game States**
The game includes multiple states, such as the main menu, settings, gameplay, pause, and game over screens. This state management allows for a structured flow of the game, enhancing user experience by providing clear transitions between different parts of the game. Seamless transitions and visual overlays enhance UX and ensure that players can easily navigate through the game without confusion.

### **Customizable Controls**
The game allows players to customize their controls, enabling them to choose their preferred keys for movement. This feature enhances accessibility and user comfort, making the game more enjoyable for a wider audience.

![Snake Game Settings Overlay](/images/projects/snake-game/snake-game-remapping.png)

### **Gameplay Settings**
The game includes settings for adjusting gameplay parameters, such as increasing or decreasing snake movement speed for greater or lesser difficulty and toggling wall wrapping to add another dimension to gameplay, and remapping snake controls to custom keys for greater accessibility. Players can modify these settings to tailor the game to their preferences, providing a personalized gaming experience.

## **Technology Stack**
- **Programming Language**: Rust
- **Game Framework**: Piston (using `piston_window` crate for window creation, input handling, and rendering)
- **Development and Debugging**: VS Code with CodeLLDB
- **Randomization**: `rand` for generating random food positions
- **Serialization**: `serde` and `serde_json`

## **Development Challenges and Solutions**
### **Overlay Rendering**
Implementing an overlay for the pause screen required careful management of the rendering pipeline to ensure that game state transitions were smooth and visually appealing. I created a translucent screen to overlay over the game board but had to ensure that the game state was paused correctly, preventing any updates to the game logic while the overlay was active. 

I also had to ensure that user input was captured correctly to allow for navigation through the menu options without affecting the game state. One final challenge was ensuring that the overlay did not interfere with the rendering of the game board, which required careful layering of the graphics.

### **Game State Management**
Managing multiple game states (menu, gameplay, pause, etc.) required a clear structure to handle transitions and maintain game logic, especially as I added additional functionality and features. 

I used an enum to implement a state machine pattern to manage these states efficiently. Rust&apos;s `match` statement was particularly useful for handling state transitions, allowing for clear and concise code that is easy to maintain.

```rs
while let Some(event) = window.next() {
    // Use match to handle all game states
    match game.get_game_state() {
        GameState::MainMenu => {
            // Draw main menu
            window.draw_2d(&event, |c, g, device| {
                clear(BACK_COLOR, g);
                game.draw_main_menu(
                    &c,
                    g,
                    &mut glyphs_bold,
                    &mut glyphs_light,
                    &mut glyphs_regular,
                );
                // Flush glyphs to the device
                glyphs_bold.factory.encoder.flush(device);
                glyphs_light.factory.encoder.flush(device);
                glyphs_regular.factory.encoder.flush(device);
            });
            // Handle main menu state logic
            if let Some(Button::Keyboard(key)) = event.press_args() {
                game.key_pressed(key);
            }
        }
        GameState::Playing => {
            // Draw game board
            window.draw_2d(&event, |c, g, device| {
                game.draw_game_board(&c, g, &mut glyphs_bold);
                // Flush glyphs to the device
                glyphs_bold.factory.encoder.flush(device);
            });
            // Handle playing state logic
            if let Some(Button::Keyboard(key)) = event.press_args() {
                game.key_pressed(key);
            }
            // Update game state
            event.update(|arg| {
                game.update(arg.dt);
            });
        }
        ... // Other game states
    }
}
```
*Using `match` to manage event loop and game states in `main.rs`*

### **Input Handling**
Ensuring responsive and customizable input handling was crucial for gameplay. I utilized Piston&apos;s `Event` struct and its associated methods to capture user input and map it to different game actions based on the current game state, allowing for smooth controls throughout the game.

```rs
// Handle key press events for every game state
pub fn key_pressed(&mut self, key: Key) {
    match self.game_state {
        // Handle main menu key presses
        GameState::MainMenu => match key {
            // Navigate through menu options
            Key::Up => {
                if self.main_menu_selected > 0 {
                    self.main_menu_selected -= 1;
                }
            }
            Key::Down => {
                if self.main_menu_selected < 2 {
                    // NOTE: Assuming 3 menu options
                    self.main_menu_selected += 1;
                }
            }
            Key::Right => {
                // Alternative to Down key for navigating through options
                if self.main_menu_selected < 2 {
                    // NOTE: Assuming 3 menu options
                    self.main_menu_selected += 1;
                }
            }
            Key::Left => {
                // Alternative to Up key for navigating through options
                if self.main_menu_selected > 0 {
                    self.main_menu_selected -= 1;
                }
            }
            Key::Return => {
                // Select chosen option
                match self.main_menu_selected {
                    0 => {
                        // Start new game
                        self.restart();
                    }
                    1 => {
                        // Go to settings
                        self.game_state = GameState::Settings;
                    }
                    2 => {
                        // Quit game
                        std::process::exit(0);
                    }
                    _ => {}
                }
            }
            _ => {}
        },
        // Handle playing state key presses
        GameState::Playing => match key {
            k if k == self.game_settings.key_bindings.up => {
                // Move snake up unless it is already moving down
                if self.snake.head_direction().opposite() != Direction::Up {
                    self.update_snake(Some(Direction::Up));
                }
            }
            k if k == self.game_settings.key_bindings.down => {
                // Move snake down unless it is already moving up
                if self.snake.head_direction().opposite() != Direction::Down {
                    self.update_snake(Some(Direction::Down));
                }
            }
            k if k == self.game_settings.key_bindings.left => {
                // Move snake left unless it is already moving right
                if self.snake.head_direction().opposite() != Direction::Left {
                    self.update_snake(Some(Direction::Left));
                }
            }
            k if k == self.game_settings.key_bindings.right => {
                // Move snake right unless it is already moving left
                if self.snake.head_direction().opposite() != Direction::Right {
                    self.update_snake(Some(Direction::Right));
                }
            }
            k if k == self.game_settings.key_bindings.pause => {
                // Pause current game
                self.game_state = GameState::Paused;
            }
            _ => {}
        },
        ... // Other game states
    }
}
```
*Input handling code snippet from `game.rs`*

### **Input Remapping System**
Implementing a remapping system for controls required a careful redesign of my existing input handling system to ensure that user preferences were respected while maintaining the game's responsiveness. I created a new `enum` to hold the current key mappings and decoupled the input handling logic from hardcoded key bindings, allowing for dynamic remapping without affecting the core game logic.

### **Rendering Textures**
Rendering textures proved to be a surprising challenge as I struggled to find examples online or in Piston&apos;s documentation. AI tools like Copilot and ChatGPT came through me for me once again, however, and helped me figure out how to load, configure, and render images as textures. 

Following that, it was fairly straightforward to replace my existing functions and code that drew simple rectangular blocks and screens to draw my textures instead. A noteable exception to that was rendering textures for my snake. I had to prepare textures for the head, body, and tail in various orientations and then draw them at the appropriate time, an endeavor that took a significant amount of time even with help from LLMs.

```rs
// Draw game board background
pub fn draw_tiled_background(
    width: i32,
    height: i32,
    con: &Context,
    g: &mut G2d,
    textures: &BoardTextures,
    tile_tints: &[Vec<[f32; 4]>],
) {
    for x in 0..width {
        for y in 0..height {
            let tint = tile_tints[x as usize][y as usize];
            // Draw grass texture
            Image::new_color(tint)
                .rect([
                    to_coord_u32(x) as f64,
                    to_coord_u32(y) as f64,
                    BLOCK_SIZE,
                    BLOCK_SIZE,
                ])
                .draw(&textures.grass, &con.draw_state, con.transform, g);
        }
    }
}
```
*Function to tile the game board in `draw.rs`*

## **Future Development Plans**
The project is mostly finished but I still have several enhancements planned:
- **Serialization**: Implement serialization of game settings and player preferences.
- **Levels**: Create multiple levels with varying difficulty, introducing new challenges, obstacles, and objectives as the player progresses.
- **Multiplayer Support**: Implement a multiplayer mode where players can compete against each other in real-time, either locally or over a network.

## **Conclusion**
This Snake game project has been a valuable learning experience in Rust and game development. It has allowed me to explore the language's capabilities while delivering a nostalgic gaming experience. The project has reinforced my understanding of game mechanics, event handling, and state management, all while adhering to Rust's principles of safety and performance.

As I continue to develop this project, I look forward to implementing new features and enhancing the gameplay experience. The skills and knowledge gained from this project will undoubtedly contribute to my future endeavors in game development and software engineering.

For those wanting a closer look or to play this game, you can find the source code and instructions on how to run it in the [GitHub Repository](https://github.com/tarunJeevan/rust-journey).