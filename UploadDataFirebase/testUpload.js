// https://youtu.be/BWNiMQkW3u4?si=G5tle3ONR6EgK2jf
// Archivo para subir datos desde un JSON a Firebase
import admin from "firebase-admin";
import serviceAccount from "file:///Users/lautarolopezdiaz/Desktop/ClasesProgramacion/Trabajos/Mineralizarte-React-1/public/testup/keyTestUpload.json" assert { type: "json" };
import data from "file:///Users/lautarolopezdiaz/Desktop/ClasesProgramacion/Trabajos/Mineralizarte-React-1/public/testup/testData.json" assert { type: "json" };
// import serviceAccount from "./keyTestUpload.json";
// import data from "./testData.json";
const collectionKey = "products"; //Name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
if (data && typeof data === "object") {
  Object.keys(data).forEach((docKey) => {
    firestore
      .collection(collectionKey)
      .doc(docKey)
      .set(data[docKey])
      .then((res) => {
        console.log("Document " + docKey + " successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  });
}
