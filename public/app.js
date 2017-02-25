"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
    apiKey: "AIzaSyBkizh0lSv1Azyx2HQXDChkXyn6LXLG29Q",
    authDomain: "react-commit.firebaseapp.com",
    databaseURL: "https://react-commit.firebaseio.com"

};
firebase.initializeApp(config);

var CommentList = function (_React$Component) {
    _inherits(CommentList, _React$Component);

    function CommentList() {
        _classCallCheck(this, CommentList);

        return _possibleConstructorReturn(this, (CommentList.__proto__ || Object.getPrototypeOf(CommentList)).apply(this, arguments));
    }

    return CommentList;
}(React.Component);

var CommentBox = function (_React$Component2) {
    _inherits(CommentBox, _React$Component2);

    function CommentBox() {
        _classCallCheck(this, CommentBox);

        return _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).apply(this, arguments));
    }

    _createClass(CommentBox, [{
        key: "handleCommentSubmit",
        value: function handleCommentSubmit(comment) {
            this.firebaseRefs['data'].push(comment);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.bindAsArray(firebase.database().ref('commentsBox'), 'data');
            // Here we bind the component to Firebase and it handles all data updates,
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "commentBox" },
                React.createElement(
                    "h1",
                    null,
                    "Comments "
                ),
                React.createElement(CommentList, { data: this.state.data }),
                React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
            );
        }
    }]);

    return CommentBox;
}(React.Component);

var CommentFrom = function (_React$Component3) {
    _inherits(CommentFrom, _React$Component3);

    function CommentFrom() {
        _classCallCheck(this, CommentFrom);

        return _possibleConstructorReturn(this, (CommentFrom.__proto__ || Object.getPrototypeOf(CommentFrom)).apply(this, arguments));
    }

    _createClass(CommentFrom, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            event.preventDefault();
            this.props.onCommentSubmit({
                author: this.refs.author.value.trim(),
                text: this.refs.text.value.trim()
            });
            this.refs.author.value = '';
            this.refs.text.value = '';
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { className: "form-group", onSubmit: this.handleSubmit },
                React.createElement("input", { type: "text", placeholder: "Your name", ref: "author", "class": "form-control" }),
                React.createElement("input", { type: "text", placeholder: "Say something...", ref: "text", "class": "form-control" }),
                React.createElement("input", { type: "submit", className: "btn btn-info", value: "Post" })
            );
        }
    }]);

    return CommentFrom;
}(React.Component);

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('contant'));