/*
  ____  _                 _        ____  _             
 / ___|(_)_ __ ___  _ __ | | ___  |  _ \(_)_ __   __ _ 
 \___ \| | '_ ` _ \| '_ \| |/ _ \ | |_) | | '_ \ / _` |
  ___) | | | | | | | |_) | |  __/ |  __/| | | | | (_| |
 |____/|_|_| |_| |_| .__/|_|\___| |_|   |_|_| |_|\__, |
                   |_|                           |___/ 


    A simple ping-prevention discord bot
*/

const nodelogger = require('hyperz-nodelogger');
const chalk = require('chalk');

module.exports = {
    name: 'ready',
    async execute(H4r1ey) {


        if(!H4r1ey.config.mainConfig.botToken) throw new Error(chalk.red(`Please provide a bot token. Without one you cannot run any commands!`))

        const logger = new nodelogger()
        logger.hypelogger(`${H4r1ey.user.tag}`, '500', `blue`, `${chalk.blue("I am online and running!")}\n\n${chalk.red("Simple Ping")}\n${chalk.yellow(`Bot Started Successfully`)}`, 'disabled', `blue`, 'double', false)
    }
}