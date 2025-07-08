---
title: Survey Web App Prototype
summary: A web app designed to provide a free and fully featured survey creation and distribution experience for student groups.
image: /images/projects/survey-app/survey-app-thumbnail.png
author: 'Tarun Jeevan'
publishedAt: '2024-10-9'
tags: ['React.js', 'JavaScript', 'C#', '.NET', 'MVC Framework', 'Web Dev', 'SQL Server', 'Firebase', 'Survey.js']
---

![Survey Web App Thumbnail](/images/projects/survey-app/survey-app-thumbnail.png)

## **Project Overview**
The ***Survey Web App Prototype*** was developed as a **course project** from **August 2023 to December 2023** with a team of four developers, including myself. Designed to provide students and student groups with an intuitive, streamlined survey experience, this project focused on creating an accessible tool for survey creation, distribution, and participation. I led the frontend development, working closely with teammates who handled the backend and server-side functionality.
- **Development Period**: 4 months
- **Technology Stack**: React.js, Survey.js, Firebase, .NET (C#), SQL Server
- **Source Code**: [GitHub Repository](https://github.com/tarunJeevan/web-dev-survey-app)

## **Project Objectives**
The main goal of this project was to create a user-friendly web app where students could easily design surveys, distribute them, and collect responses. This required a collaborative approach to ensure that all aspects of survey creation and participation were seamlessly integrated, allowing users to perform these tasks with minimal friction.

### **Key Features**
- **Frontend Survey Interface**: **React.js** components to create a modular and interactive user interface as well as **Survey.js** for intuitive survey design and participation.
- **User Authentication**: Secure **Firebase authentication** to safeguard user accounts and data. We used Firebase&apos;s OAuth option to connect to Microsoft **Azure Active Directory** and set it up so only campus credentials could be used to log into and use our application. 
- **Data Storage and Processing**: **SQL Server** and RESTful APIs for efficient data storage and processing, including both storing survey form data as well as processing survey results.
- **Testing and Quality Assurance**: Comprehensive unit and end-to-end testing on the frontend with **Cypress**.

## **Key Features and Functionality**
### **Survey Interface and Frontend Development**
I led the frontend development using React.js and Survey.js, focusing on an intuitive, responsive interface to support survey creation and participation. Key functionalities included:
- **Survey Creation**: Integrated Survey.js to enable users to design and customize survey forms.
- **User-Friendly Participation**: Ensured survey forms were easy to complete on any device, enhancing user engagement.
- **Responsiveness**: Used Bootstrap for styling, ensuring consistent display across different screen sizes.

### **Authentication and Data Security**
To secure user accounts, we integrated Firebase for authentication, supporting secure login and account management. Firebase allowed us to easily manage user credentials, ensuring smooth, secure access for students, teachers, and anyone with campus credentials to create and distribute surveys.

### **Backend Integration and Data Management**
Working closely with our backend developer, we designed a **RESTful API** using **.NET and C#** to handle data requests, storage, and retrieval:
- **Data Processing and Storage**: We used SQL Server to store survey questions, responses, and user information securely. The database schema was optimized for fast access and efficient storage of survey data.
- **API Development**: Created RESTful endpoints for communication between the frontend and backend, ensuring secure, efficient data handling.

### **Testing and Quality Assurance**
To ensure a seamless experience, I wrote and implemented comprehensive unit and **end-to-end (E2E) tests** for the frontend using **Cypress**. These tests covered multiple scenarios:
- **Component Testing**: Verified individual frontend components to ensure they worked correctly in isolation.
- **Integration Testing**: Checked full user workflows, such as survey creation, participation, and submission, ensuring all components functioned together without issues.

## **Technical Implementation**
We used React.js for our frontend and .NET for our backend to provide users with a reactive and intuitive interface while handling all the more data operations on the backend. Here's part of the code we used to handle authentication via Firebase on the frontend and backend:
### **Frontend**
```js
useEffect(()=> {
    setLoading(true);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        console.log("Changed");
        setLoading(false);
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });
}, [])
const navigate = useNavigate();
const Submit = (e) => {
    e.preventDefault();
    navigate("/profile");
}

// Microsoft authentication
const provider = new OAuthProvider("microsoft.com");
const microsoftAuth = () => {
    signInWithPopup(auth, provider).then((result) => {
    // We only need the accessToken for api requests
    const accessToken = result.user.accessToken;
    // Save the name of the user which may prove useful later in the application
    const username = result.user.displayName;
    localStorage.setItem("token",accessToken);
    localStorage.setItem("username",username);
    setusername(username);
    // Changed this from "profile" to "dashboard". Change later as needed
    navigate("/dashboard");
    }).catch((e) => {
          console.log(e);
    })
}
```
### **Backend**
```cs
// Validates user token for authentication and session management
public async Task<bool> ValidateToken(string a_token) {
    try {
        string token = a_token.Substring(6).Trim();
        FirebaseToken decodedToken = await FirebaseAuth.DefaultInstance.VerifyIdTokenAsync(token);
        string uid = decodedToken.Uid;

        DateTime issued = DateTimeOffset.FromUnixTimeSeconds(decodedToken.IssuedAtTimeSeconds).UtcDateTime;
        DateTime expires = DateTimeOffset.FromUnixTimeSeconds(decodedToken.ExpirationTimeSeconds).UtcDateTime;

        if (issued <= DateTime.Now.ToUniversalTime() && expires > DateTime.Now.ToUniversalTime()) {
            return true;
        }

        return false;
    }
    catch (Exception ex) {
        Console.WriteLine(ex.Message);
        return false;
    }
}
```

## **Challenges and Solutions**
1. **Backend-Frontend Synchronization**: Ensuring smooth data flow between the frontend and backend was challenging, especially during survey data processing. Regular collaboration with the backend developer allowed us to troubleshoot issues, refine our API calls, and optimize data transfer.
2. **User Interface Responsiveness**: As surveys could be accessed from various devices, maintaining responsiveness was crucial. Using **Bootstrap** for consistent design helped solve compatibility issues, making the survey experience smooth for users on different devices.
3. **Comprehensive Testing**: Writing robust Cypress tests required simulating different user scenarios, which was time-intensive but essential for a quality user experience.

## **Outcome and Future Directions**
The *Survey Web App Prototype* served as a proof-of-concept that provided students with a reliable platform for survey creation and participation during the course. Hosted temporarily on a team member&apos;s server, the web app successfully supported course project requirements. The project is currently offline, but its codebase remains available for future use and expansion.

### **Key Learnings**
- **Frontend Integration with Third-Party Libraries**: Working with Survey.js and Firebase improved my ability to integrate and customize third-party libraries for specific user needs.
- **Collaborative Development and Communication**: Regular coordination with backend developers was essential in streamlining API communication and solving data handling issues.
- **Testing for Web Applications**: Writing effective Cypress tests highlighted the importance of comprehensive QA for user-facing applications.

## **Conclusion**
This project was an enriching experience that combined frontend development, backend collaboration, and quality assurance. By providing students with an easy-to-use survey tool, the *Survey Web App Prototype* demonstrated my ability to develop functional, responsive web apps with a focus on security and user experience.

## **Call to Action**
To explore the app&apos;s codebase and implementation, check out the [GitHub Repository](https://github.com/tarunJeevan/web-dev-survey-app). Feedback on improving or extending this project is always welcome!