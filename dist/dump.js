var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "VSS/Controls"], function (require, exports, Controls) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BuildDumpSection = /** @class */ (function (_super) {
        __extends(BuildDumpSection, _super);
        function BuildDumpSection() {
            return _super.call(this) || this;
        }
        BuildDumpSection.prototype.initialize = function () {
            var _this = this;
            _super.prototype.initialize.call(this);
            // Get configuration that's shared between extension and the extension host
            var sharedConfig = VSS.getConfiguration();
            if (sharedConfig) {
                // register your extension with host through callback
                sharedConfig.onBuildChanged(function (build) {
                    _this._initBuildDump(build);
                });
            }
        };
        BuildDumpSection.prototype._initBuildDump = function (build) {
            var element = $("<pre />");
            element.text(JSON.stringify(build, null, 2));
            this._element.append(element);
        };
        return BuildDumpSection;
    }(Controls.BaseControl));
    exports.BuildDumpSection = BuildDumpSection;
    BuildDumpSection.enhance(BuildDumpSection, $(".build-dump"), {});
    // Notify the parent frame that the host has been loaded
    VSS.notifyLoadSucceeded();
});
