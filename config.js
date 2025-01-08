if (!window.indexedDB) {
  alert("Browser tidak mendukung javascript indexedDB");
  console.warn("Browser tidak mendukung javascript indexedDB");
}

// Config indexedDB
const version = 1;
let db;
const openRequest = indexedDB.open("TodoList", version);

openRequest.onupgradeneeded = (event) => {
  db = event.target.result;
  if (!db.objectStoreNames.contains("Todo1")) {
    db.createObjectStore("Todo1", {
      keyPath: "id",
      autoIncrement: true,
    });
  }
};

openRequest.onsuccess = (event) => {
  db = event.target.result;
  console.log("Database berhasil dibuka");
  if (!db.objectStoreNames.contains("Todo1")) {
    db.createObjectStore("Todo1", {
      keyPath: "id",
      autoIncrement: true,
    });
  }
};

openRequest.onerror = (event) => {
  console.error("Database gagal dibuka");
};
