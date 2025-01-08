function DeleteAll(objectStoreName) {
  const transaction = db.transaction([objectStoreName], "readwrite");
  const objectStoreTodo = transaction.objectStore(objectStoreName);

  const deleteRequest = objectStoreTodo.clear();
  deleteRequest.onsuccess = (event) => {
    console.log("Semua data berhasil dihapus");
  };
}

function DeleteById(id, objectStoreName) {
  const transaction = db.transaction([objectStoreName], "readwrite");
  const objectStoreTodo = transaction.objectStore(objectStoreName);

  const deleteByIdRequest = objectStoreTodo.delete(id);
  deleteByIdRequest.onsuccess = (event) => {
    console.log("Semua data berhasil dihapus");
    ShowData(objectStoreName);
  };
}
