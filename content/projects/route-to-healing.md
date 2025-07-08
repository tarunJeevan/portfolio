---
title: Route to Healing
summary: A 2D side-scroller developed in Unity as part of a Game Jam in 2023. 
image: /images/projects/route-to-healing/route-to-healing-thumbnail.png
author: 'Tarun Jeevan'
publishedAt: '2024-10-9'
tags: ['Game Dev', 'Unity', 'C#']
---

![Route to Healing Thumbnail](/images/projects/route-to-healing/route-to-healing-thumbnail.png)

## **Project Overview**
For the 2023 Global Game Jam, I collaborated with a team of four developers to create a 2D, side-scrolling platformer, called *Route to Healing*, in just 48 hours using Unity. The game reflects the theme of the jam, “**Roots**,” by casting players as the guardian of an ancient tree, tasked with purging corruption from its roots to restore life and maintain balance. This fast-paced project involved creative brainstorming and rapid development as we worked together to deliver a polished prototype by the deadline.
- **Development Period**: 48 hours (February 2023)
- **Game Engine**: Unity
- **Play Prototype**: [**Route to Healing** on itch.io](https://spaceowlpro.itch.io/route-to-healing?secret=4tXZWNuJus9pmbNPAw67EwIveQ0)
- **Source Code**: [GitHub Repository](https://github.com/spaceowlproductions/GGJ-2023)

## **Project Objectives**
Our main objective was to deliver a functional platformer that fits the jam&apos;s theme and provides an engaging, challenging experience. The gameplay focuses on movement, combat, and purifying corrupted roots, blending fast-paced action with platformer exploration. Given the 48-hour timeframe, we focused on building core mechanics and ensuring the game had a cohesive look and feel.

## **Key Features and Functionality**
### **Game Concept and Mechanics**
In *Route to Healing*, the player character is a guardian responsible for protecting an ancient tree. They navigate the side-scrolling world, purging corruptive slime from the tree&apos;s roots and using purified roots as checkpoints and healing stations.
- **Purification Mechanic**: Once players purify a root, it becomes a checkpoint and allows them to heal, making it vital to their progress as there is no other way to heal.
- **Combat System**: Players engage in melee combat to fend off slime monsters that attack with projectiles. Combat requires skillful timing and movement to defeat enemies and avoid damage by deflecting projectiles.
- **Platforming Elements**: The game features traditional platformer mechanics, such as left and right movement and jumping, making navigation and combat more dynamic. We carefully tuned elements such as left/right movement speed and air time while jumping to suit the quick pace of the game and provide players with an enjoyable experience.

### **My Contributions**
In this project, my primary responsibilities included:
- **Character Controller**: I programmed player movement, allowing the character to move left, right, and jump, all handled smoothly with C# code.
- **Combat System**: I designed and implemented the melee combat system, allowing players to deflect projectiles and attack enemies with the guardian&apos;s weapon. Combat mechanics were simple but engaging, emphasizing close-range attacks.
- **Narrative**: I created the overarching narrative where the guardian must purify the roots to protect the tree, tying gameplay mechanics to the game&apos;s theme.
- **Character Animation**: Leveraged Unity&apos;s animation tools to add movement and attack animations, giving life to the character sprite during gameplay.

### **Technical Implementation**
I used C# to program the core mechanics and Unity&apos;s animation system for smooth transitions between movements and attacks. Here&apos;s a sample of the C# code used to manage basic player movement:
```cs
private void PlayerMovement() {
    // Horizontal movement
    xDir = Input.GetAxisRaw("Horizontal");
    // Running
    if (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift)) {
        if (isGrounded()) {
            rigidbody.velocity = new Vector2(xDir * 10f, rigidbody.velocity.y);
            running = true;
        }
    }
    else { // Walking
        rigidbody.velocity = new Vector2(xDir * 5f, rigidbody.velocity.y);
        running = false;
    }
    // Jumping
    if (Input.GetButtonDown("Jump") && isGrounded()) {
        rigidbody.velocity = new Vector2(rigidbody.velocity.x, 12f);
    }
    // Attacking
    if (Input.GetMouseButtonDown(0)) {
        animator.SetTrigger("Attacking");
    }
    UpdateAnimation();
}
```
This code handles horizontal movement and jumping, providing responsive controls that feel natural in a platforming context.

## **Challenges and Solutions**
1. **Time Constraints**: With only 48 hours, prioritizing features was crucial. We focused on core mechanics and a minimum viable product rather than adding every idea we brainstormed.
2. **Unfinished Features**: We planned to implement a boomerang-style ranged attack, allowing players to throw the guardian&apos;s weapon. While this idea was promising, its complexity exceeded the jam&apos;s time limitations, so we prioritized polishing existing mechanics instead.
3. **Variety in Enemies**: To enhance gameplay, we considered adding unique enemies (e.g., regenerating or armored monsters) but decided to simplify for time. The core enemy types and basic projectile attacks worked effectively within the limited scope.

## **Outcome and Future Improvements**
The final prototype of *Route to Healing* provided a functioning platformer with engaging combat and a clear objective, showcasing our core mechanics and theme. However, several potential improvements emerged from the experience:
- **Expanding Combat Options**: Developing the boomerang-style ranged combat could add strategic depth and variety to gameplay.
- **Enhancing Enemy Variety**: Adding unique enemies with distinct behaviors would diversify combat encounters.
- **Improving Visuals and Sound**: Polishing animations and customizing the character sprite would enhance immersion and player engagement.

### **Key Learnings**
- **Rapid Prototyping**: The game jam taught me valuable lessons in fast-paced development, decision-making, and prioritizing essential features. Though we weren&apos;t able to add every feature we wanted, my team and I were still able to create a fully functional and enjoyable game within 48 hours. 
- **Cross-Disciplinary Skills**: Working on both gameplay and animation within a short timeframe reinforced my ability to balance technical and creative skills. It also helped me develop my Unity skills (it was my first time using the game engine) and I was able to transfer a lot of my Unreal Engine skills without much trouble or having to rely on my team members. 
- **Team Collaboration**: Coordinating with team members, especially ones I met for the first time, on such a tight schedule emphasized the importance of clear communication and role delegation. Our group of five successfully communicated our skills, preferences, and ideas while fairly divinding labor and credit. 

## **Conclusion**
Developing *Route to Healing* during the 2023 Global Game Jam was a rewarding experience that allowed us to create a unique platformer within a tight timeframe. This project emphasized the value of iterative development, creativity under pressure, and team collaboration. I look forward to revisiting some of these mechanics and expanding upon them in future projects.

## **Call to Action**
If you&apos;d like to experience the game, check out the itch.io page [here](https://spaceowlpro.itch.io/route-to-healing?secret=4tXZWNuJus9pmbNPAw67EwIveQ0) and feel free to explore the [source code on GitHub](https://github.com/spaceowlproductions/GGJ-2023). We&apos;d love to hear your feedback!