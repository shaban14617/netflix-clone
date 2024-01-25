import SelectProfileContainer from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { useContext, useEffect, useState } from "react";
import { Header, Loading } from "../components";
import { getAuth, signOut } from "firebase/auth";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
export default function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = getAuth(firebase).currentUser || {};
  const auth = getAuth();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile.displayName]);
  //src={user.photoURL}
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmaillViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => signOut(auth)}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker now</Header.FeatureCallOut>
          <Header.Text>
            During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in
            Gotham City while becoming an infamous psychopathic crime figure
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
