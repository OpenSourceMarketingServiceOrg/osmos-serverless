const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({
  apiVersion: '2012-08-10'
});

exports.updateItem = (params)=> {
  return new Promise((resolve, reject) => {
    dynamodb.updateItem(params, (err, data) => {
      if (err) {
        console.error(err);
        console.error("These params were rejected: ", params);
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}
