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
          secretKey: '6Lex_eoeAAAAADtrA1iZfkbsdK0d_cxXDy-nH6km',
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
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIA2TVGCVJM6Y3ZUAV4'),
        secretAccessKey: env('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'),
        region: env('eu-west-3'),
        params: {
          Bucket: env('ratelroche'),
        },
      },
    },
  },
});