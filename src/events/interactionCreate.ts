import { Events, Interaction } from "discord.js";
import { ExtendedClient, IEvent } from "../bot";
import { handleSlashCommand } from "../handlers";

const event: IEvent = {
    name: Events.InteractionCreate,
    once: false,
    async execute(client: ExtendedClient, interaction: Interaction): Promise<void> {
        if(interaction.isButton())
            console.log("Button !");
        else if(interaction.isCommand())
            handleSlashCommand(client, interaction);
        else if(interaction.isContextMenuCommand())
            console.log("Menu !");
        else if(interaction.isModalSubmit())
            console.log("Modal !");
    },
};

export default event;