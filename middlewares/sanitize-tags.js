const striptags = require("striptags");

// XSS - Cross-site scripting:
function sanitizeTags( request,response,next){
    for (const property in request.body){
        if(typeof request.body[property] === "string"){
            request.body[property] = striptags(request.body[property]);
        }
    }
    next();
}

module.exports = sanitizeTags;