import express,{ Router } from 'express'
import { loginRouter  } from './Auth.Router'

export const router : Router = express.Router() 

router.use('/auth',loginRouter)

