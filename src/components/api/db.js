import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
  notes: "++id, noteTitle, noteText", // Primary key and indexed props
});

export const dbAdd = async (noteTitle, noteText) => {
  await db.notes.add({ noteTitle: noteTitle, noteText: noteText });
};
export const dbEditNote = async (currentId, noteTitle, noteText) => {
  await db.notes.put({
    id: currentId,
    noteTitle: noteTitle,
    noteText: noteText,
  });
};

export const dbDeleteNote = async (id) => {
  await db.notes.delete(id);
};


db.open();
