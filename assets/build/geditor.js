/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/custom-components/background-blendmode.js":
/*!**********************************************************!*\
  !*** ./src/js/custom-components/background-blendmode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/js/custom-components/videoupload-component.js":
/*!***********************************************************!*\
  !*** ./src/js/custom-components/videoupload-component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* eslint-disable @wordpress/i18n-no-variables */
/* eslint-disable @wordpress/i18n-no-collapsible-whitespace */



const VideoUploadComponent = ({
  attributeKey = 'video',
  attributeValue = '',
  vidTypeAttrKey = 'vidType',
  vidTypeAttrValue = '',
  vimeoLinkAttrKey = 'vimeoLink',
  vimeoLinkAttrValue = '',
  youtubeLinkAttrKey = 'youtubeLink',
  youtubeLinkAttrValue = '',
  attributeWidth = '900',
  attributeHeight = '506',
  aspectRatio = '16:9',
  setAttributes
}) => {
  let videoTooltip = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Video', 'advance-gb-library');
  if (attributeWidth && attributeHeight) {
    videoTooltip = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Minimum upload size: ${attributeWidth}x${attributeHeight} px. Maintain a ${aspectRatio} aspect ratio.`, 'advance-gb-library');
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select Video Type', 'advance-gb-library'),
    value: vidTypeAttrValue,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Video', 'advance-gb-library'),
      value: 'media-upload'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Youtube Video', 'advance-gb-library'),
      value: 'youtube'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Vimeo Video', 'advance-gb-library'),
      value: 'vimeo'
    }],
    onChange: value => setAttributes({
      [vidTypeAttrKey]: value
    })
  }), vidTypeAttrValue && vidTypeAttrValue === 'media-upload' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: video => setAttributes({
      [attributeKey]: video.url ? video.url : ''
    }),
    type: "video",
    allowedTypes: ['video'],
    value: attributeValue,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, attributeValue === '' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: videoTooltip
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: attributeValue ? 'image-button' : 'button button-large',
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Video', 'advance-gb-library'))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-preview"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      src: attributeValue,
      autoPlay: "",
      muted: "",
      loop: ""
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-action-buttons"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: videoTooltip
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: 'button',
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Video ', 'advance-gb-library'))), attributeValue && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => setAttributes({
        [attributeKey]: ''
      }),
      className: "button remove-button is-primary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove Video', 'advance-gb-library'))))))
  }))), vidTypeAttrValue && vidTypeAttrValue === 'youtube' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enter youtube video link', 'advance-gb-library'),
    value: youtubeLinkAttrValue,
    onChange: value => setAttributes({
      [youtubeLinkAttrKey]: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('It is recommended to use https://www.youtube-nocookie.com/embed/ link for example https://www.youtube-nocookie.com/embed/coGyUE4cz10.', 'advance-gb-library')
  })), vidTypeAttrValue && vidTypeAttrValue === 'vimeo' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enter vimeo video link', 'advance-gb-library'),
    value: vimeoLinkAttrValue,
    onChange: value => setAttributes({
      [vimeoLinkAttrKey]: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('It is recommended to use https://player.vimeo.com/video/video_ID/ link for example https://player.vimeo.com/video/347119375.', 'advance-gb-library')
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoUploadComponent);

/***/ }),

/***/ "./src/scss/geditor.scss":
/*!*******************************!*\
  !*** ./src/scss/geditor.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/js/geditor.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_geditor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/geditor.scss */ "./src/scss/geditor.scss");
/* harmony import */ var _custom_components_mediaupload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-components/mediaupload-component */ "./src/js/custom-components/mediaupload-component.js");
/* harmony import */ var _custom_components_background_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-components/background-position */ "./src/js/custom-components/background-position.js");
/* harmony import */ var _custom_components_background_blendmode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-components/background-blendmode */ "./src/js/custom-components/background-blendmode.js");
/* harmony import */ var _custom_components_contentalignment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-components/contentalignment-component */ "./src/js/custom-components/contentalignment-component.js");
/* harmony import */ var _custom_components_titletag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-components/titletag-component */ "./src/js/custom-components/titletag-component.js");
/* harmony import */ var _custom_components_videoupload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-components/videoupload-component */ "./src/js/custom-components/videoupload-component.js");







/******/ })()
;
//# sourceMappingURL=geditor.js.map