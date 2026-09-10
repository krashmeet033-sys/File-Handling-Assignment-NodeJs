const fs = require('fs');


const originalFile = 'student.txt';
const renamedFile = 'studentDetails.txt';


const studentData = `Name: Rashmeet Kaur
Course: Full Stack Development
Technology: Node.js`;


fs.writeFile(originalFile, studentData, (err) => {
    if (err) {
        console.log('Error creating file:', err);
        return;
    }

    console.log('File created successfully');

   
    fs.readFile(originalFile, 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        console.log('\nStudent Information:');
        console.log(data);

        const additionalData = `\nExperience: 1 Year
City: Kolkata`;

        fs.appendFile(originalFile, additionalData, (err) => {
            if (err) {
                console.log('Error updating file:', err);
                return;
            }

            console.log('\nData updated successfully');

           
            fs.rename(originalFile, renamedFile, (err) => {
                if (err) {
                    console.log('Error renaming file:', err);
                    return;
                }

                console.log('File renamed successfully');

                
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
