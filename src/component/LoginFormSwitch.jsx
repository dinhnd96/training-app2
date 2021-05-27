try {
  const { data } = await axios.put(
    "http://localhost:2017/user/update-password/60a71379238df5419488db23",

    {
      currentPassword: "Long@!12345",
      newPassword: "Long@!123",
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );