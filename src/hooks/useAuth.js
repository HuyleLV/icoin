export const useAuth = () => {
  //get item from localstorage

  const _user = localStorage.getItem("_user");
  let user = null;
  if (_user) {
    user = JSON.parse(_user);
  }

  if (user && user.access_token != "") {
    return {
      auth: true,
    };
  } else {
    return {
      auth: false,
    };
  }
};
