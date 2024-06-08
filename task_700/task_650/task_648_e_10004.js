/*
Реализуйте базовую функцию querySelectorAll, которая принимает на вход строку селектора и возвращает массив элементов DOM, соответствующих данному селектору.
*/
export const querySelectorAll = selector => {
    const result = [];

    if (selector.startsWith('.')) {
        const classItem = document.getElementsByClassName(selector.slice(1));
        for (let i = 0; i < classItem.length; i++) {
            result.push(classItem[i]);
        }
    } else if (/^[a-zA-Z]+$/.test(selector)) {
        const tagItem = document.getElementsByTagName(selector);
        for (let i = 0; i < tagItem.length; i++) {
            result.push(tagItem[i]);
        }
    } else if (selector.startsWith('#')) {
        const idItem = document.getElementById(selector.slice(1));
        if (idItem) {
            result.push(idItem);
        }
    }

    return result;
};
