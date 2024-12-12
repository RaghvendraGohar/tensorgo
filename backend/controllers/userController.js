export function getUserProfile(req, res) {
    res.json({ user: req.user });
  }
  