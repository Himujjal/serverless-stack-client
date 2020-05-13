export default {
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-uploads-himu",
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://jyt1csj57i.execute-api.ap-south-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_3u4IG0u1d",
    APP_CLIENT_ID: "52bm38e39443ala2laibqtakea",
    IDENTITY_POOL_ID: "ap-south-1:caf36977-2df8-49a8-b8a5-336e4cc42f4d",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};
