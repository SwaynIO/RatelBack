module.exports = ({ env }) => ({

  seo: {
    enabled: true,
  },

  graphql: {
    enabled: true,
  },

  ezforms: {
    config: {
      captchaProvider: {
        name: 'recaptcha',
        config: {
          secretKey: env('RECAPTCHA_ACCESS'),
          minimumScore: 0.5
        }
      },
      notificationProviders: [
        {
          name: 'email',
          enabled: true,
          config: {
            from: 'antoine.jacoulet@ratelroche.com'
          }
        }
      ]
    }
  },

  migrations: {
    enabled: true,
    config: {
      autoStart: true,
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