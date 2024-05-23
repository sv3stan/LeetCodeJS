/*
Implement a createDomNode function that returns a <div> DOM element with the text "Hello World", ensuring:
The returned node should be of type 
Node.ELEMENT_NODE
 (representing a <div> element).
The <div> element should have a single child: a node of type 
Node.TEXT_NODE
 with the content "Hello World".
*/
export const createDomNode = () => {
    const div = document.createElement('div');
    const textNode = document.createTextNode('Hello World');
    div.appendChild(textNode);
    return div;
};
