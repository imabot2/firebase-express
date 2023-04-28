// Import the router
import express from "express";
const router = new express.Router();

// Route /example/
router.get("/", (req, res) => {
    res.send(`<h1>Example page</h1>`);
});

// Export the router
export const exampleRouter = router;