import { UserModel } from '../resources/user/model';

declare global {
    namespace Express {
        interface Request {
            user?: UserModel;
        }
    }
} 