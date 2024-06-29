import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./config";

const getState = async () => {
  const statusRef = doc(firestore, "status", "statusId");
  const statusDoc = await getDoc(statusRef);

  return statusDoc.data();
};

export default getState;
