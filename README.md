# To Do App

An Express web application featuring full CRUD functionality, styled purely with CSS. Once an account is created (or guest account), you will have access to your to do list which can be used to; add, edit, delete, and check tasks, each with their own priority level.

Live project [_here_](https://to-do-app-willswats.herokuapp.com/).

## Table of Contents

- [To Do App](#to-do-app)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Features](#features)
  - [Setup](#setup)

## General Information

I built this project to refresh my mind on everything I learnt through completing [The Web Developer Bootcamp 2021](https://www.udemy.com/course/the-web-developer-bootcamp) course. The app's purpose is to be a list where you can write down your tasks for the day so that you do not forget them. As you complete your tasks you can tick them off so you know what you've completed. Your tasks will all be saved under the account you create.

## Features

- Full CRUD functionality
- Full statefulness through MongoDB
- Account creation
- Guest accounts
- Authentication
- Authorization
- Priority level for tasks
- Checkboxes for each task

## Setup

Clone this repo to your desktop and run ```npm install``` to install all dependencies.

After installing the dependencies, run MongoDB locally with `mongod`.

You can then run ```npm start``` to start the application. You will then be able to access it at localhost:3000
