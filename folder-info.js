import process from "node:process"
import path from "node:path"
import fs from "node:fs/promises"

const inputPath = process.argv[2];
const folderPath = inputPath ? path.resolve(inputPath) : process.cwd();

let items;

try {
    items = await fs.readdir(folderPath, {withFileTypes: true})
} catch {
    console.error(`error: could not read folder: ${inputPath || folderPath}`);
    process.exitCode = 1;
}

if (items) {
    const fileCount = items.filter((item) => item.isFile()).length;
    const folderCount = items.filter((item) => item.isDirectory()).length;

    console.log(`Folder: ${path.basename(folderPath)}`);
    console.log(`Path: ${folderPath}`);
    console.log(`Files: ${fileCount}`);
    console.log(`Folders: ${folderCount}`);
}
