module.exports = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://jsonplaceholder.typicode.com/",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
      {
        source: "/create-pin",
        destination: "/auth/create-pin",
      },
      {
        source: "/pin-success",
        destination: "/auth/pin-success",
      },
      {
        source: "/reset-password",
        destination: "/auth/reset-password",
      },
      {
        source: "/confirm-reset-password",
        destination: "/auth/confirm-reset-password",
      },
      {
        source: "/home/dashboard",
        destination: "/main/home/dashboard",
      },
      {
        source: "/home/dashboard/history",
        destination: "/main/home/dashboard/history",
      },
      {
        source: "/home/transfer",
        destination: "/main/home/transfer",
      },
      {
        source: "/home/transfer/amount",
        destination: "/main/home/transfer/amount",
      },
      {
        source: "/home/transfer/confirmation",
        destination: "/main/home/transfer/confirmation",
      },
      {
        source: "/home/transfer/success",
        destination: "/main/home/transfer/success",
      },
      {
        source: "/home/profile",
        destination: "/main/home/profile",
      },
      {
        source: "/home/profile/change-password",
        destination: "/main/home/profile/change-password",
      },
      {
        source: "/home/profile/change-pin",
        destination: "/main/home/profile/change-pin",
      },
      {
        source: "/home/profile/personal-info",
        destination: "/main/home/profile/personal-info",
      },
      {
        source: "/home/profile/personal-info/add-phone-number",
        destination: "/main/home/profile/personal-info/add-phone-number",
      },
      {
        source: "/home/profile/personal-info/manage-phone-number",
        destination: "/main/home/profile/personal-info/manage-phone-number",
      },
    ];
  },
};
