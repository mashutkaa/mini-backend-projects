import fs from "fs";

const parseData = (filePath) => {
    if (!fs.existsSync(filePath)) {
        console.log("Error! File with tasks hasn`t been created.");
        return null;
    }

    const data = fs.readFileSync(filePath, "utf-8");

    if (!data.trim()) {
        return [];
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.log("Error! Invalid JSON format.");
        return null;
    }
};

export default parseData;
