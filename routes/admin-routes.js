const {
  addAdmin,
  adminLogin,
  getAdminById,
  getAdmins,
} = require("../controllers/admin-controller");
const express = require("express");
const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/", getAdmins);
adminRouter.get("/:id", getAdminById);

// export default adminRouter;
module.exports = adminRouter;
