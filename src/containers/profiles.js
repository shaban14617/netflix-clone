import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Header, Profiles } from "../components";
export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
        <Profiles>
          <Profiles.Title>Who is watching</Profiles.Title>
          <Profiles.List>
            <Profiles.User
              onClick={() => {
                setProfile({ displayName: user.displayName, photoURL: user.photoURL });
              }}
            >
              <Profiles.Picture src={user.photoURL} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      </Header>
    </>
  );
}
