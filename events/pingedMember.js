/*

    #     #                       ######                  #     #  #####  
    ##   ## #    # ##### #      # #     #  ####  #####    #     # #     # 
    # # # # #    #   #   #      # #     # #    #   #      #     #       # 
    #  #  # #    #   #   #      # ######  #    #   #      #     #  #####  
    #     # #    #   #   #      # #     # #    #   #       #   #        # 
    #     # #    #   #   #      # #     # #    #   #        # #   #     # 
    #     #  ####    #   ###### # ######   ####    #         #     #####  


*/

const Discord = require(`discord.js`)

module.exports = {
    name: 'message',
    execute(message, H4r1ey) {



            if (message.author.bot) return;
            if (!message.guild) return;

            const user = H4r1ey.config.botSettings.doNotPingMembers
            if(message.author.id == user) return;

            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`\`❌\` **Please do not ping me!**`)
                .setFooter("©️ " + H4r1ey.config.botSettings.serverCopyright, H4r1ey.config.botSettings.serverIcon);

            if (user.some(e => message.content.toLowerCase().includes(e))) {
                message.channel.send(embed);
                return;
            }
    }
}