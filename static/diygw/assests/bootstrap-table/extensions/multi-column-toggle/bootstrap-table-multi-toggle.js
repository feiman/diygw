!function(t){"use strict";var o=t.fn.bootstrapTable.utils.sprintf,l=function(t){t.initHeader(),t.initSearch(),t.initPagination(),t.initBody()};t.extend(t.fn.bootstrapTable.defaults,{showToggleBtn:!1,multiToggleDefaults:[]}),t.fn.bootstrapTable.methods.push("hideAllColumns","showAllColumns");var i=t.fn.bootstrapTable.Constructor,n=i.prototype.initToolbar;i.prototype.initToolbar=function(){n.apply(this,Array.prototype.slice.apply(arguments));var t=this,o=this.$toolbar.find(">.btn-group");if("string"==typeof this.options.multiToggleDefaults&&(this.options.multiToggleDefaults=JSON.parse(this.options.multiToggleDefaults)),this.options.showToggleBtn&&this.options.showColumns){var l="<button class='btn btn-default hidden' id='showAllBtn'><span class='glyphicon glyphicon-resize-full icon-zoom-in'></span></button>",i="<button class='btn btn-default' id='hideAllBtn'><span class='glyphicon glyphicon-resize-small icon-zoom-out'></span></button>";o.append(l+i),o.find("#showAllBtn").click(function(){t.showAllColumns(),o.find("#hideAllBtn").toggleClass("hidden"),o.find("#showAllBtn").toggleClass("hidden")}),o.find("#hideAllBtn").click(function(){t.hideAllColumns(),o.find("#hideAllBtn").toggleClass("hidden"),o.find("#showAllBtn").toggleClass("hidden")})}},i.prototype.hideAllColumns=function(){var i=this,n=i.options.multiToggleDefaults;t.each(this.columns,function(t,l){if(n.indexOf(l.field)==-1&&l.switchable){l.visible=!1;var s=i.$toolbar.find(".keep-open input").prop("disabled",!1);s.filter(o('[value="%s"]',t)).prop("checked",!1)}}),l(i)},i.prototype.showAllColumns=function(){var i=this;t.each(this.columns,function(t,l){l.switchable&&(l.visible=!0);var n=i.$toolbar.find(".keep-open input").prop("disabled",!1);n.filter(o('[value="%s"]',t)).prop("checked",!0)}),l(i),i.toggleColumn(0,i.columns[0].visible,!1)}}(jQuery);