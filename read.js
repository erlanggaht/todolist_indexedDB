const readAll = (nameObjectStore) => {
  return new Promise((resolve) => {
    const transaction = db.transaction([nameObjectStore], "readonly");
    const objectStoreTodo = transaction.objectStore(nameObjectStore);

    const readRequest = objectStoreTodo.getAll();
    readRequest.onsuccess = (event) => {
      console.log("Semua data berhasil di baca: ");
      resolve(event.target.result);
    };
  });
};

const readById = (id, nameObjectStore) => {
  return new Promise((resolve) => {
    const transaction = db.transaction([nameObjectStore], "readonly");
    const objectStoreTodo = transaction.objectStore(nameObjectStore);

    const readRequest = objectStoreTodo.get(id);
    readRequest.onsuccess = (event) => {
      console.log(`data dengan id ${id} berhasil dibaca: `);
      resolve(event.target.result);
    };
  });
};

const renderElement = (data, nameObjectStore) => {
  return `
  <li class="flex justify-between items-center">
  <div class="flex gap-4 items-center">
   <input type="radio" id="${data?.id}" name="fav_language" value="${data?.name}" />
   <label for="${data?.id}">${data?.name}</label>
   </div>

   <div class="flex items-center gap-3">
   <button onclick="(function(){Modal('show', 'update', ${data?.id})})()"><i class="fa fa-pencil" style="font-size:16px"></i></button>
   <button onclick="(function(){DeleteById(${data?.id}, '${nameObjectStore}')})()"><i class="fa fa-trash-o" style="font-size:16px"></i>
   </button>
</div>
  </li>
  `;
};

const ShowData = async (nameObjectStore) => {
  const elementShowData = document.getElementById("ShowData");
  const resultAllData = await readAll(nameObjectStore);
  const listData = resultAllData
    ?.map((data) => {
      return renderElement(data, nameObjectStore);
    })
    .join("");

  elementShowData.innerHTML = listData;
};

// Show Data Ketika Halaman di Load
if (document.readyState !== "loading") ShowData("Todo1");
else
  document.addEventListener("DOMContentLoaded", () => {
    ShowData("Todo1");
  });
