export default function({error}) {

  // User is not authenticated
  const isUserAuthenticated = false;

  if (!isUserAuthenticated) {
    error({
      message: 'Please start a session to see this page',
      statusCode: 403,
    });
  }

}
