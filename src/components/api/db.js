import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
  notes: "++id, noteTitle, noteText", // Primary key and indexed props
});

db.open();
