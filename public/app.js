'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _createClass(CommentList, [{
        key: 'render',
        value: function render() {
            var commentNodes = this.props.data.map(function (comment, index) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'table',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'h3',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0)' },
                                    comment.author
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'td',
                                null,
                                comment.text
                            )
                        )
                    )
                );
            });
        }
    }]);

    return CommentList;
}(_react2.default.Component);

var CommentBox = function (_React$Component2) {
    _inherits(CommentBox, _React$Component2);

    function CommentBox() {
        _classCallCheck(this, CommentBox);

        return _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).apply(this, arguments));
    }

    _createClass(CommentBox, [{
        key: 'handleCommentSubmit',
        value: function handleCommentSubmit(comment) {
            this.firebaseRefs['data'].push(comment);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.bindAsArray(firebase.database().ref('commentsBox'), 'data');
            // Here we bind the component to Firebase and it handles all data updates,
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'commentBox' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Comments '
                ),
                _react2.default.createElement(CommentList, { data: this.state.data }),
                _react2.default.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
            );
        }
    }]);

    return CommentBox;
}(_react2.default.Component);

var CommentFrom = function (_React$Component3) {
    _inherits(CommentFrom, _React$Component3);

    function CommentFrom() {
        _classCallCheck(this, CommentFrom);

        return _possibleConstructorReturn(this, (CommentFrom.__proto__ || Object.getPrototypeOf(CommentFrom)).apply(this, arguments));
    }

    _createClass(CommentFrom, [{
        key: 'handleSubmit',
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
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { className: 'form-group', onSubmit: this.handleSubmit },
                _react2.default.createElement('input', { type: 'text', placeholder: 'Your name', ref: 'author', 'class': 'form-control' }),
                _react2.default.createElement('input', { type: 'text', placeholder: 'Say something...', ref: 'text', 'class': 'form-control' }),
                _react2.default.createElement('input', { type: 'submit', className: 'btn btn-info', value: 'Post' })
            );
        }
    }]);

    return CommentFrom;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(CommentBox, null), document.getElementById('contant'));