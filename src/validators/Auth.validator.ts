import Joi,{ ObjectSchema } from '@hapi/joi'

export const loginRestaurantValidator:ObjectSchema=Joi.object({
    restaurantId:Joi.string().required(),
    username:Joi.string().required(),
    password:Joi.string().required(),
    roleId :Joi.number().required()
})

