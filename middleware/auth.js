export default function({store, error}) {

  // User is not authenticated
  const authUser = store.state.authUser;

  console.log(">> Middleware AUTH > authUser > ", authUser);

  if (!authUser) {
    error({
      message: 'Please start a session to see this page',
      statusCode: 403,
    });
  }

}
