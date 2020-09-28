import * as userRepo from "../data/repos/users.repo";
import * as logger from "../libs/Logger";

export const signUp = async (userData) => {
  try {
    if (
      (await userRepo.getUserByEmail(userData.email)) ||
      (await userRepo.getUserByUsername(userData.username))
    ) {
        //The username or email are already taken
        throw {
            status: 400,
            message: 'The username or the email are already taken.',
            user: null
        }
    } else {
      return {
          status: 201,
          message: 'New user was registered successfully.',
          user: await userRepo.createUser(userData)
      };
    }
  } catch (error) {
    logger.errorLog(`auth.domain -> signUp() -> ${error.message}`);
    throw error
  }
}; //signUp()
