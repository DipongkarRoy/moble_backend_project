
import catchAsyne from '../../app/utils/catchAsyne';
import { mobleService } from './moble.service';

const createMoble = catchAsyne(async (req, res) => {
  const result = await mobleService.createMobleToDb(req.body);
  res.status(200).json({
    success: true,
    massage: 'Moble data create successfully !',
    data: result,
  });
});

const allMoblleData = catchAsyne(async(req ,res)=>{
    const result = await mobleService.allMobleToDb(req.query)
    res.status(200).json({
        success: true,
        massage: 'Moble data reacived successfully !',
        data: result,
      });
})

export const mobleController = {
  createMoble,
  allMoblleData
};
