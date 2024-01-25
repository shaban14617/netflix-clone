import { useEffect, useState, useContext } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState();
  const { firebase } = useContext(FirebaseContext);
  const db = getFirestore(firebase);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, target));
        const allContent = querySnapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [db, target]);

  return { [target]: content };
}
