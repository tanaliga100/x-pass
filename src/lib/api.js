import { addDoc, collection, doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "../config/firebase.config.js";

const specialOfTheDay = doc(db, "dailySpecial/2021-9-14");

export async function writeSpecialDay() {
  const docData = {
    desc: "A del food",
    price: 3.99,
    milk: "Whole",
    vegan: false,
  };
  try {
    await setDoc(specialOfTheDay, docData, { merge: true });
    console.log("the value has been written in the DB firestore");
  } catch (error) {
    console.log("Error occured", error);
  }
}

const ordersCollection = collection(db, "orders");

export async function addNewDocument() {
  const newDoc = await addDoc(ordersCollection, {
    customer: "jordan100",
    drink: "Latte",
    total_cost: (100 + Math.floor(Math.random() * 400)) / 100,
  });
  console.log("Your doc was created at ", newDoc.path);
}

export async function readSingleDocument() {
  const mySnapShot = await getDoc(specialOfTheDay);
  if (mySnapShot.exists()) {
    const docData = mySnapShot.data();
    console.log(`My data is: ${JSON.stringify(docData)} `);
  }
}
