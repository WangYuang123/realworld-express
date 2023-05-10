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
    res.render("login.html");
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const errors = [];
    if (!username) {
      errors.push("用户名不能为空");
    }
    if (!email) {
      errors.push("邮箱不能为空");
    }
    if (!password) {
      errors.push("密码不能为空");
    }
    res.render("login.html", { errors });
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
