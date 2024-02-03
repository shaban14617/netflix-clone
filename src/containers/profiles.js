import { getAuth, signOut } from "firebase/auth";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function SelectProfileContainer({ user, setProfile }) {
  const { firebase } = useContext(FirebaseContext);
  const auth = getAuth(firebase);

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          <Header.TextLink onClick={() => signOut(auth)}>Sign out</Header.TextLink>
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who is watching?</Profiles.Title>
        <Profiles.List>
          {user && (
            <Profiles.User onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
              <Profiles.Picture src={user.photoURL} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          )}
        </Profiles.List>
      </Profiles>
    </>
  );
}
