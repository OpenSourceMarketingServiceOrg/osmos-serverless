const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
}

const osmose = require('osmose-email-engine');

module.exports.postEmail = (event, context, callback) => {
    console.log("Going to post a great email!");
    // console.log(event);
    console.log(event.body);
    event.body = JSON.parse(event.body);

    event.body.to.ToAddresses.forEach((toAddy) => {

        let destination = {
            BccAddresses: event.body.to.BccAddresses,
            CcAddresses: event.body.to.CcAddresses,
            ToAddresses: [
                toAddy
            ]
        }

        let email = {
            subject: event.body.subject,
            body: event.body.content
        };
        let from = event.body.from;

        console.log("<<<<<<<<<<<<<<<<<<  osmose  >>>>>>>>>>>>>>>>>>>");
        console.log(from);
        console.log("<<<<<<<<<<<<<<<<<<  destination  >>>>>>>>>>>>>>>>>>>");
        console.log(destination);
        console.log("<<<<<<<<<<<<<<<<<<  email  >>>>>>>>>>>>>>>>>>>");
        console.log(email);

        osmose.osmoseSendEmail(destination, email, from);
    });

    response = {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({
            message: "EMAIL SENT!"
        })
    };
    callback(null, response);
}