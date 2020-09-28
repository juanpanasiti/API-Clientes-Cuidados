import User from "../models/User";
import * as logger from "../../libs/Logger";

export const createUser = async (userData) => {
    const { username, email, password } = userData;
  const user = User.f
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await newUser.save()
  return newUser
}//createUser()

export const getUserById = async (userId) => {
    try {
        const userFound = await User.findById(userId)       
        return userFound
    } catch (error) {
        logger.errorLog(`users.repo -> getUserById() -> ${error}`)
        return error
    }
}//getUserById()

export const getUserByEmail = async (email) => {
    try {
        const userFound = await User.findOne({email: email})
        return userFound
    } catch (error) {
        logger.errorLog(`users.repo -> getUserByEmail() -> ${error}`)
        return error
    }
}//getUserByEmail()

export const getUserByUsername = async (username) => {
    try {
        const userFound = await User.findOne({username: username})
        return userFound
    } catch (error) {
        logger.errorLog(`users.repo -> getUserByUsername() -> ${error}`)
        return error
    }
}//getUserByUsername()

