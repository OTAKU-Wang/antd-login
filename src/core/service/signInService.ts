import { Credential} from "../entities";

export interface SignInService {
    signInWithCredential: (credential: Credential) => Promise<boolean>;
}

export class SignInInteractor {
    signInService: SignInService;

    constructor(signInService: SignInService) {
        this.signInService = signInService;
    }

    async signIn(credential: Credential): Promise<boolean> {
        return this.signInService.signInWithCredential(credential);
    }
}