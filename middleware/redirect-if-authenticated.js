// A middleware receives the context as first argument -> https://nuxtjs.org/guide/routing#middleware
// https://nuxtjs.org/api/context
export default function({store, app, redirect}) {

  const authUser = store.state.authUser;

  if (authUser) {
    // app.$router.push('/private/my-account');
    redirect(302, '/private/my-account');
  }

}
