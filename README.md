**NFT RARITY RANKER**

CLICK  PLAY  BUTTON  TO  SEE HOW  IT  WORKS,

This Project is a fork of Ethereum Boilerplate and  demonstrates how you can build your own NFT Rarity Ranker.

https://user-images.githubusercontent.com/68326324/154748358-f288d51c-d5f5-4973-9f3d-3236c6af8a67.mp4

**⭐️ Star us**
If this boilerplate helps you build Ethereum dapps faster - please star this project, every star makes us very happy!

_Quick Start_

📄 Clone or fork NFT Rarity Ranking

🔎 Navigate to the generator folder and initialize the rarity generator and install moralis

npm install moralis or yarn install moralis

🖼️ Provide your appId and serverUrl and desired collectionAddress and collectionName in the main.js file

const serverUrl = ""; //Moralis Server Url here
const appId = ""; //Moralis Server App ID here


const collectionAddress = ""; //Collection Address Here
const collectionName = ""; //CollectioonName Here


🏃 Run the Rarity Generator

node main.js

💿 Return to the Origin Repo and Install all dependencies:

npm install

✏  In Index.js Replace  AppId  And  Server URL,  and provide your appId and serverUrl from Moralis

<MoralisProvider appId='YOUR_APP_ID' serverUrl='Your_Server_URL'>
  
  ⚠️ in production make sure you keep this information in a secured enviroment .env file
  
  ** Add the NFT collection as an Option(s) to the Select Input (with value corresponding to the collectionName used when running the rarity generator)**
  
  <Option value="YOUr COLLECTION NAME"> Collcetion Name </Option> 
  
  
  🚴‍♂️ Run your App:
  
  npm start  / yarn start




