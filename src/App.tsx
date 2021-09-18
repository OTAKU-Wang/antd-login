import * as React from "react";
import { connect } from "react-redux";
import {
  Credential,
  signInAction,
  signOutAction,
  StateType,
  User,
  userSelector,
  signUpAction,
} from "./core";

import SignInHeaderComponent from './web/components/SignInHeaderComponent';
import { SignInComponent } from "./web/components/SignInComponent";

export const AppModel = (props: Props) => {
  const onSignIn = (email: string, password: string) =>
    props.dispatchSignIn(new Credential(email, password));
  const onSignUp = (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) =>
    props.dispatchSignUp(firstName, lastName, new Credential(email, password));

  return (
    <React.StrictMode>
      <SignInHeaderComponent />
      <SignInComponent onClick={onSignIn} />
    </React.StrictMode>
  );
};

interface Props {
  user: User | null;
  dispatchSignIn: (credential: Credential) => void;
  dispatchSignUp: (
    firstName: string,
    lastName: string,
    credential: Credential,
  ) => void;
  dispatchSignOut: () => void;
}

const mapStateToProps = (state: StateType) => ({
  user: userSelector(state),
});

const mapDispatchToProps = {
  dispatchSignIn: signInAction,
  dispatchSignUp: signUpAction,
  dispatchSignOut: signOutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModel);

