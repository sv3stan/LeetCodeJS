/*
Implement a recognizeNodeType function that accepts a DOM node as input and returns its type as a string.
The function will identify node types such as 
ELEMENT_NODE, ATTRIBUTE_NODE, TEXT_NODE, COMMENT_NODE, and DOCUMENT_NODE
. You can assume that the input will always be one of these specified node types.
*/

export const recognizeNodeType = node => {
    switch (node.nodeType) {
        case 1:
            return 'ELEMENT_NODE';

        case 2:
            return 'ATTRIBUTE_NODE';

        case 3:
            return 'TEXT_NODE';

        case 8:
            return 'COMMENT_NODE';

        case 9:
            return 'DOCUMENT_NODE';
    }
};
