module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '837a4dd99992ecb4661469de584e05c1'),
  },
});
