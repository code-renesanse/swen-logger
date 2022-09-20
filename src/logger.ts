import { Message } from "./message.model";

export let log = (text: string) => {
    console.log(`%c${text}`);
};

export let developmentLog = (message: Message) => {
    if(!process.env.APP_NAME) {
        errorLog("No valid APP_NAME enviromantal variable");
    }
    
    if(!process.env.NODE_ENV) {
        errorLog("No valid NODE_ENV enviromantal variable");
    }    
    
    if(process.env.NODE_ENV === 'development') {
        console.log(`[ ${process.env.APP_NAME} ]: ${message}`);
    }
};

export let errorLog = (message: Message) => {
    if(!process.env.APP_NAME) {
        console.log("No valid APP_NAME enviromantal variable");
        return;
    }
    let isNode=new Function("try {return this===global;}catch(e){return false;}");
    
    console.error(`[ ${process.env.APP_NAME} ]: ${message}`);
    !isNode() ? alert(`[ ${process.env.APP_NAME} ]: ${message}`) : '';
    throw new Error(`[ ${process.env.APP_NAME} ]: ${message}`);
};
