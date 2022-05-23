# Superheros

Usage

To get started, transfer the repository to your computer, this is done in two ways:

1.
$git init

$git clone 'git@github.com:DanilaHashnikov/Superheros.git'

2.
$git init

$git remote add origin 'git@github.com:DanilaHashnikov/Superheros.git'

$git pull origin master


After installation, you must install node_modules in the root folder of the project in the client and server folders with the command
$npm install.

Navigate folders
cd.. - back
cd <folderName> - go to folderName.

After everything go back to the root folder of the project and run the script

$npm run dev

this script will run both front and back parts.
go to the browser and check the result on http://localhost:3000/

The project implemented a REST API with access to all CRUD operations with heroes. The project does not implement pagination and work with images.