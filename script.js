const runCRUD = (typeCrud, id) => {
  switch (typeCrud) {
    case "Create":
      CreateTodo(
        {
          name: document.getElementById("inputTodo").value,
        },
        "Todo1"
      );
      break;
    case "Update":
      UpdateTodo(
        {
          id: id,
          name: document.getElementById("inputTodo").value,
        },
        "Todo1"
      );
      break;
    default:
      alert("Tipe tidak valid");
  }
};

const renderElementButton = (typeCrud, id) => {
  document.getElementById("button-area-modal").innerHTML = `
    <button
        class="bg-color2 text-color1 py-2 px-4 rounded-lg"
        onclick="(function(){runCRUD('${typeCrud}', ${id})})()"
        id="button-submit"
      >
        ${typeCrud}
      </button>
        <button
          class="bg-red-500 text-white py-2 px-4 rounded-lg"
          onclick="Modal('close')"
        >
          Close
    </button>
  `;
};

function Modal(type, typeCrud, dataId) {
  const showModal = () => {
    const textTypeModal = {
      create: "Create",
      update: "Update",
    };
    if (document.getElementById("modal").classList.contains("hidden")) {
      document.getElementById("modal").classList.add("fixed");
      document.getElementById("modal").classList.toggle("hidden");
      document.getElementById("title-modal").innerText =
        textTypeModal[typeCrud] + " Todo";
      renderElementButton(textTypeModal[typeCrud]);
    }

    // Mode Update
    if (typeCrud === "update" && typeof dataId === "number") {
      renderElementButton(textTypeModal[typeCrud], dataId);
      readById(dataId, "Todo1").then((response) => {
        document.getElementById("inputTodo").value = response.name;
      });
    }
  };

  const closeModal = () => {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modal").classList.remove("fixed");
    document.getElementById("inputTodo").value = "";
  };

  switch (type) {
    case "show":
      showModal();
      break;
    case "close":
      closeModal();
      break;
    default:
      alert("Tipe tidak valid");
  }
}

window.addEventListener("online", () => {
  Toastify({
    text: "ONLINE",
    duration: 3000,
    position: "left",
    style: {
      background: "#7ACC59",
    },
  }).showToast();
});

window.addEventListener("offline", () => {
  Toastify({
    text: "OFFLINE",
    duration: 3000,
    position: "left",
    style: {
      background: "red",
    },
  }).showToast();
});
