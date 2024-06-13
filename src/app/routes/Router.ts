import { Router } from 'express';
import { MobleRouter } from '../../module/moble/moble.route';
import { userRouter } from '../../module/user/user.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/mobles',
    route: MobleRouter,
  },
  {
    path:'/users',
    route:userRouter 
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;