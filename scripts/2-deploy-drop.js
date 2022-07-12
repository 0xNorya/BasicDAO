import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
    try {
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            //Collection Name
            name: "LonelyDAO Lonership", 
            //Collection Description
            description: "A DAO by loners for loners, the inquisitive, and introspective.",
            //Collection Image 
            image: readFileSync("scripts/assets/Lonership.png"),
            // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the contract.
            // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
            // you can set this to your own wallet address if you want to charge for the drop.
            primary_sale_recipient: AddressZero,
        });

        // this initialization returns the address of our contract
        // we use this to initialize the contract on the thirdweb sdk

        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        //with this, we can get the metadata of our contract
        const metadata = await editionDrop.metadata.get();

        console.log("Successfully deployed editionDrop contract, address: ", editionDropAddress);
        console.log("editionDrop metadata: ", metadata);
    } catch (error) {
        console.log("failed to deploy editionDrop contract", error);
    }
})();