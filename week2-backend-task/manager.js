const fs = require('fs');

// 1. Create a directory called 'logs'
if (!fs.existsSync('logs')) {
    fs.mkdirSync('logs');
}

// 2. Write "System initialized" to 'info.txt' inside the 'logs' folder
fs.writeFileSync('logs/info.txt', 'System initialized');

// 3. Read the file and print the content to the terminal
const data = fs.readFileSync('logs/info.txt', 'utf8');
console.log(data);