/* eslint-disable import/extensions */
import home from '../views/pages/home.js';
import literationTest from '../views/pages/testLiteration.js';
import register from '../views/pages/auth/register.js';
import login from '../views/pages/auth/login.js';
import ForumDiskusi from '../views/pages/forumDiskusi.js';

const routes = {
  '/': home,
  '/home': home,
  '/literationtest': literationTest,
  '/register': register,
  '/login': login,
  '/forumdiskusi': ForumDiskusi,
};

export default routes;
