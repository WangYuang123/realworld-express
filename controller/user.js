exports.showLoginPage = async (req, res, next) => {
  try {
    res.render("login.html", {
      isLogin: true,
    });
  } catch (err) {
    next(err);
  }
};

exports.showRegisterPage = async (req, res, next) => {
  try {
    res.render("login.html", {
      foo: 'node foo'
    });
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try {
    res.send('post register')
  } catch (err) {
    next(err);
  }
};

exports.showSettingsPage = async (req, res, next) => {
  try {
    res.render("settings.html");
  } catch (err) {
    next(err);
  }
};

exports.showProfilePage = async (req, res, next) => {
  try {
    res.render("profile.html");
  } catch (err) {
    next(err);
  }
};
