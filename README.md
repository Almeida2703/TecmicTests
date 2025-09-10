


#  MauiTecmicProject

This repository contains the **MauiTecmicProject**, a simple form-based application developed with .NET MAUI. The project also includes a structure prepared for automated testing with Appium, ready for future integration into CI/CD pipelines using Azure DevOps.

## Project Context

This project was developed as part of a **real company project**. The goal was to explore the use of a **new automated testing tool**, evaluating its integration with .NET MAUI applications and the potential for automating tests in continuous integration environments.


---

## 🧪 Automated Tests

- Tests are written with **Appium** for Android.  
- The goal is to validate the app’s behavior on mobile devices or emulators.  
- Tests are located in the `/Tests` file.  
- The project is **not yet integrated into a cloud testing service**, so tests are executed locally with Android emulators or real devices.  

---

## 🔧Technologies Used

- [.NET 8](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)  
- [MAUI](https://learn.microsoft.com/en-us/dotnet/maui/)  
- [Appium](https://appium.io/)  
- Android SDK and emulators (local)  
- GitHub (main repository)  
---

## 📂 Project Structure

```
MauiTecmicProject/
├── MauiTecmicProject/ # Main MAUI project
│ └── MainPage.xaml # Main application interface (UI)
│ ├── MainPage.xaml.cs # Logic associated with MainPage (code-behind)
│ ├── Tests.js # Example tests
│ └── ...
├── README.md # This file
└── .gitignore # Ignored files and folders
```


---

## 🚀 Quick Guide: Running Tests Locally

To run the automated tests with Appium in your local environment, follow these steps:

### 1. Install the required dependencies

Make sure you have [Node.js](https://nodejs.org/) installed.  
Then, in the project folder where the `Tests.js` file is located, install the required dependencies:



```
npm install
npm install -g appium
npx appium
```
In a new terminal window:

```
node Tests.js
```



