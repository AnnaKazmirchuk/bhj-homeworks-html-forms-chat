const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages'); 
const chatSide = document.querySelector('.chat-widget__side');
const botMessages = [
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Кто тут?',
    'Где Ваша совесть?',
    'Добрый день! До свидания!',
    'К сожалению все операторы сейчас заняты. Не пишите нам больше!',
    'Мы ничего не будем Вам продавать!'
];
const getDate = new Date();
const allTime = getDate.getHours() + ':' + getDate.getMinutes();


chatSide.addEventListener('click', () => {
  chatWidget.classList.toggle('chat-widget_active'); 
});

function bot () { 
 		 index = Math.floor(Math.random() * botMessages.length);
   	 return botMessages[index];
}

input.addEventListener('keydown', e => {
    if (input.value) {
        if (e.key == 'Enter') {
            messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">` + allTime  + `</div>
                    <div class="message__text">` + input.value + `</div>
                </div>`;
                input.value = ``;
        } else {
					return false
				}
							messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">` + allTime  + `</div>
                        <div class="message__text">` + bot() + `</div>
                    </div>`;
               	input.value = ``;
    }
});