import { Router } from 'express';
import { MobleRouter } from '../../module/moble.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/mobles',
    route: MobleRouter,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;