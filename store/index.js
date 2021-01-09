import axios from 'axios';

export const state = () => ({
  authUser: null,
});

export const mutations = {
  SET_USER: function (state, user) {
    console.log('>> Mutation: SET_USER() > user', user);
    state.authUser = user;
  },
};

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({commit}, {req}) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser);
    }
  },
  async login({commit}, {username, password}) {
    const {data} = await axios.post(`/api/login`,
      {username, password});

    if (data.error) {
      // `data.error.message` is the message we set at `api/index.js`
      throw new Error(data.error.message)
    } else {
      commit('SET_USER', data);
    }
  },

  async logout({commit}) {
    await axios.post(`/api/logout`);
    commit('SET_USER', null);
  },

};
