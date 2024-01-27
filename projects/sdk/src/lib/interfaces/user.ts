import { UserRoles } from '../enums/user.roles';

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  password: string;
  isPaymentDone: boolean;
  registeredOn: Date | string;
  lastPaymentDate: Date | string;
  authToken: string;
  profileImage: string;
  hasChangedDefaultPassword: boolean;
  roleList: UserRoles[];
}
