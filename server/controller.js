module.exports = {
  registerUser: (req, res) => {
    let db = req.app.get("db");
    let { username, password } = req.body;
    let { user } = req.session;
    db
      .create_user([username, password])
      .then(result => {
        user = result[0].username;
        res.status(200).send(result[0]);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send();
      });
  },

  loginUser: (req, res) => {
    let db = req.app.get("db");
    console.log(req.session, "login endpoint hit");

    let { username, password } = req.body;

    console.log(req.body);
    db
      .find_user([username, password])
      .then(result => {
        req.session.user = result[0];
        req.session.user.id = result[0].id;
        res.status(200).send(result);
        console.log(result, req.session.user.id);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send("Please Register");
      });
  },
  getProperties: (req, res) => {
    let db = req.app.get("db");
    console.log("fetching properties");
    let user_id = req.session.user.id;
    db
      .getProperties([user_id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(() => res.status(500).send());
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send(req.session);
    console.log("session ended");
  },
  addProperty: (req, res) => {
    let db = req.app.get("db");
    console.log(req.session.user.id);
    let user_id = req.session.user.id;
    let {
      propertyName,
      propertyDescription,
      address,
      city,
      State,
      zip,
      imageUrl,
      loanAmount,
      monthlyMortgage,
      desiredRent
    } = req.body;
    db
      .addProperty(
        user_id,
        propertyName,
        propertyDescription,
        address,
        city,
        State,
        zip,
        imageUrl,
        loanAmount,
        monthlyMortgage,
        desiredRent
      )
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(() => res.status(500).send());
    console.log("Property Added");
  },

  deleteProperty: (req, res) => {
    let db = req.app.get("db");
    let id = req.params.id;
    // let user_id = req.session.user.id;
    db.deleteProperty(id).then(resp => {
      res.status(200).send(resp);
    });
  }
};
