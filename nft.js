let myNFT = {
  name: "Magical Unicorn",
  color: "Rainbow",
  accessories: ["Golden horn", "Diamond necklace"],
  powers: ["Flight", "Teleportation", "Invisibility"],
  artist: "John Doe",
  yearCreated: 2022,
  description: "This NFT represents a magical unicorn with unique powers and stunning accessories.",
};

let allNFTs = [myNFT]; // store all NFTs in an array

function printNFTDetails(nft) {
  console.log(`Name: ${nft.name}`);
  console.log(`Color: ${nft.color}`);
  console.log(`Accessories: ${nft.accessories}`);
  console.log(`Powers: ${nft.powers}`);
  console.log(`Artist: ${nft.artist}`);
  console.log(`Year Created: ${nft.yearCreated}`);
  console.log(`Description: ${nft.description}`);
}

printNFTDetails(myNFT); // print details of myNFT to console
