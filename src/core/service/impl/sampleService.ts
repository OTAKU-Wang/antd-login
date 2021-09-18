import { SignUpService, SignInService } from "../../service";
import { Credential, Email, User } from "../../entities";
// TODO: 还没完全实现，需要添加后端请求
export class SampleService implements SignInService, SignUpService {
    async signInWithCredential(credential: Credential): Promise<boolean> {
        return Promise.resolve(
            true,
        );
    }

    async signUpUser(user: User, credential: Credential): Promise<User> {
        return Promise.resolve(user);
    }

    async verifyExistingEmail(email: Email): Promise<boolean> {
        return Promise.resolve(false);
    }
}