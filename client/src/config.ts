// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '...'
export const apiEndpoint = `https://${apiId}.execute-api.ap-southeast-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'test-endpoint.au.auth0.com', // Auth0 domain
  clientId: 'Sb3JXMshveVusf4r9ShKG15FIfd5yu7R', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
