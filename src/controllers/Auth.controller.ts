import { Request,Response,NextFunction } from 'express'
import { env } from '../config'
import { LoginRestaurantInterface } from '../interface/Auth.interface'

export function loginRestaurantController(req:Request,res:Response,next:NextFunction):void {
   const {username,roleId } = req.body as LoginRestaurantInterface
   console.log( roleId )
   console.log(username)
   console.log(env)
   res.send("hello world")
}