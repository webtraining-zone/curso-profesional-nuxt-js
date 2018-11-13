export default function({error}) {
  const isUserAuthenticated = false;
  if (!isUserAuthenticated) {
    error({
      message: 'Please, start a session',
      statusCode: 403,
    });
  }
}
