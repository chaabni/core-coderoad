"use strict";
var React = require('react');
var index_1 = require('../index');
var Card_1 = require('material-ui/Card');
;
var styles = {
    card: {
        margin: '5px',
    },
};
var ContentCard = function (_a) {
    var title = _a.title, content = _a.content;
    return (React.createElement(Card_1.Card, {style: styles.card}, 
        title ? React.createElement(Card_1.CardHeader, {title: title}) : null, 
        React.createElement(Card_1.CardText, null, 
            React.createElement(index_1.Markdown, {children: content || ''})
        )));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContentCard;
//# sourceMappingURL=ContentCard.js.map