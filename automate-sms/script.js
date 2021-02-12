var twilio = require('twilio');
// Linking my Twilio account SID and auth token
var client = new twilio('AC05d56983046b42e13620a6518a7c3cf8', '26fae5652cb2af0d60569dda733e6bcb');
// Send the text message
client.messages.create({
    to: '+12196718621',
    from: '+12019879761',
    body: 'Hi there, Sherouk! I\'m not a creep.'
});