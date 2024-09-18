import { Router } from "express";
import {loginAdmin, logoutAdmin, registerUser} from "../controllers/admin.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router() 

// router.route('/register').post(registerUser)

router.route('/login').post(loginAdmin)

// secured route
router.route('/logout').post(verifyJWT,logoutAdmin)
export default router