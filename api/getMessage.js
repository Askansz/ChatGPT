// api/getMessages.js
module.exports = async (req, res) => {
  const { url } = req.query;

  // Logic to retrieve messages for the given URL

  const messages = [
    { text: 'Hello!', sender: 'User1' },
    { text: 'Hi there!', sender: 'User2' },
  ];

  res.status(200).json({ success: true, messages });
};
