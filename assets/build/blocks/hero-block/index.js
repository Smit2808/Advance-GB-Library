(()=>{"use strict";const e=window.wp.blocks,t=window.wp.i18n,a=window.React,n=window.wp.blockEditor,l=window.wp.components,c=({attributeKey:e="backgroundImage",attributeValue:c={},setAttributes:r})=>(0,a.createElement)("div",{className:"setting-row business-hero__bg-upload"},(0,a.createElement)("label",{htmlFor:`${e}-image`},(0,t.__)("Background Image","anitian")),(0,a.createElement)(n.MediaUploadCheck,null,(0,a.createElement)(n.MediaUpload,{onSelect:t=>{const a={};a.id=t.id,a.url=t.sizes.full.url?t.sizes.full.url:"",a.alt=t.alt,a.width=t.width,a.height=t.height,r({[e]:a})},allowedTypes:["image"],value:c,render:({open:e})=>(0,a.createElement)(a.Fragment,null,c.url?(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"image-preview"},(0,a.createElement)("img",{src:c.url,alt:c.alt})),(0,a.createElement)(l.Button,{className:"button",onClick:e},(0,t.__)("Replace Image","anitian"))):(0,a.createElement)(l.Button,{className:c.url?"image-button":"button button-large",onClick:e},(0,t.__)("Select Image","anitian")))})),c.url?(0,a.createElement)(l.Button,{className:"is-link is-destructive",onClick:()=>r({[e]:{}})},(0,t.__)("Remove Image","anitian")):null),r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"advance-gb-learning/hero-block","version":"0.1.0","title":"Hero Block","category":"advance-gb-learning","icon":"lock","description":"This is a static Hero Block which has elements and design related settings.","keywords":["Hero","Block"],"supports":{"html":false},"textdomain":"advance-gb-learning","attributes":{"blockID":{"type":"string","default":""},"backgroundImage":{"type":"object"},"heading":{"type":"string","default":""},"description":{"type":"string","default":""},"button":{"type":"string","default":""}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');(0,e.registerBlockType)(r,{edit:function(e){const{attributes:r,setAttributes:i,clientId:s}=e,{blockID:o,heading:m,description:d,button:u,backgroundImage:b}=r;i({blockID:`hero-block-${s}`});const g=(0,n.useBlockProps)({className:"hero-block",id:o}),h={};return b&&b.url&&(h.backgroundImage=`url(${b.url})`),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(l.TabPanel,{className:"my-tab-panel",activeClass:"active-tab",tabs:[{name:"general",title:"General",className:"general-tab"},{name:"design",title:"Design",className:"design-tab"},{name:"advance",title:"Advance",className:"advance-tab"}]},(e=>(0,a.createElement)("div",{className:"tab-panel-description-area"},"General"===e.title?(0,a.createElement)("div",null,(0,a.createElement)(l.PanelBody,{title:(0,t.__)("Background Settings","advance-gb-library"),initialOpen:!1},(0,a.createElement)(c,{attributeKey:"backgroundImage",attributeValue:b,setAttributes:i}))):"Design"===e.title?(0,a.createElement)("div",null,"this is Design tab"):(0,a.createElement)("div",null,"this is Advance tab"))))),(0,a.createElement)("div",{...g,style:h},(0,a.createElement)("div",{className:"container"},(0,a.createElement)("div",{className:"hero-block__content"},(0,a.createElement)(n.RichText,{tagName:"h1",placeholder:(0,t.__)("Enter Heading","advance-gb-library"),onChange:e=>i({heading:e}),value:m,className:"hero-block__heading"}),(0,a.createElement)(n.RichText,{tagName:"p",placeholder:(0,t.__)("Enter Description","advance-gb-library"),onChange:e=>i({description:e}),value:d,className:"hero-block__description"}),(0,a.createElement)("div",{className:"btn-wrap hero-block__button"},(0,a.createElement)(n.RichText,{tagName:"p",placeholder:(0,t.__)("Enter button text","advance-gb-library"),keepPlaceholderOnFocus:"true",value:u,className:"btn btn-primary",onChange:e=>i({button:e})}))))))},save:function(e){const{attributes:t}=e,{blockID:l,heading:c,description:r,button:i,backgroundImage:s}=t,o=n.useBlockProps.save({className:"hero-block",id:l}),m={};return s&&s.url&&(m.backgroundImage=`url(${s.url})`),(0,a.createElement)("div",{...o,style:m},(0,a.createElement)("div",{className:"container"},(0,a.createElement)("div",{className:"hero-block__content"},(0,a.createElement)(n.RichText.Content,{tagName:"h1",value:c,className:"hero-block__heading"}),(0,a.createElement)(n.RichText.Content,{tagName:"p",value:r,className:"hero-block__description"}),(0,a.createElement)("div",{className:"btn-wrap hero-block__button"},(0,a.createElement)(n.RichText.Content,{tagName:"p",value:i,className:"btn btn-primary"})))))}})})();