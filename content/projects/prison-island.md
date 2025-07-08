---
title: Prison Island
summary: A prototye survival game designed to study how playing video games can be used to train cognitive skills.
image: /images/projects/prison-island/prison-island-thumbnail.png
author: 'Tarun Jeevan'
publishedAt: '2024-10-9'
tags: ['Game Dev', 'Unreal Engine', 'C++', 'Psychology']
---

![Prison Island](/images/projects/prison-island/prison-island-thumbnail.png)

## **Project Overview**
**Prison Island** is a survival game I designed in Unreal Engine 5 as part of an Independent Study research project from August 2023 to December 2023. My aim was to explore whether video games could be intentionally designed to foster cognitive skill development, particularly in areas like cognitive inhibition, cognitive elaboration, planning, and decision-making. The project built on prior research that showed promising results in similar studies, such as games used to teach physics concepts or medical protocols.

While I successfully developed a **Minimum Viable Product (MVP)** prototype featuring fundamental gameplay mechanics, the project remains unfinished, with future phases planned for a complete, research-ready experience.
- **Development Period**: 4 months (August 2023 - December 2023)
- **Game Engine**: Unreal Engine 5
- **Source Code**: [GitHub Repository](https://github.com/tarunJeevan/prison-island)

## **Project Objectives**
The primary objective was to create a playable MVP that incorporated survival game mechanics designed to test players&apos; cognitive skills. I aimed to build a prototype that would engage players in tasks requiring exploration, problem-solving, and strategic decision-making, while subtly prompting players to internalize real-world rules within the game environment.

### **Planned Features**
- **Exploration**: A detailed game map encouraging players to engage with the environment in creative ways.
- **Combat and Crafting Systems**: Tools to engage players in planning and decision-making.
- **Player Objectives**: Tasks designed to foster cognitive skills through in-game problem-solving.
- **Player Status Management**: Systems for health, stamina, and resources to simulate real-world constraints and enhance cognitive engagement.

## **Key Features and Functionality**
### **Research and Proposal Development**
I began by examining existing research on the educational potential of video games, noting that many academic institutions have successfully integrated games into their curricula to improve cognitive and practical skills. This background informed my proposal to create Prison Island as a survival game targeting cognitive skills specifically.

### **Core Gameplay Mechanics**
The game&apos;s MVP includes:
- **Player Movement and Interaction**: Implemented advanced player movement features (running, crouching, jumping, dashing) to provide nuanced control and promote quick decision-making.
- **Health and Stamina System**: Players must manage resources, adding a layer of strategy.
- **Spatial Inventory System**: Allows players to add, drop, and organize items in a simulated “backpack,” which encourages cognitive organization and planning.

While the MVP was missing some key gameplay systems and player objectives, these mechanics represent the groundwork for a cognitive engagement experience.

### **My Contributions**
As the sole developer on this project, I handled both design and technical development:
- **Environment Design**: I created a fully explorable level with interactive elements for player engagement.
- **Player Controller and Systems**: I used C++ and Unreal Engine Blueprints to program the core mechanics and ensure modularity. Systems such as player movement, health, and stamina management were designed with modularity and reusability in mind.
- **Inventory System**: I developed a spatial inventory system that encourages players to think strategically about item management.

### **Techincal Implementation**
Here&apos;s a sample of the code used to handle environment interactions, written in C++:
```cpp
#pragma region Interaction
void APlayerCharacter::CastInteractionTrace() {
	InteractionData.LastInteractionCheckTime = GetWorld()->GetTimeSeconds();

    // Establish line trace vectors
	FVector TraceStart{ GetPawnViewLocation() };
	FVector TraceEnd{ TraceStart + (GetViewRotation().Vector() * InteractionCheckDistance) };
	float LookDirection = FVector::DotProduct(GetActorForwardVector(), GetViewRotation().Vector());

    // If the player camera has turned sufficiently
	if (LookDirection > 0.2f) {
		FCollisionQueryParams TraceParams;
		TraceParams.AddIgnoredActor(this);
		FHitResult TraceHit;

        // Cast a line trace and run the code block if it hits something
		if (GetWorld()->LineTraceSingleByChannel(TraceHit, TraceStart, TraceEnd, ECC_Visibility, TraceParams)) {
			if (TraceHit.GetActor()->Implements<UInteractionInterface>()) {
				// Check if the hit actor is new
				if (TraceHit.GetActor() != InteractionData.CurrentInteractable) {
					FoundInteractable(TraceHit.GetActor());
					return;
				}
				// Check if the hit actor is the one found in the previous line trace
				if (TraceHit.GetActor() == InteractionData.CurrentInteractable)
					return;
			}
		}
	}
	// Line trace found nothing
	NoInteractableFound();
}

void APlayerCharacter::FoundInteractable(AActor* NewInteractable) {
	if (IsInteracting())
		EndInteract();

    // End focus on old interactable item
	if (InteractionData.CurrentInteractable)
	{
		TargetInteractable = InteractionData.CurrentInteractable;
		TargetInteractable->EndFocus();
	}

    // Switch focus to new interactable item
	InteractionData.CurrentInteractable = NewInteractable;
	TargetInteractable = NewInteractable;

	HUD->UpdateInteractionWidget(&TargetInteractable->InteractableData);

	TargetInteractable->BeginFocus();
}

void APlayerCharacter::NoInteractableFound()
{
	if (IsInteracting())
		GetWorldTimerManager().ClearTimer(InteractionTimerHandler);

	if (InteractionData.CurrentInteractable) {
		if (IsValid(TargetInteractable.GetObject()))
			TargetInteractable->EndFocus();

		HUD->HideInteractionWidget();

		InteractionData.CurrentInteractable = nullptr;
		TargetInteractable = nullptr;
	}
}
```
This code performs all the logic necessary to be able to navigate the level and interact with interactable items, an essential aspect of any survival or action game as it covers everything from picking up weapons and consumables to using various items.

## **Challenges and Solutions**
1. **Time Constraints**: With only four months, I couldn&apos;t fully realize the MVP, leading to the decision to pause development. However, focusing on foundational systems allowed for future revision and expansion.
2. **Feature Prioritization**: While I had ambitious plans for player objectives and NPC interactions, I concentrated on key survival mechanics like movement and inventory to make the MVP a solid starting point.
3. **System Complexity**: Designing a modular, reusable codebase for Unreal Engine required thoughtful planning. Implementing foundational systems in C++ while leveraging Unreal&apos;s Blueprints helped streamline development.

## **Outcome and Future Development**
While the MVP was incomplete, it set the groundwork for a survival game prototype with robust movement, basic survival elements, and a cognitive skill development framework. Looking forward, I plan to continue expanding Prison Island by adding:
- **Combat and Crafting Systems**: To encourage problem-solving and resource management.
- **Player Objectives and Puzzles**: Objectives tied to cognitive skills to measure engagement and improvement.
- **Environmental and NPC Interactions**: To create a dynamic environment with diverse challenges.

### **Key Learnings**
- **Research Integration**: The project highlighted how research-driven design can inform game mechanics aimed at real-world skills.
- **Modularity in Game Design**: Developing modular C++ code taught me the value of building scalable systems in Unreal Engine.
- **Iterative Prototyping**: Emphasized the importance of breaking down complex objectives into achievable components within limited timeframes.

## **Conclusion**
Developing *Prison Island* has been a valuable learning experience, blending research, game design, and technical skill-building. The project underscores my complementary interests in game design, programming, research, and psychology. I look forward to completing and testing the full version in the future.

## **Call to Action**
For those interested in exploring the code and early implementation of Prison Island, feel free to check out the [GitHub Repository](https://github.com/tarunJeevan/prison-island). Any feedback or suggestions would be greatly appreciated!