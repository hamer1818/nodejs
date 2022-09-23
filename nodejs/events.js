const Logger = require('./logger');
const logger = new Logger();
//listener kayıt et

logger.on('connection',function(args){
    console.log('connection eventi oluştu',args);
});

//event'i tetikle

logger.log('hamzaortatepe login oldu');