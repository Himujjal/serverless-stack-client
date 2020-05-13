const dev = {
  STRIPE_KEY: "pk_test_MV32hRB0WlDixj8tzwU3FKEN003XOZAqWq",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-2-api-himu-dev-attachmentsbucket-klea3nc5hcqh",
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://yn9ct9ito6.execute-api.ap-south-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_CZHH3EfBh",
    APP_CLIENT_ID: "3ft8968g3rlf0q8g0aap0o5fp6",
    IDENTITY_POOL_ID: "ap-south-1:02a53259-d91b-448c-8128-2b31967770a9",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_MV32hRB0WlDixj8tzwU3FKEN003XOZAqWq",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-2-api-himu-prod-attachmentsbucket-pf8iahh1mltp",
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://yn9ct9ito6.execute-api.ap-south-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_C5FKOx4bp",
    APP_CLIENT_ID: "4cg7dv0khftcbfdvvef2r3js3p",
    IDENTITY_POOL_ID: "ap-south-1:c9631d77-0bc8-4328-9c95-fc4dc27e5f47",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
