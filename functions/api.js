// Import the router
import express from "express";
const router = new express.Router();

// Route /api/
router.get("/", (req, res) => {
    res.send(`<h1>Root of /api/</h1>`);
});

// Route /api/:id
router.get("/:id", (req, res) => {
  res.send(`<h1>/api/${req.params.id}</h1>`);
});

// Export the router
export const apiRouter = router;