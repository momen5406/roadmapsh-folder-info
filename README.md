# Node.js Folder Info

A small command-line project that displays a folder's name, absolute path, and the number of files and subfolders it contains. It uses Node.js built-in modules, so no third-party packages are required.

Project brief: [roadmap.sh: Node.js Folder Info](https://roadmap.sh/projects/nodejs-folder-info)

## Requirements

- Node.js 18 or newer

## Run

From the project root, pass the folder path you want to inspect:

```bash
node folder-info.js ./folder
```

You can also run it without an argument to inspect the current working directory:

```bash
node folder-info.js
```

The output includes the folder name, resolved absolute path, immediate file count, and immediate subfolder count. Entries inside nested subfolders are not counted.

To inspect another folder, provide its path as the first argument. Relative paths are resolved from the directory where the command is run.
