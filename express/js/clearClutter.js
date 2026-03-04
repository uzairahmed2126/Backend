// import fs from "fs";
// import path from "path";
// const folderPath = __dirname;

// const ext = path.extname(fs)

// fs.readdir(folderPath, (err, files) => {
//     files.forEach(file => {
//         const fullPath = path.join(folderPath, file);
//         if (fs.lstatSync(fullPath).isFile()) {

//             const ext = path.extname(file).slice(1);

//             if (!ext) return;

//             const extFolder = path.join(folderPath, ext);

//             if (!fs.existsSync(extFolder)) {
//                 fs.mkdirSync(extFolder);
//             }

//             const newPath = path.join(extFolder, file);

//             fs.renameSync(fullPath, newPath);
//         }
//     })
// })
import fs from "fs";
import path from "path";

const folderPath = import.meta.dirname; // current folder

fs.readdir(folderPath, (err, files) => {
    if (err) return console.log("Error reading directory");

    files.forEach(file => {

        const fullPath = path.join(folderPath, file);

        if (fs.lstatSync(fullPath).isFile()) {

            const ext = path.extname(file).slice(1);

            if (!ext) return;

            const extFolder = path.join(folderPath, ext);

            if (!fs.existsSync(extFolder)) {
                fs.mkdirSync(extFolder);
            }

            const newPath = path.join(extFolder, file);

            fs.renameSync(fullPath, newPath);
        }
    });
});