/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/hero-block/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/hero-block/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_custom_components_mediaupload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/custom-components/mediaupload-component */ "./src/js/custom-components/mediaupload-component.js");
/* harmony import */ var _js_custom_components_background_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/custom-components/background-position */ "./src/js/custom-components/background-position.js");
/* harmony import */ var _js_custom_components_background_blendmode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/custom-components/background-blendmode */ "./src/js/custom-components/background-blendmode.js");
/* harmony import */ var _js_custom_components_contentalignment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/custom-components/contentalignment-component */ "./src/js/custom-components/contentalignment-component.js");
/* harmony import */ var _js_custom_components_titletag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../js/custom-components/titletag-component */ "./src/js/custom-components/titletag-component.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);

/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */



// eslint-disable-next-line import/no-unresolved





// eslint-disable-next-line import/no-extraneous-dependencies

function Edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    clientId
  } = props;
  const {
    blockID,
    heading,
    description,
    button,
    backgroundImage,
    bgPosition,
    bgBlendMode,
    contentAlignment,
    titleTag,
    showHeading,
    showDesc,
    showBtn,
    headingColor,
    btnColor,
    btnBgColor,
    contentColor,
    bgColor
  } = attributes;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, 'hero-block', contentAlignment && 'text-' + contentAlignment);
  setAttributes({
    blockID: `hero-block-${clientId}`
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classes,
    id: blockID
  });
  const blockStyle = {};
  backgroundImage && backgroundImage.url && (blockStyle.backgroundImage = `url(${backgroundImage.url})`);
  bgPosition && (blockStyle.backgroundPosition = bgPosition);
  bgBlendMode && (blockStyle.backgroundBlendMode = bgBlendMode);
  blockStyle.backgroundColor = bgColor;
  const headingStyle = {};
  headingColor && (headingStyle.color = headingColor);
  const descStyle = {};
  contentColor && (descStyle.color = contentColor);
  const btnStyle = {};
  btnColor && (btnStyle.color = btnColor);
  btnBgColor && (btnStyle.backgroundColor = btnBgColor);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advance-gb-learning-block-sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: 'general',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
        icon: "admin-settings"
      }), ' ', "General"),
      className: 'general-tab'
    }, {
      name: 'design',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
        icon: "art"
      }), " Design"),
      className: 'design-tab'
    }]
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-panel-description-area"
  }, tab.name === 'general' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'advance-gb-library'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_custom_components_mediaupload_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributeKey: "backgroundImage",
    attributeValue: backgroundImage,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_custom_components_background_position__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributeKey: "bgPosition",
    attributeValue: bgPosition,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_custom_components_background_blendmode__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributeKey: "bgBlendMode",
    attributeValue: bgBlendMode,
    setAttributes: setAttributes
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content', 'advance-gb-library'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Heading', 'advance-gb-library'),
    checked: showHeading,
    onChange: value => setAttributes({
      showHeading: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Description', 'advance-gb-library'),
    checked: showDesc,
    onChange: value => setAttributes({
      showDesc: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Button', 'advance-gb-library'),
    checked: showBtn,
    onChange: value => setAttributes({
      showBtn: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_custom_components_contentalignment_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributeKey: "contentAlignment",
    attributeValue: contentAlignment,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_custom_components_titletag_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributeKey: "titleTag",
    attributeValue: titleTag,
    setAttributes: setAttributes
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'advance-gb-library'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    colorSettings: [{
      value: bgColor,
      onChange: value => {
        setAttributes({
          bgColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'advance-gb-library')
    }, {
      value: headingColor,
      onChange: value => {
        setAttributes({
          headingColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Color', 'advance-gb-library')
    }, {
      value: contentColor,
      onChange: value => {
        setAttributes({
          contentColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Color', 'advance-gb-library')
    }, {
      value: btnBgColor,
      onChange: value => {
        setAttributes({
          btnBgColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Background Color', 'advance-gb-library')
    }, {
      value: btnColor,
      onChange: value => {
        setAttributes({
          btnColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Color', 'advance-gb-library')
    }]
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero-block__content"
  }, showHeading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: titleTag,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Heading', 'advance-gb-library'),
    onChange: value => setAttributes({
      heading: value
    }),
    value: heading,
    className: "hero-block__heading",
    style: headingStyle
  }), showDesc && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Description', 'advance-gb-library'),
    onChange: value => setAttributes({
      description: value
    }),
    value: description,
    className: "hero-block__description",
    style: descStyle
  }), showBtn && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-wrap hero-block__button"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter button text', 'advance-gb-library'),
    keepPlaceholderOnFocus: "true",
    value: button,
    className: "btn btn-primary",
    onChange: value => setAttributes({
      button: value
    }),
    style: btnStyle
  }))))));
}

/***/ }),

/***/ "./src/blocks/hero-block/index.js":
/*!****************************************!*\
  !*** ./src/blocks/hero-block/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/hero-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/hero-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/hero-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/hero-block/style.scss");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/hero-block/save.js":
/*!***************************************!*\
  !*** ./src/blocks/hero-block/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable no-unused-expressions */
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


function Save(props) {
  const {
    attributes,
    className
  } = props;
  const {
    blockID,
    heading,
    description,
    button,
    backgroundImage,
    bgPosition,
    bgBlendMode,
    contentAlignment,
    titleTag,
    showHeading,
    showDesc,
    showBtn,
    headingColor,
    btnColor,
    btnBgColor,
    contentColor,
    bgColor
  } = attributes;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'hero-block', contentAlignment && 'text-' + contentAlignment);
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classes,
    id: blockID
  });
  const blockStyle = {};
  backgroundImage && backgroundImage.url && (blockStyle.backgroundImage = `url(${backgroundImage.url})`);
  bgPosition && (blockStyle.backgroundPosition = bgPosition);
  bgBlendMode && (blockStyle.backgroundBlendMode = bgBlendMode);
  blockStyle.backgroundColor = bgColor;
  const headingStyle = {};
  headingColor && (headingStyle.color = headingColor);
  const descStyle = {};
  contentColor && (descStyle.color = contentColor);
  const btnStyle = {};
  btnColor && (btnStyle.color = btnColor);
  btnBgColor && (btnStyle.backgroundColor = btnBgColor);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero-block__content"
  }, showHeading && heading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: titleTag,
    value: heading,
    className: "hero-block__heading",
    style: headingStyle
  }), showDesc && description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: description,
    className: "hero-block__description",
    style: descStyle
  }), showBtn && button && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-wrap hero-block__button"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: button,
    className: "btn btn-primary",
    style: btnStyle
  })))));
}

/***/ }),

/***/ "./src/js/custom-components/background-blendmode.js":
/*!**********************************************************!*\
  !*** ./src/js/custom-components/background-blendmode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const backgroundblendmode = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Background Blend Mode', 'advance-gb-library'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'advance-gb-library'),
  value: 'normal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Multiply', 'advance-gb-library'),
  value: 'multiply'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Screen', 'advance-gb-library'),
  value: 'screen'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay', 'advance-gb-library'),
  value: 'overlay'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Darken', 'advance-gb-library'),
  value: 'darken'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lighten', 'advance-gb-library'),
  value: 'lighten'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Dodge', 'advance-gb-library'),
  value: 'color-dodge'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Burn', 'advance-gb-library'),
  value: 'color-burn'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hard Light', 'advance-gb-library'),
  value: 'hard-light'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Soft Light', 'advance-gb-library'),
  value: 'soft-light'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Difference', 'advance-gb-library'),
  value: 'difference'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Exclusion', 'advance-gb-library'),
  value: 'exclusion'
}];
const BackgroundBlendmodeComponent = ({
  attributeKey = 'bgBlendMode',
  attributeValue = {},
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Blend Mode', 'advance-gb-library'),
    value: attributeValue,
    options: backgroundblendmode,
    onChange: value => setAttributes({
      [attributeKey]: value
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundBlendmodeComponent);

/***/ }),

/***/ "./src/js/custom-components/background-position.js":
/*!*********************************************************!*\
  !*** ./src/js/custom-components/background-position.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const backgroundPositions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Position', 'advance-gb-library'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inherit', 'advance-gb-library'),
  value: 'inherit'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Initial', 'advance-gb-library'),
  value: 'initial'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom', 'advance-gb-library'),
  value: 'bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'advance-gb-library'),
  value: 'center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'advance-gb-library'),
  value: 'left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'advance-gb-library'),
  value: 'right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top', 'advance-gb-library'),
  value: 'top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unset', 'advance-gb-library'),
  value: 'unset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center center', 'advance-gb-library'),
  value: 'center center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left top', 'advance-gb-library'),
  value: 'left top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left center', 'advance-gb-library'),
  value: 'left center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left bottom', 'advance-gb-library'),
  value: 'left bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right top', 'advance-gb-library'),
  value: 'right top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right center', 'advance-gb-library'),
  value: 'right center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right bottom', 'advance-gb-library'),
  value: 'right bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center top', 'advance-gb-library'),
  value: 'center top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center bottom', 'advance-gb-library'),
  value: 'center bottom'
}];
const BackgroundPositionComponent = ({
  attributeKey = 'bgPosition',
  attributeValue = {},
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Position', 'advance-gb-library'),
    value: attributeValue,
    options: backgroundPositions,
    onChange: value => setAttributes({
      [attributeKey]: value
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundPositionComponent);

/***/ }),

/***/ "./src/js/custom-components/contentalignment-component.js":
/*!****************************************************************!*\
  !*** ./src/js/custom-components/contentalignment-component.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const ContentAlignmentComponent = ({
  attributeKey = 'contentAlignment',
  attributeValue = {},
  setAttributes,
  componentLabel
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: `${attributeKey}-image`
  }, componentLabel ? componentLabel : 'Content alignment'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "inspector-field-button-list inspector-field-button-list-fluid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `inspector-button ${'left' === attributeValue ? 'active' : ''}`,
    onClick: () => setAttributes({
      [attributeKey]: 'left'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "align-pull-left"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `inspector-button ${'center' === attributeValue ? 'active' : ''}`,
    onClick: () => setAttributes({
      [attributeKey]: 'center'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "align-wide"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `inspector-button ${'right' === attributeValue ? 'active' : ''}`,
    onClick: () => setAttributes({
      [attributeKey]: 'right'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "align-pull-right"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentAlignmentComponent);

/***/ }),

/***/ "./src/js/custom-components/mediaupload-component.js":
/*!***********************************************************!*\
  !*** ./src/js/custom-components/mediaupload-component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const MediaUploadComponent = ({
  attributeKey = 'backgroundImage',
  attributeValue = {},
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row bg-image-uploader"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: `${attributeKey}-image`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Image', 'advance-gb-library')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: newImg => {
      const newImage = {};
      newImage.id = newImg.id;
      newImage.url = newImg.sizes.full.url ? newImg.sizes.full.url : '';
      newImage.alt = newImg.alt;
      newImage.width = newImg.width;
      newImage.height = newImg.height;
      setAttributes({
        [attributeKey]: newImage
      });
    },
    allowedTypes: ['image'],
    value: attributeValue.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !attributeValue.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: 'components-button editor-post-featured-image__toggle',
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Image', 'advance-gb-library')) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-preview"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: attributeValue.url,
      alt: attributeValue.alt
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "media-action-buttons"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: 'components-button editor-post-featured-image__action',
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace', 'advance-gb-library')), attributeValue.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: 'components-button editor-post-featured-image__action',
      onClick: () => setAttributes({
        [attributeKey]: {}
      })
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove', 'advance-gb-library')) : null))))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaUploadComponent);

/***/ }),

/***/ "./src/js/custom-components/titletag-component.js":
/*!********************************************************!*\
  !*** ./src/js/custom-components/titletag-component.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const TitleTagComponent = ({
  attributeKey = 'titleTag',
  attributeValue = {},
  setAttributes
}) => {
  const handleButtonClick = value => {
    setAttributes({
      [attributeKey]: value
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row heading-tag-settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: `${attributeKey}-image`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Tag', 'advance-gb-library')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: 'H1' === attributeValue ? 'active' : '',
    onClick: () => handleButtonClick('H1')
  }, "H1"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: 'H2' === attributeValue ? 'active' : '',
    onClick: () => handleButtonClick('H2')
  }, "H2"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: 'H3' === attributeValue ? 'active' : '',
    onClick: () => handleButtonClick('H3')
  }, "H3"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: 'H4' === attributeValue ? 'active' : '',
    onClick: () => handleButtonClick('H4')
  }, "H4"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: 'H5' === attributeValue ? 'active' : '',
    onClick: () => handleButtonClick('H5')
  }, "H5"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: 'H6' === attributeValue ? 'active' : '',
    onClick: () => handleButtonClick('H6')
  }, "H6")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleTagComponent);

/***/ }),

/***/ "./src/blocks/hero-block/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/hero-block/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/hero-block/block.json":
/*!******************************************!*\
  !*** ./src/blocks/hero-block/block.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"advance-gb-learning/hero-block","version":"0.1.0","title":"Hero Block","category":"advance-gb-learning","icon":"format-image","description":"This is a static Hero Block which has elements and design related settings.","keywords":["Hero","Block"],"supports":{"html":false},"textdomain":"advance-gb-learning","attributes":{"blockID":{"type":"string","default":""},"backgroundImage":{"type":"object"},"heading":{"type":"string","default":""},"description":{"type":"string","default":""},"button":{"type":"string","default":""},"bgPosition":{"type":"string","default":""},"bgBlendMode":{"type":"string","default":""},"contentAlignment":{"type":"string","default":"left"},"titleTag":{"type":"string","default":"H1"},"showHeading":{"type":"boolean","default":true},"showDesc":{"type":"boolean","default":true},"showBtn":{"type":"boolean","default":true},"headingColor":{"type":"string","default":"#000"},"btnColor":{"type":"string","default":"#fff"},"btnBgColor":{"type":"string","default":"#000"},"contentColor":{"type":"string","default":"#000"},"bgColor":{"type":"string","default":"#fff"}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/hero-block/index": 0,
/******/ 			"blocks/hero-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkadvance_gb_learning"] = globalThis["webpackChunkadvance_gb_learning"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/hero-block/style-index"], () => (__webpack_require__("./src/blocks/hero-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map