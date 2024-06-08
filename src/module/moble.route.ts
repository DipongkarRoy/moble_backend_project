import express from 'express'
import { mobleController } from './moble.controller';
import validateRequst from '../app/utils/validateRequst';
import { MobleValidation } from './moble.validation';

const router = express.Router()
router.post('/create-moble' , validateRequst(MobleValidation.TMobleValited) ,mobleController.createMoble)
router.get('/' ,mobleController.allMoblleData)



export const MobleRouter = router ;