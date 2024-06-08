import { queryBuilder } from '../app/builder/queryBuilder';
import { searchAbleFields } from './moble.constant';
import { TMoble } from './moble.interface';
import { MobleModel } from './moble.model';

const createMobleToDb = async (payload: TMoble) => {
  const result = await MobleModel.create(payload);
  return result;
};

const allMobleToDb = async (query: Record<string, unknown>) => {
  //no:1 :searchTerm code:
  // let searchTerm = '';
  // if (query?.searchTerm) {
  //   searchTerm = query.searchTerm as string;
  // }

  // const searchAbleFields = ['email', 'price', 'model'];
  // const searchMoble = MobleModel.find({
  //   $or: searchAbleFields.map((fields) => ({
  //     [fields]: { $regex: searchTerm, $options: 'i' },
  //   })),
  // });

  //no:2 paginate work:
  // const limit: number = Number(query?.limit || 5);
  // let skip: number = Number(query?.skip || 0);

  // if (query?.page) {
  //   const page: number = Number(query.page || 1);
  //   skip = Number((page-1)*limit)
  // }
  // const skipQuery = searchMoble.skip(skip)
  // const limitQuery = skipQuery.limit(limit)

  //no:3 sortBy Data given :

  // let sortBy ='-price'

  // if (query?.sortBy) {
  //   sortBy = query?.sortBy as string
  // }
  // const sortQuery = limitQuery.sort(sortBy)

  //Fields query Fiitering by json data :

  //  const fields = (query?.fields as string)?.split(',')?.join(' ') || '-__v'

  //  const fieldsQuery = sortQuery.select(fields)

  // const queryObj = { ...query };
  // console.log(queryObj);
  // const excludeFields = ['searchTerm' ,'limit',"page" ,'sortBy' ,'fields'];
  // excludeFields.forEach((e) => delete queryObj[e]);

  const mobleQuery = new queryBuilder( query ,MobleModel.find() )
    .search(searchAbleFields)
    .paginate()
    .sort()
    .fields()
    .filter()
  const result = await mobleQuery.modelQuery;
  return result;
};

export const mobleService = {
  createMobleToDb,
  allMobleToDb,
};
