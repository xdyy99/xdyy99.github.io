// export default function cartAni() {
//   let cBtn = document.querySelectorAll(".market .add");

//   cBtn.forEach((v) => {
//     v.addEventListener("click", () => {
//       let defautBtn = v;
//       v.innerHTML += `<div class="add__animation">
//             <lottie-player
//               src="./assets/images/cart.json"
//               background="transparent"
//               speed="3"
//               style="width: 25px; height: 25px"
//               loop
//               autoplay
//             ></lottie-player>
//           </div>`;
//       v.classList.add("clicked");

//       console.log(defautBtn);
//       setTimeout(() => {
//         v.innerHTML = ` <span class="text"> Thêm vào giỏ </span> `;
//         v.classList.remove("clicked");
//       }, 1200);
//     });
//   });
//   const sendAjaxPromise = (url, type, data) =>
//     new Promise((resolve, reject) => {
//       $.ajax({
//         url: url,
//         type: type,
//         data: data,
//         success: function () {
//           v.innerHTML = ` <span class="text"> Thêm vào giỏ </span> `;
//           v.classList.remove("clicked");
//         },
//         error: function (error) {
//           reject(error);
//         },
//       });
//     });
// }
