const Questions = require('./lib/prompt')

const prompt = new Questions();

//Prompt will call a function to prompt users and eventually build our svg file
prompt.run()