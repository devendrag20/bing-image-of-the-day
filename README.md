## Basic Info
* Download and set the Bing picture of the day as Desktop Background
* Works on linux
* Made using Node Js
* Tested on Ubuntu 14.04

## Installation
* Clone this repository
* Install Node Js
* Go to project folder
```
npm install
```
* Edit start.sh (Don't change "picture.jpg", edit this command as per your linux distro)
* Current setting are for Ubuntu
```
gsettings set org.gnome.desktop.background picture-uri file://path/to/your/project/folder/picture.jpg
```
* Make start.sh executable
```
sudo chmod +x start.sh
```

## Usage
* Execute start.sh
```
./start.sh
```
## License
BingImage is licensed under the MIT License.


