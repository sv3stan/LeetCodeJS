/**
 Реализуйте функцию onDomContentLoaded, которая вызывает заданный обратный вызов при загрузке DOM. Если onDomContentLoaded вызывается, когда DOM уже загружен/интерактивен, вызовите его немедленно.

Событие DOMContentLoaded срабатывает, когда HTML полностью загружен и проанализирован, но до загрузки всех внешних ресурсов, таких как изображения и таблицы стилей. Это позволяет разработчикам раньше манипулировать DOM, улучшая производительность веб-сайта и удобство для пользователей. Это событие имеет решающее значение для своевременной и эффективной загрузки страницы. 
 */

export const onDomContentLoaded = callback => {
    if (
        document.readyState === 'complete' ||
        document.readyState === 'interactive'
    ) {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
};
