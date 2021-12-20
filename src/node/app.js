const message = "Hello World!";

module.exports.lambdaHandler = async (event) => {

    const responseBody = {
        "key3": "value3",
        "key2": "value2",
        "key1": "value1"
    };

    const response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": JSON.stringify(message),
        "isBase64Encoded": false
    };

    return response;
};
