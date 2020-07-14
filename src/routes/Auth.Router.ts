import express,{ Router } from 'express'
import { loginRestaurantController } from '../controllers/Auth.controller'
import { createValidator,ExpressJoiInstance } from 'express-joi-validation'
import { loginRestaurantValidator  } from '../validators/Auth.validator'


const validator:ExpressJoiInstance = createValidator({})
 
export const loginRouter : Router = express.Router();

loginRouter.route('/loginRestaurant')
.post(validator.body(loginRestaurantValidator),loginRestaurantController)

