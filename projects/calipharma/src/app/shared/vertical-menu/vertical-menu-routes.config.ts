import {
  ENROLL_USER_PATH,
  HOME_PATH,
} from 'projects/sdk/src/lib/constants/path.names';
import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: `${HOME_PATH}`,
    title: 'Home',
    icon: 'ft-home',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [],
    roleExclusionList: [],
  },
  {
    path: `${ENROLL_USER_PATH}`,
    title: 'Enroll User',
    icon: 'ft-edit',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [],
    roleExclusionList: [],
  },
];
