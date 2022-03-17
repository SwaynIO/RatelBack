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
  }
});