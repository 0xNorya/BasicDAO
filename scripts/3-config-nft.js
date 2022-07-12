import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xD02B5e6bAd4772c9201D8512E0f363210D7D8572");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Loner ship",
        description: "This NFT will give you access to LonelyDAO!",
        image: readFileSync("scripts/assets/Ship.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();