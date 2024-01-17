// showPopup(title, description, thumbnail, divContainer, openClose) {
//     // Muestra la descripción de la carta seleccionada
//     const popupContainer = document.createElement("div");
//     popupContainer.className = "container-popup";
//     popupContainer.innerHTML = `
//       <div class="buttons-popup">
//       <span class="popup-btnClose">X</span>
//       <div>
//       <h3>${title}</h3>
//       <p>${description}</p>
//       `;
//     const btnCloseDescription = popupContainer.querySelector(".popup-btnClose");
//     btnCloseDescription?.addEventListener("click", () => {
//       console.log("JIJI");
//     });

//     if (!openClose) {
//       console.log(openClose);

//       // divContainer.appendChild(popupContainer);
//     } else {
//       openClose = !openClose;
//     }
//   }
