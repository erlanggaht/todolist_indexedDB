function UpdateTodo(dataObject, nameObjectStore) {
  if (dataObject.name === "") {
    document.getElementById("inputTodo").focus();
    return;
  }

  if (event.key === "Enter" || event.type === "click") {
    const transaction = db.transaction([nameObjectStore], "readwrite");
    const objectStoreTodo = transaction.objectStore(nameObjectStore);

    const requestCreate = objectStoreTodo.put(dataObject);
    requestCreate.onsuccess = (event) => {
      console.log("Data berhasil ditambahkan " + event.target.result);
      Modal("close");
      ShowData(nameObjectStore);
    };
  }
}
