module.exports = ({ env }) => ({

  seo: {
    enabled: false,
  },

  graphql: {
    enabled: false,
  },

  ezforms: {
    config: {
      captchaProvider: {
        name: 'recaptcha',
        config: {
          secretKey: '6Lex_eoeAAAAADtrA1iZfkbsdK0d_cxXDy-nH6km',
          minimumScore: 0.5
        }
      },
      notificationProviders: [
        {
          name: 'email',
          enabled: false,
          config: {
            from: 'antoine.jacoulet@ratelroche.com'
          }
        }
      ]
    }
  },

  migrations: {
    enabled: false,
    config: {
      autoStart: false,
      migrationFolderPath: 'migrations'
    },
  },

  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
    }
  }
});