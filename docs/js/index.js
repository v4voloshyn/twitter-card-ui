
/* Получаем селектор кнопки FOLLOW/UNFOLLOW */
const button = document.querySelectorAll('.follow-btn');

/* Ищем span в который записано число фолловеров. 
Числа будут меняться поэтому присваеваем значение через let */
let followersNumber = document.getElementById('followers');

/* Получаем целое число фолловеров без запятых */
let followersCount = parseInt(followersNumber.innerText.split(',').join(''));

/* Функция добавления разделителя в число разрядностью 3 цифры */
function numberWithCommas(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* Проверяем входящее значение из HTML/ Базы данных на разрядность, 
   чтоб правильно отобразить число пользователю (выставить запятую).
 */
   followersNumber.innerText = numberWithCommas(followersCount);

/* Добавляем логику при клике на кнопку FOLLOW/UNFOLLOW */
button.forEach((button) => {
   button.addEventListener('click', function () {
      /* Функцией:
      -Меняем текст кнопки
      -Убираем/добавляем класс активности кнопке 
      -Обновляем число фолловеров что записано в спане.
      */
      if (button.innerText.toLowerCase() === 'follow') {
         button.innerText = 'FOLLOWING';
         button.classList.add('follow-btn_active');
         followersCount++;
         followersNumber.innerText = numberWithCommas(followersCount);
      } else {
         button.innerText = 'FOLLOW';
         button.classList.remove('follow-btn_active');
         followersCount--;
         followersNumber.innerText = numberWithCommas(followersCount);
      }
   });
})
