/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/team-members-block/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/team-members-block/edit.js ***!
  \***********************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/team-members-block/editor.scss");
/* harmony import */ var _js_custom_components_contentalignment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/custom-components/contentalignment-component */ "./src/js/custom-components/contentalignment-component.js");

/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */







function Edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    clientId
  } = props;
  const {
    blockID,
    bgColor,
    teamMemberNameColor,
    teamMemberDescriptionColor,
    showTeamMemberName,
    showImage,
    showTeamMemberDescription,
    teamMemberItems,
    contentAlignment,
    columns
  } = attributes;
  if (!blockID) {
    setAttributes({
      blockID: `team-members-section-${clientId}`
    });
  }
  const blockStyle = {};
  bgColor && (blockStyle.backgroundColor = bgColor);
  const headingStyle = {};
  teamMemberNameColor && (headingStyle.color = teamMemberNameColor);
  const descStyle = {};
  teamMemberDescriptionColor && (descStyle.color = teamMemberDescriptionColor);
  const teamMemberContentStyle = {};
  contentAlignment && (teamMemberContentStyle.textAlign = contentAlignment);
  const columnClass = 2 === columns ? 'has-two-columns' : 'has-three-columns';
  const classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'team-members-section', columnClass);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: classes,
    id: blockID
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (0 === teamMemberItems.length) {
      setAttributes({
        teamMemberItems: [{
          title: '',
          description: '',
          imageID: '',
          imageURL: '/wp-content/themes/Advance-GB-Library/assets/src/images/placeholder-image.png',
          imageAlt: '',
          imageWidth: '',
          imageHeight: ''
        }]
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...teamMemberItems];
    arrayCopy[oldIndex] = teamMemberItems[newIndex];
    arrayCopy[newIndex] = teamMemberItems[oldIndex];
    setAttributes({
      teamMemberItems: arrayCopy
    });
  };
  const addNewItem = () => {
    let itemsArr = teamMemberItems;
    const newObject = [...teamMemberItems, {
      index: teamMemberItems.length,
      title: '',
      description: '',
      imageID: '',
      imageURL: '/wp-content/themes/Advance-GB-Library/assets/src/images/placeholder-image.png',
      imageAlt: '',
      imageWidth: '',
      imageHeight: ''
    }];
    itemsArr = newObject;
    setAttributes({
      teamMemberItems: itemsArr
    });
  };
  const teamMemberDivs = teamMemberItems.map((teamMemberItem, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-member-wrapper",
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `item-action-wrap`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "move-item"
    }, 0 < index && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Move Left', 'advance-gb-learning')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-left-alt",
      "aria-hidden": "true",
      onClick: () => moveItem(index, index - 1)
    })), index + 1 < teamMemberItems.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Move Right', 'advance-gb-learning')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      onKeyUp: () => {},
      role: "button",
      tabIndex: 0,
      className: "dashicons dashicons-arrow-right-alt",
      onClick: () => moveItem(index, index + 1)
    }))), 1 < teamMemberItems.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Item', 'advance-gb-learning')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      onKeyUp: () => {},
      role: "button",
      tabIndex: 0,
      className: "remove-item dashicons dashicons-no-alt",
      onClick: () => {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Are you sure you want to delete this item?'));
        if (true === toDelete) {
          const arrayCopy = [...teamMemberItems];
          arrayCopy.splice(index, 1);
          setAttributes({
            teamMemberItems: arrayCopy
          });
        }
      }
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-member-inner-wrapper"
    }, showImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-member-image-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advance-gb-learning-block-control image-preview image-controle-visible-hover"
    }, teamMemberItem.imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `image-controls small-icons icon-bottom-left-fixed`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: item => {
        const arrayCopy = [...teamMemberItems];
        arrayCopy[index].imageID = item.id;
        arrayCopy[index].imageURL = item.url;
        arrayCopy[index].imageAlt = item.alt;
        arrayCopy[index].imageWidth = item.width;
        arrayCopy[index].imageHeight = item.height;
        setAttributes({
          teamMemberItems: arrayCopy
        });
      },
      allowedTypes: ['image'],
      value: teamMemberItem.imageID,
      render: ({
        open
      }) => {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
          text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Image', 'advance-gb-learning')
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          onKeyUp: () => {},
          role: "button",
          tabIndex: 0,
          className: "dashicons dashicons-edit edit-image",
          onClick: open
        }));
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image', 'advance-gb-learning')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      onKeyUp: () => {},
      role: "button",
      tabIndex: 0,
      className: "dashicons dashicons-no-alt remove-image",
      onClick: () => {
        const arrayCopy = [...teamMemberItems];
        arrayCopy[index].imageID = '';
        arrayCopy[index].imageURL = '';
        arrayCopy[index].imageAlt = '';
        arrayCopy[index].imageWidth = '';
        arrayCopy[index].imageHeight = '';
        setAttributes({
          teamMemberItems: arrayCopy
        });
      }
    }))), teamMemberItem.imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      width: teamMemberItem.imageWidth,
      height: teamMemberItem.imageHeight,
      src: teamMemberItem.imageURL,
      alt: teamMemberItem.imageAlt
    })), !teamMemberItem.imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: item => {
        const arrayCopy = [...teamMemberItems];
        arrayCopy[index].imageID = item.id;
        arrayCopy[index].imageURL = item.url;
        arrayCopy[index].imageAlt = item.alt;
        arrayCopy[index].imageWidth = item.width;
        arrayCopy[index].imageHeight = item.height;
        setAttributes({
          teamMemberItems: arrayCopy
        });
      },
      allowedTypes: ['image'],
      value: teamMemberItem.imageURL,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "upload-wrap"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image of 510x106px', 'advance-gb-learning')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        className: "button"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "dashicons dashicons-upload"
      }))))
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-member-content-wrapper",
      style: teamMemberContentStyle
    }, showTeamMemberName && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "h3",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Team Member Name', 'advance-gb-learning'),
      className: "team-member-name",
      value: teamMemberItem.title,
      onChange: value => {
        const arrayCopy = [...teamMemberItems];
        arrayCopy[index].title = value;
        setAttributes({
          teamMemberItems: arrayCopy
        });
      },
      style: headingStyle
    }), showTeamMemberDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Team Member Description', 'advance-gb-learning'),
      className: "team-member-description",
      value: teamMemberItem.description,
      onChange: value => {
        const arrayCopy = [...teamMemberItems];
        arrayCopy[index].description = value;
        setAttributes({
          teamMemberItems: arrayCopy
        });
      },
      style: descStyle
    }))));
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advance-gb-learning-block-sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: 'general',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
        icon: "admin-settings"
      }), ' ', "General"),
      className: 'general-tab'
    }, {
      name: 'design',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
        icon: "art"
      }), " Design"),
      className: 'design-tab'
    }]
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-panel-description-area"
  }, tab.name === 'general' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'advance-gb-learning')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Columns', 'advance-gb-learning'),
    value: columns,
    onChange: value => {
      setAttributes({
        columns: value
      });
    },
    min: 2,
    max: 3
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Team Member Image', 'advance-gb-learning'),
    checked: showImage,
    onChange: showImage => setAttributes({
      showImage
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Team Member Name', 'advance-gb-learning'),
    checked: showTeamMemberName,
    onChange: showTeamMemberName => setAttributes({
      showTeamMemberName
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Team Member Description', 'advance-gb-learning'),
    checked: showTeamMemberDescription,
    onChange: showTeamMemberDescription => setAttributes({
      showTeamMemberDescription
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_js_custom_components_contentalignment_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributeKey: "contentAlignment",
    attributeValue: contentAlignment,
    setAttributes: setAttributes
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'advance-gb-learning'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    colorSettings: [{
      value: bgColor,
      onChange: value => {
        setAttributes({
          bgColor: value === undefined ? '' : value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'advance-gb-learning')
    }, {
      value: teamMemberNameColor,
      onChange: value => {
        setAttributes({
          teamMemberNameColor: value === undefined ? '' : value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Team Member Name Color', 'advance-gb-learning')
    }, {
      value: teamMemberDescriptionColor,
      onChange: value => {
        setAttributes({
          teamMemberDescriptionColor: value === undefined ? '' : value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Team Member Description Color', 'advance-gb-learning')
    }]
  }))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "team-members-wrapper"
  }, teamMemberDivs), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onKeyUp: () => {},
    role: "button",
    tabIndex: 0,
    className: "add-item-wrap",
    onClick: () => {
      addNewItem();
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add New Item', 'advance-gb-learning')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "add-new-item dashicons dashicons-plus",
    "aria-hidden": "true"
  }))))));
}

/***/ }),

/***/ "./src/blocks/team-members-block/index.js":
/*!************************************************!*\
  !*** ./src/blocks/team-members-block/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/team-members-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/team-members-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/team-members-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/team-members-block/style.scss");
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

/***/ "./src/blocks/team-members-block/save.js":
/*!***********************************************!*\
  !*** ./src/blocks/team-members-block/save.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable no-unused-expressions */


function save(props) {
  const {
    attributes,
    className
  } = props;
  const {
    blockID,
    bgColor,
    teamMemberNameColor,
    teamMemberDescriptionColor,
    showTeamMemberName,
    showImage,
    showTeamMemberDescription,
    teamMemberItems,
    contentAlignment,
    columns
  } = attributes;
  const blockStyle = {};
  bgColor && (blockStyle.backgroundColor = bgColor);
  const headingStyle = {};
  teamMemberNameColor && (headingStyle.color = teamMemberNameColor);
  const descStyle = {};
  teamMemberDescriptionColor && (descStyle.color = teamMemberDescriptionColor);
  const teamMemberContentStyle = {};
  contentAlignment && (teamMemberContentStyle.textAlign = contentAlignment);
  const columnClass = 2 === columns ? 'has-two-columns' : 'has-three-columns';
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'team-members-section', columnClass);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: classes,
      id: blockID,
      style: blockStyle
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "team-members-wrapper"
  }, teamMemberItems.map((teamMemberItem, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-member-wrapper",
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-member-inner-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-member-image-wrapper"
    }, teamMemberItem.imageURL && showImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      width: teamMemberItem.imageWidth,
      height: teamMemberItem.imageHeight,
      src: teamMemberItem.imageURL,
      alt: teamMemberItem.imageAlt
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-member-content-wrapper",
      style: teamMemberContentStyle
    }, showTeamMemberName && teamMemberItem.title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "h3",
      className: "team-member-name",
      value: teamMemberItem.title,
      style: headingStyle
    }), showTeamMemberDescription && teamMemberItem.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "p",
      className: "team-member-description",
      value: teamMemberItem.description,
      style: descStyle
    }))));
  }))));
}

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

/***/ "./src/blocks/team-members-block/editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/team-members-block/editor.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/team-members-block/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/team-members-block/style.scss ***!
  \**************************************************/
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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

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

/***/ "./src/blocks/team-members-block/block.json":
/*!**************************************************!*\
  !*** ./src/blocks/team-members-block/block.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"advance-gb-learning/team-members-block","version":"0.1.0","title":"Team Members Block","apiVersion":3,"category":"advance-gb-learning","icon":"groups","description":"This block is used to display the team members in the grid layout. There are different styling and elements options.","keywords":["Team","Members"],"supports":{"html":false},"textdomain":"advance-gb-learning","attributes":{"blockID":{"type":"string","default":""},"bgColor":{"type":"string","default":"#0b2c56"},"teamMemberNameColor":{"type":"string","default":"#fff"},"teamMemberDescriptionColor":{"type":"string","default":"#fff"},"showTeamMemberName":{"type":"boolean","default":true},"showImage":{"type":"boolean","default":true},"teamMemberItems":{"type":"array","default":[]},"showTeamMemberDescription":{"type":"boolean","default":true},"contentAlignment":{"type":"string","default":"center"},"columns":{"type":"number","default":3}},"editorScript":"file:./index.js","style":"file:./style-index.css","editorStyle":"file:./index.css"}');

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
/******/ 			"blocks/team-members-block/index": 0,
/******/ 			"blocks/team-members-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/team-members-block/style-index"], () => (__webpack_require__("./src/blocks/team-members-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map