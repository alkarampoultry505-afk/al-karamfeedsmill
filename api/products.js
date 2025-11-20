export default function handler(req, res) {
  const products = [
    { id: 1, name: "Starter Feed", rate: "Excellent" },
    { id: 2, name: "Grower Feed", rate: "High Quality" },
    { id: 3, name: "Finisher Feed", rate: "Premium" }
  ];
  
  return res.status(200).json({
    success: true,
    data: products
  });
}
