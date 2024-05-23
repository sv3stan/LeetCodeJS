/*
Implement an applyStylesToNode function that accepts a DOM node as its argument and applies specified CSS styles to it.
*/

export const applyStylesToNode = node => {
    node.style.backgroundColor = '#ffa015';
    node.style.fontSize = '16px';
    node.style.color = 'white';
    node.style.borderStyle = 'none';
};
