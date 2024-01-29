// api/sendMessage.js
module.exports = async (req, res) => {
  const { url } = req.query;
  const { message } = req.body;

  // Logic to store the message (you can use a database or any storage mechanism)

  res.status(200).json({ success: true });
};
