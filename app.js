document.addEventListener("DOMContentLoaded", () => {

  const pages = document.querySelectorAll(".page");
  const navButtons = document.querySelectorAll(".nav-btn");

  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  const closeModal = document.getElementById("closeModal");

  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");


  /* =========================
     SAYFA DEĞİŞTİRME
  ========================= */

  function showPage(pageName) {

    pages.forEach(page => {
      page.classList.remove("active-page");
    });

    const selectedPage =
      document.getElementById("page-" + pageName);

    if (selectedPage) {
      selectedPage.classList.add("active-page");
    }

    navButtons.forEach(button => {
      button.classList.remove("active");

      if (button.dataset.page === pageName) {
        button.classList.add("active");
      }
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  document.querySelectorAll("[data-page]").forEach(button => {

    button.addEventListener("click", () => {

      const page = button.dataset.page;

      if (page) {
        showPage(page);
      }

    });

  });



  /* =========================
     TOAST
  ========================= */

  function showToast(message) {

    toastText.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);

  }



  /* =========================
     MODAL
  ========================= */

  function openModal(content) {

    modalBody.innerHTML = content;

    modal.classList.add("show");

  }


  function closeModalFunction() {

    modal.classList.remove("show");

  }


  closeModal.addEventListener(
    "click",
    closeModalFunction
  );


  modal.addEventListener("click", event => {

    if (event.target === modal) {
      closeModalFunction();
    }

  });



  /* =========================
     CİHAZ EKLE
  ========================= */

  function openDeviceModal() {

    openModal(`

      <div class="modal-icon">＋</div>

      <h2>Cihaz Ekle</h2>

      <p>Bağlamak istediğin cihazı seç.</p>

      <div class="modal-options">

        <button class="modal-option" data-add-device="ps4">
          🎮
          <strong>PlayStation 4</strong>
          <span>Oyun konsolu</span>
        </button>

        <button class="modal-option" data-add-device="wiz">
          💡
          <strong>WiZ</strong>
          <span>Akıllı ışık</span>
        </button>

        <button class="modal-option" data-add-device="govee">
          ◉
          <strong>Govee</strong>
          <span>LED ışık</span>
        </button>

      </div>

    `);


    document.querySelectorAll("[data-add-device]")
      .forEach(button => {

        button.addEventListener("click", () => {

          const device = button.dataset.addDevice;

          showToast(
            device.toUpperCase() +
            " cihaz ekleme ekranı açıldı."
          );

          closeModalFunction();

        });

      });

  }


  document
    .getElementById("addDeviceBtn")
    .addEventListener("click", openDeviceModal);


  document
    .getElementById("addDeviceBtn2")
    .addEventListener("click", openDeviceModal);



  /* =========================
     YENİ MOD
  ========================= */

  function openNewModeModal() {

    openModal(`

      <div class="modal-icon">✦</div>

      <h2>Yeni Mod Oluştur</h2>

      <p>Kendi cihaz kombinasyonunu oluştur.</p>

      <input
        id="newModeName"
        class="modal-input"
        placeholder="Mod adı"
      >

      <button id="createModeConfirm"
              class="primary-btn full-btn">
        Modu Oluştur
      </button>

    `);


    document
      .getElementById("createModeConfirm")
      .addEventListener("click", () => {

        const name =
          document.getElementById("newModeName").value.trim();

        if (!name) {

          showToast("Önce bir mod adı yaz.");

          return;
        }

        closeModalFunction();

        showToast(
          `"${name}" modu oluşturuldu.`
        );

      });

  }


  document
    .getElementById("newModeBtn")
    .addEventListener("click", openNewModeModal);


  document
    .getElementById("newModeBtn2")
    .addEventListener("click", openNewModeModal);



  /* =========================
     MODLAR
  ========================= */

  document.querySelectorAll("[data-mode]")
    .forEach(button => {

      button.addEventListener("click", () => {

        const mode = button.dataset.mode;

        const names = {
          gaming: "Gaming",
          movie: "Film",
          sleep: "Uyku"
        };

        showToast(
          names[mode] +
          " modu başlatılıyor..."
        );

      });

    });



  /* =========================
     CİHAZ KOMUTLARI
  ========================= */

  document.querySelectorAll(".device-action")
    .forEach(button => {

      button.addEventListener("click", () => {

        const device = button.dataset.device;
        const action = button.dataset.action;

        let message = "";

        if (device === "ps4") {

          if (action === "wake") {
            message = "PS4 uyandırma komutu hazırlanıyor...";
          }

          if (action === "rest") {
            message = "PS4 dinlenme komutu hazırlanıyor...";
          }

        }

        if (device === "wiz") {
          message = "WiZ ışık komutu hazırlanıyor...";
        }

        if (device === "govee") {
          message = "Govee ışık komutu hazırlanıyor...";
        }

        showToast(message);

      });

    });



  /* =========================
     RENKLER
  ========================= */

  document.querySelectorAll(".device-color")
    .forEach(button => {

      button.addEventListener("click", () => {

        const device = button.dataset.device;
        const color = button.dataset.color;

        document
          .querySelectorAll(
            `.device-color[data-device="${device}"]`
          )
          .forEach(item => {
            item.classList.remove("selected");
          });

        button.classList.add("selected");

        showToast(
          `${device.toUpperCase()} renk: ${color}`
        );

      });

    });



  /* =========================
     PARLAKLIK
  ========================= */

  const wizBrightness =
    document.getElementById("wizBrightness");

  const wizBrightnessValue =
    document.getElementById("wizBrightnessValue");


  wizBrightness.addEventListener("input", () => {

    wizBrightnessValue.textContent =
      wizBrightness.value + "%";

  });



  const goveeBrightness =
    document.getElementById("goveeBrightness");

  const goveeBrightnessValue =
    document.getElementById("goveeBrightnessValue");


  goveeBrightness.addEventListener("input", () => {

    goveeBrightnessValue.textContent =
      goveeBrightness.value + "%";

  });



  /* =========================
     AI
  ========================= */

  const aiInput =
    document.getElementById("aiInput");

  const sendAiBtn =
    document.getElementById("sendAiBtn");

  const chatMessages =
    document.getElementById("chatMessages");


  function sendAIMessage() {

    const message =
      aiInput.value.trim();

    if (!message) return;


    const userMessage =
      document.createElement("div");

    userMessage.className =
      "chat-message user-message";

    userMessage.textContent =
      message;

    chatMessages.appendChild(
      userMessage
    );


    aiInput.value = "";


    setTimeout(() => {

      const aiMessage =
        document.createElement("div");

      aiMessage.className =
        "chat-message ai-response";

      aiMessage.textContent =
        "AI bağlantısı henüz API'ye bağlanmadı. Arayüz hazır.";

      chatMessages.appendChild(
        aiMessage
      );

    }, 500);

  }


  sendAiBtn.addEventListener(
    "click",
    sendAIMessage
  );


  aiInput.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {
        sendAIMessage();
      }

    }
  );



  /* =========================
     BİLDİRİM
  ========================= */

  document
    .getElementById("notificationBtn")
    .addEventListener("click", () => {

      openModal(`

        <div class="modal-icon">♢</div>

        <h2>Bildirimler</h2>

        <p>
          Şu anda yeni bir bildirimin yok.
        </p>

      `);

    });



  /* =========================
     PROFİL
  ========================= */

  document
    .getElementById("profileBtn")
    .addEventListener("click", () => {

      openModal(`

        <div class="avatar large-avatar">M</div>

        <h2>My Profile</h2>

        <p>Yönetici hesabı</p>

        <button
          class="secondary-btn full-btn"
          id="profileClose">
          Kapat
        </button>

      `);

      document
        .getElementById("profileClose")
        .addEventListener(
          "click",
          closeModalFunction
        );

    });



  /* =========================
     ARAMA
  ========================= */

  document
    .getElementById("searchInput")
    .addEventListener("keydown", event => {

      if (event.key !== "Enter") return;

      const query =
        event.target.value.trim().toLowerCase();

      if (!query) return;

      if (query.includes("ps4")) {
        showPage("devices");
      }

      else if (
        query.includes("wiz") ||
        query.includes("ışık")
      ) {
        showPage("devices");
      }

      else if (
        query.includes("govee")
      ) {
        showPage("devices");
      }

      else if (
        query.includes("mod")
      ) {
        showPage("modes");
      }

      else if (
        query.includes("ai")
      ) {
        showPage("ai");
      }

      else {
        showToast(
          `"${query}" için sonuç bulunamadı.`
        );
      }

    });



  /* =========================
     DARK MODE
  ========================= */

  const darkModeSwitch =
    document.getElementById("darkModeSwitch");


  darkModeSwitch.addEventListener(
    "change",
    () => {

      document.body.classList.toggle(
        "dark",
        darkModeSwitch.checked
      );

    }
  );

});
