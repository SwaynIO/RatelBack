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
<<<<<<< HEAD
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
=======
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('729419000409'),
        secretAccessKey: env('f7cbb63ed3e285e6ff25afe81d3fbaad306bac3909966d5c855fb51b859cefa5'),
        region: env('eu-west-3'),
        params: {
          Bucket: env('ratelroche'),
        },
>>>>>>> parent of 89f67b4 (Update .strapi-updater.json)
      },
    }
  }
});