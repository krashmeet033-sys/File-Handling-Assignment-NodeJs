const fs = require('fs');


const originalFile = 'student.txt';
const renamedFile = 'studentDetails.txt';


const studentData = `Name: Rashmeet Kaur
Course: Full Stack Development
Technology: Node.js`;

// Task 1 
fs.writeFile(originalFile, studentData, (err) => {
    if (err) {
        console.log('Error creating file:', err);
        return;
    }

    console.log('File created successfully');

// Task 2 
    fs.readFile(originalFile, 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        console.log('\nStudent Information:');
        console.log(data);
// Task 3
        const additionalData = `\nExperience: 1 Year
City: Kolkata`;

        fs.appendFile(originalFile, additionalData, (err) => {
            if (err) {
                console.log('Error updating file:', err);
                return;
            }

            console.log('\nData updated successfully');

// Task 4
            fs.rename(originalFile, renamedFile, (err) => {
                if (err) {
                    console.log('Error renaming file:', err);
                    return;
                }

                console.log('File renamed successfully');

// Task 5
                fs.unlink(renamedFile, (err) => {
                    if (err) {
                        console.log('Error deleting file:', err);
                        return;
                    }

                    console.log('File deleted successfully');
                });
            });
        });
    });
});
