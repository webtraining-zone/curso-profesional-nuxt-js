import express from 'express';
import {USERS_BASE_URL} from '../config/api';
import axios from 'axios';

// Create express router
const router = express.Router();

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

// Add POST - /api/login
router.post('/login', async (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {

    const {data} = await axios.post(`${USERS_BASE_URL}/users/login`,
      {username, password});

    console.log('>> login() > data from LARAVEL', data);

    req.session.authUser = data;

    return res.json(data);
  }
  res.status(401).json({message: 'Bad credentials'});
})
;

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser;
  console.log('>> logout() from API');
  res.json({ok: true});
});

// Export the server middleware
export default {
  path: '/api',
  handler: router,
};
