# 📁 Node.js File Handling Assignment

A beginner-friendly Node.js assignment demonstrating **File System (fs) module operations** such as creating, reading, updating, renaming, and deleting files.

---

## 👩‍💻 Student Details

| Field            | Details                          |
| ---------------- | -------------------------------- |
| **Student Name** | Rashmeet Kaur                    |
| **Course**       | Full Stack Development           |
| **Technology**   | Node.js                          |
| **Project Type** | Node.js File Handling Assignment |

---

## 📌 Assignment Overview

This assignment demonstrates how to work with files in Node.js using the built-in **File System (`fs`) module**.

The program performs the following operations sequentially:

1. Creates a `student.txt` file using `fs.writeFile()`
2. Reads the file using `fs.readFile()`
3. Updates the file using `fs.appendFile()`
4. Renames the file using `fs.rename()`
5. Deletes the renamed file using `fs.unlink()`

The assignment helps understand basic file handling and asynchronous callback-based operations in Node.js.

---

## 🎯 Objectives

* Understand the Node.js `fs` module.
* Create and write data into a file.
* Read data from an existing file.
* Append additional information to a file.
* Rename a file programmatically.
* Delete a file using Node.js.
* Understand asynchronous file operations and callbacks.
* Handle errors using callback-based error handling.

---

## 🛠️ Technologies Used

* **Node.js**
* **JavaScript**
* **File System (`fs`) Module**
* **CommonJS Modules**
* **npm**

---

## 📂 Project Structure

```text
nodejs-file-handling-assignment/
│
├── index.js
├── package.json
└── README.md
```

### Files Description

| File           | Description                                     |
| -------------- | ----------------------------------------------- |
| `index.js`     | Contains the Node.js file-handling program      |
| `package.json` | Contains project metadata and npm configuration |
| `README.md`    | Project documentation                           |

---

## ⚙️ File System Methods Used

### 1. `fs.writeFile()`

Used to create `student.txt` and write the initial student information.

```javascript
fs.writeFile(originalFile, studentData, (err) => {
    // ...
});
```

---

### 2. `fs.readFile()`

Used to read and display the contents of `student.txt`.

```javascript
fs.readFile(originalFile, 'utf8', (err, data) => {
    // ...
});
```

---

### 3. `fs.appendFile()`

Used to add additional information to the existing file.

```javascript
fs.appendFile(originalFile, additionalData, (err) => {
    // ...
});
```

The following information is appended:

```text
Experience: 1 Year
City: Kolkata
```

---

### 4. `fs.rename()`

Used to rename:

```text
student.txt
```

to:

```text
studentDetails.txt
```

Example:

```javascript
fs.rename(originalFile, renamedFile, (err) => {
    // ...
});
```

---

### 5. `fs.unlink()`

Used to delete the renamed file after the required operations are completed.

```javascript
fs.unlink(renamedFile, (err) => {
    // ...
});
```

---

## ▶️ How to Run the Project

### Step 1: Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### Step 2: Navigate to the Project

```bash
cd nodejs-file-handling-assignment
```

### Step 3: Check Node.js Installation

```bash
node -v
```

Example:

```text
v24.x.x
```

### Step 4: Run the Program

Using npm:

```bash
npm start
```

Or directly using Node.js:

```bash
node index.js
```

---

## 💻 Expected Output

```text
File created successfully

Student Information:
Name: Rashmeet Kaur
Course: Full Stack Development
Technology: Node.js

Data updated successfully
File renamed successfully
File deleted successfully
```
<img width="878" height="410" alt="file-handling-output" src="https://github.com/user-attachments/assets/c2c4f895-b982-4d8b-9493-afd593b73186" />

---

## 📄 File Data

Initially, `student.txt` contains:

```text
Name: Rashmeet Kaur
Course: Full Stack Development
Technology: Node.js
```

After using `fs.appendFile()`, the file contains:

```text
Name: Rashmeet Kaur
Course: Full Stack Development
Technology: Node.js
Experience: 1 Year
City: Kolkata
```

The file is then renamed from:

```text
student.txt
```

to:

```text
studentDetails.txt
```

Finally, `studentDetails.txt` is deleted using `fs.unlink()`.

---

## 🔄 Program Flow

```text
Start
  ↓
Create student.txt
  ↓
Write Student Information
  ↓
Read student.txt
  ↓
Append Experience & City
  ↓
Rename student.txt
  ↓
studentDetails.txt
  ↓
Delete studentDetails.txt
  ↓
End
```

---

## 📚 Concepts Covered

* Node.js File System Module
* `require()`
* `fs.writeFile()`
* `fs.readFile()`
* `fs.appendFile()`
* `fs.rename()`
* `fs.unlink()`
* Callback Functions
* Error Handling
* Asynchronous File Operations
* CommonJS Modules

---

## 📦 package.json

The project uses the following configuration:

```json
{
  "name": "nodejs-file-handling-assignment",
  "version": "1.0.0",
  "description": "Node.js File Handling Assignment",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [],
  "author": "Rashmeet Kaur",
  "license": "ISC",
  "type": "commonjs"
}
```

---

## ✅ Conclusion

This assignment successfully demonstrates basic file handling operations in Node.js using the built-in `fs` module. The program creates, reads, updates, renames, and deletes a file while using callbacks for asynchronous execution and error handling. Through this assignment, the fundamental concepts of Node.js file system operations were practically implemented.

---

## 👩‍💻 Author

**Rashmeet Kaur**

**Course:** Full Stack Development
**Technology:** Node.js
