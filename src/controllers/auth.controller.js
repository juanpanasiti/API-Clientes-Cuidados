import * as AuthDomain from "../domain/auth.domain";

export const signUp = async (req, res) => {
  try {
    const newUser = await AuthDomain.signUp(req.body)
    res.status(newUser.status || 200).json(newUser.user)
  } catch (error) {
    res.status(error.status || 400).json(error)
  }
};//signUp()

export const signIn = async (req, res) => {
  res.json({ message: "sign in!" });
};//signIn()
