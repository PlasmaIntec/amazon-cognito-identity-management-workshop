// This file is used for manual configuration of the Amplify library.
// When Amplify is used in conjunction with the Amplify CLI toolchain or AWS Mobile Hub to manage backend resources,
// an aws-exports.js file is auto-generated and can be used instead of the below to automatically configure the Amplify library.
// In this workshop, we are using the Amplify client libraries without the CLI toolchain so you should edit this file manually.

const awsConfig = {
    Auth: {
        identityPoolId: 'us-east-1:397c6551-8cde-4770-b629-5780ce7e0ac0', // example: 'us-east-2:c85f3c18-05fd-4bb5-8fd1-e77e7627a99e'
        region: 'us-east-1', // example: 'us-east-2'
        userPoolId: 'us-east-1_iDQgakFgv', // example: 'us-east-2_teEUQbkUh'
        userPoolWebClientId: '3f85jrj95fok3lpn0oplqic43j' // example: '3k09ptd8kn8qk2hpk07qopr86'
    },
    API: {
        endpoints: [
            {
                name: 'WildRydesAPI',
                endpoint: 'https://vo93x7aarj.execute-api.us-east-1.amazonaws.com/prod', // example: 'https://u8swuvl00f.execute-api.us-east-2.amazonaws.com/prod'
                region: 'us-east-1' // example: 'us-east-2'
            }
        ]
    },
    Storage: {
        bucket: 'serverless-idm-backend-profilepicturesbucket-17z01ccmldfcp', //example: 'wildrydesbackend-profilepicturesbucket-1wgssc97ekdph'
        region: 'us-east-1' // example: 'us-east-2'
    }
}

export default awsConfig;
