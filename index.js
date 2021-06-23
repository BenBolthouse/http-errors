"use strict";
/* eslint-disable max-classes-per-file */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressJsonErrorHandler = exports.NotImplemented = exports.InternalServerError = exports.MethodNotAllowed = exports.NotFound = exports.Forbidden = exports.BadRequest = void 0;
var BadRequest = /** @class */ (function (_super) {
    __extends(BadRequest, _super);
    function BadRequest(response, message) {
        var _this = _super.call(this, message) || this;
        _this.message = message || 'BadRequest';
        _this.statusCode = 400;
        _this.response = response || {};
        return _this;
    }
    return BadRequest;
}(Error));
exports.BadRequest = BadRequest;
var Forbidden = /** @class */ (function (_super) {
    __extends(Forbidden, _super);
    function Forbidden(response, message) {
        var _this = _super.call(this, message) || this;
        _this.message = message || 'Forbidden';
        _this.statusCode = 403;
        _this.response = response || {};
        return _this;
    }
    return Forbidden;
}(Error));
exports.Forbidden = Forbidden;
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(response, message) {
        var _this = _super.call(this, message) || this;
        _this.message = message || 'NotFound';
        _this.statusCode = 404;
        _this.response = response || {};
        return _this;
    }
    return NotFound;
}(Error));
exports.NotFound = NotFound;
var MethodNotAllowed = /** @class */ (function (_super) {
    __extends(MethodNotAllowed, _super);
    function MethodNotAllowed(response, message) {
        var _this = _super.call(this, message) || this;
        _this.message = message || 'MethodNotAllowed';
        _this.statusCode = 405;
        _this.response = response || {};
        return _this;
    }
    return MethodNotAllowed;
}(Error));
exports.MethodNotAllowed = MethodNotAllowed;
var InternalServerError = /** @class */ (function (_super) {
    __extends(InternalServerError, _super);
    function InternalServerError(response, message) {
        var _this = _super.call(this, message) || this;
        _this.message = message || 'InternalServerError';
        _this.statusCode = 500;
        _this.response = response || {};
        return _this;
    }
    return InternalServerError;
}(Error));
exports.InternalServerError = InternalServerError;
var NotImplemented = /** @class */ (function (_super) {
    __extends(NotImplemented, _super);
    function NotImplemented(response, message) {
        var _this = _super.call(this, message) || this;
        _this.message = message || 'NotImplemented';
        _this.statusCode = 501;
        _this.response = response || {};
        return _this;
    }
    return NotImplemented;
}(Error));
exports.NotImplemented = NotImplemented;
/**
 * Error handler middleware function for Express. Returns json to the client
 * with the error response object.
 *
 * If an error is thrown without the use of an error from this library, or a
 * thrown error otherwise doesn't implement response or status properties, the
 * error handler will treat the thrown error as a 500 http error and an empty
 * response object will be returned.
 *
 * To integrate into an existing Express project, require the function and do
 * `app.use(expressJsonErrorHandler)`.
 */
// eslint-disable-next-line no-unused-vars
var expressJsonErrorHandler = function (error, req, res, _next) {
    var statusCode = error.statusCode, response = error.response;
    if (!statusCode)
        statusCode = 500;
    if (!response)
        response = {};
    return res.status(statusCode).json(response);
};
exports.expressJsonErrorHandler = expressJsonErrorHandler;
