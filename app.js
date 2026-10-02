document.addEventListener("DOMContentLoaded", () => {

    console.log("My Tech HUB çalışıyor");


    /* =========================
       SAYFA SİSTEMİ
    ========================= */

    const pages = document.querySelectorAll(".page");
    const navButtons = document.querySelectorAll(".nav-button");


    function openPage(pageName) {

        pages.forEach(page => {
            page.classList.remove("active");
        });

        const target = document.getElementById(pageName);

        if (target) {
            target.classList.add("active");
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


    document.querySelectorAll("[data-page]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.preventDefault();

                openPage(button.dataset.page);

            });

        });


    /* =========================
       TOAST
    ========================= */

    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toastText");


    function showToast(text) {

        toastText.textContent = text;

        toast.classList.add("show");

        clearTimeout(window.toastTimer);

        window.toastTimer = setTimeout(() => {

            toast.classList.remove("show");

        }, 2300);

    }


    /* =========================
       MODAL
    ========================= */

    const modal = document.getElementById("modal");
    const modalContent =
        document.getElementById("modalContent");

    const modalClose =
        document.getElementById("modalClose");


    function openModal(html) {

        modalContent.innerHTML = html;

        modal.classList.add("show");

    }


    function closeModal() {

        modal.classList.remove("show");

    }


    modalClose.addEventListener(
        "click",
        closeModal
    );


    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {
                closeModal();
            }

        }
    );


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
                    " modu seçildi."
                );

            });

        });


    /* =========================
       YENİ MOD
    ========================= */

    function newMode() {

        openModal(`

            <h2>Yeni Mod</h2>

            <p>
                Kendi modunun adını belirle.
            </p>

            <input
                id="modeName"
                type="text"
                placeholder="Örn. Ders"
                style="
                    width:100%;
                    margin-top:18px;
                    padding:13px;
                    border:1px solid #ddd;
                    border-radius:12px;
                    outline:none;
                "
            >

            <button
                id="saveMode"
                class="primary-button"
                style="
                    width:100%;
                    margin-top:12px;
                ">

                Modu Oluştur

            </button>

        `);


        document
            .getElementById("saveMode")
            .addEventListener("click", () => {

                const name =
                    document
                        .getElementById("modeName")
                        .value
                        .trim();

                if (!name) {

                    showToast(
                        "Önce bir mod adı yaz."
                    );

                    return;
                }

                closeModal();

                showToast(
                    `"${name}" modu oluşturuldu.`
                );

            });

    }


    document
        .getElementById("newMode")
        .addEventListener(
            "click",
            newMode
        );


    document
        .getElementById("newMode2")
        .addEventListener(
            "click",
            newMode
        );


    /* =========================
       CİHAZ EKLE
    ========================= */

    function addDevice() {

        openModal(`

            <h2>Cihaz Ekle</h2>

            <p>
                Bağlamak istediğin cihazı seç.
            </p>

            <button
                class="modal-option"
                data-add="PS4">

                🎮

                <strong>
                    PlayStation 4
                </strong>

                <span>
                    Oyun konsolu
                </span>

            </button>


            <button
                class="modal-option"
                data-add="WiZ">

                💡

                <strong>
                    WiZ
                </strong>

                <span>
                    Akıllı ışık
                </span>

            </button>


            <button
                class="modal-option"
                data-add="Govee">

                ◉

                <strong>
                    Govee
                </strong>

                <span>
                    LED ışık
                </span>

            </button>

        `);


        document
            .querySelectorAll("[data-add]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const device =
                            button.dataset.add;

                        closeModal();

                        showToast(
                            device +
                            " seçildi."
                        );

                    }
                );

            });

    }


    document
        .getElementById("addDevice")
        .addEventListener(
            "click",
            addDevice
        );


    document
        .getElementById("addDevice2")
        .addEventListener(
            "click",
            addDevice
        );


    /* =========================
       CİHAZ BUTONLARI
    ========================= */

    document
        .querySelectorAll("[data-device]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    const device =
                        button.dataset.device;

                    const action =
                        button.dataset.action;


                    if (
                        device === "ps4" &&
                        action === "wake"
                    ) {

                        showToast(
                            "PS4 uyandırma komutu hazır."
                        );

                    }


                    else if (
                        device === "ps4" &&
                        action === "rest"
                    ) {

                        showToast(
                            "PS4 dinlenme komutu hazır."
                        );

                    }


                    else if (
                        action === "power"
                    ) {

                        showToast(
                            device.toUpperCase() +
                            " güç komutu hazır."
                        );

                    }

                }
            );

        });


    /* =========================
       RENK SEÇİMİ
    ========================= */

    document
        .querySelectorAll(".color-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    const device =
                        button.dataset.device;

                    const color =
                        button.dataset.color;


                    document
                        .querySelectorAll(
                            `.color-button[data-device="${device}"]`
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );


                    showToast(
                        device.toUpperCase() +
                        " renk seçildi."
                    );

                    console.log(
                        device,
                        color
                    );

                }
            );

        });


    /* =========================
       WIZ PARLAKLIK
    ========================= */

    const wizBrightness =
        document.getElementById(
            "wizBrightness"
        );

    const wizValue =
        document.getElementById(
            "wizValue"
        );


    wizBrightness.addEventListener(
        "input",
        () => {

            wizValue.textContent =
                wizBrightness.value + "%";

        }
    );


    /* =========================
       GOVEE PARLAKLIK
    ========================= */

    const goveeBrightness =
        document.getElementById(
            "goveeBrightness"
        );

    const goveeValue =
        document.getElementById(
            "goveeValue"
        );


    goveeBrightness.addEventListener(
        "input",
        () => {

            goveeValue.textContent =
                goveeBrightness.value + "%";

        }
    );


    /* =========================
       AI
    ========================= */

    const aiInput =
        document.getElementById(
            "aiInput"
        );

    const sendAI =
        document.getElementById(
            "sendAI"
        );

    const messages =
        document.getElementById(
            "messages"
        );


    function sendMessage() {

        const text =
            aiInput.value.trim();


        if (!text) {
            return;
        }


        const user =
            document.createElement("div");

        user.className =
            "message user-message";

        user.textContent =
            text;

        messages.appendChild(user);


        aiInput.value = "";


        setTimeout(() => {

            const answer =
                document.createElement("div");

            answer.className =
                "message ai-message";

            answer.textContent =
                "AI bağlantısı sonraki aşamada API'ye bağlanacak.";

            messages.appendChild(answer);

        }, 400);

    }


    sendAI.addEventListener(
        "click",
        sendMessage
    );


    aiInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                sendMessage();
            }

        }
    );


    /* =========================
       BİLDİRİMLER
    ========================= */

    document
        .getElementById(
            "notificationButton"
        )
        .addEventListener(
            "click",
            () => {

                openModal(`

                    <h2>Bildirimler</h2>

                    <p style="margin-top:10px;">
                        Şu anda yeni bildirimin yok.
                    </p>

                `);

            }
        );


    /* =========================
       PROFİL
    ========================= */

    document
        .getElementById(
            "profileButton"
        )
        .addEventListener(
            "click",
            () => {

                openModal(`

                    <h2>My Profile</h2>

                    <p style="margin-top:10px;">
                        Yönetici hesabı
                    </p>

                `);

            }
        );


    /* =========================
       ARAMA
    ========================= */

    document
        .getElementById("search")
        .addEventListener(
            "keydown",
            event => {

                if (event.key !== "Enter") {
                    return;
                }


                const query =
                    event.target.value
                        .trim()
                        .toLowerCase();


                if (!query) {
                    return;
                }


                if (
                    query.includes("ps4") ||
                    query.includes("playstation")
                ) {

                    openPage("devices");

                }

                else if (
                    query.includes("wiz") ||
                    query.includes("ışık")
                ) {

                    openPage("devices");

                }

                else if (
                    query.includes("govee")
                ) {

                    openPage("devices");

                }

                else if (
                    query.includes("mod")
                ) {

                    openPage("modes");

                }

                else if (
                    query.includes("ai")
                ) {

                    openPage("ai");

                }

                else {

                    showToast(
                        "Sonuç bulunamadı."
                    );

                }

            }
        );


    /* =========================
       DARK MODE
    ========================= */

    document
        .getElementById("darkMode")
        .addEventListener(
            "change",
            event => {

                document.body.classList.toggle(
                    "dark",
                    event.target.checked
                );

            }
        );


});
