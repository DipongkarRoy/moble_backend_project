import express from 'express'
import { mobleController } from './moble.controller';

import { MobleValidation } from './moble.validation';
import validateRequst from '../../app/utils/validateRequst';

const router = express.Router()
router.post('/create-moble' , validateRequst(MobleValidation.TMobleValited) ,mobleController.createMoble)
router.get('/' ,mobleController.allMoblleData)



export const MobleRouter = router ;