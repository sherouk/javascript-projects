function automateSMS () {
    const twilio = require('twilio');
    
    // Linking my Twilio account SID and auth token
    const client = new twilio('SID', 'AUTHTOKEN');
    
    // Send the text message
    client.messages.create({
        to: '0000000000',
        from: '0000000000',
        body: 'Hi there! It\'s Sherouk :D'
    })
};
automateSMS();
