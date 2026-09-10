const fs = require('fs');

// File names
const originalFile = 'student.txt';
const renamedFile = 'studentDetails.txt';

// Student information
const studentData = `Name: Rashmeet Kaur
Course: Full Stack Development
Technology: Node.js`;

// Task 1: Create student.txt using fs.writeFile()
fs.writeFile(originalFile, studentData, (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }

    console.log('File created successfully');

    // Task 2: Read student.txt using fs.readFile()
    fs.readFile(originalFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        console.log('\nStudent Information:');
        console.log(data);

        // Task 3: Update student.txt using fs.appendFile()
        const additionalData = `\nExperience: 1 Year
City: Kolkata`;

        fs.appendFile(originalFile, additionalData, (err) => {
            if (err) {
                console.error('Error updating file:', err);
                return;
            }

            console.log('\nData updated successfully');

            // Task 4: Rename student.txt to studentDetails.txt
            fs.rename(originalFile, renamedFile, (err) => {
                if (err) {
                    console.error('Error renaming file:', err);
                    return;
                }

                console.log('File renamed successfully');

                // Task 5: Delete studentDetails.txt using fs.unlink()
                fs.unlink(renamedFile, (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                        return;
                    }

                    console.log('File deleted successfully');
                });
            });
        });
    });
});
