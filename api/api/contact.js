export default function handler(req, res) {
  return res.status(200).json({
    success: true,
    contact: {
      phone: "0307-6388887",
      email: "ALKARAMPOULTRY505@GMAIL.COM",
      address: "Khairpur Special Economic Zone"
    }
  });
}
