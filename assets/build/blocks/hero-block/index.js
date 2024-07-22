(()=>{"use strict";const e=window.wp.blocks,a=window.wp.i18n,t=window.React,l=window.wp.blockEditor,n=window.wp.components,r=({attributeKey:e="backgroundImage",attributeValue:r={},setAttributes:i})=>(0,t.createElement)("div",{className:"setting-row"},(0,t.createElement)("label",{htmlFor:`${e}-image`},(0,a.__)("Background Image","advance-gb-library")),(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{onSelect:a=>{const t={};t.id=a.id,t.url=a.sizes.full.url?a.sizes.full.url:"",t.alt=a.alt,t.width=a.width,t.height=a.height,i({[e]:t})},allowedTypes:["image"],value:r,render:({open:e})=>(0,t.createElement)(t.Fragment,null,r.url?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"image-preview"},(0,t.createElement)("img",{src:r.url,alt:r.alt})),(0,t.createElement)(n.Button,{className:"button",onClick:e},(0,a.__)("Replace Image","advance-gb-library"))):(0,t.createElement)(n.Button,{className:r.url?"image-button":"button button-large",onClick:e},(0,a.__)("Select Image","advance-gb-library")))})),r.url?(0,t.createElement)(n.Button,{className:"is-link is-destructive",onClick:()=>i({[e]:{}})},(0,a.__)("Remove Image","advance-gb-library")):null),i=[{label:(0,a.__)("Select Position","advance-gb-library"),value:""},{label:(0,a.__)("Inherit","advance-gb-library"),value:"inherit"},{label:(0,a.__)("Initial","advance-gb-library"),value:"initial"},{label:(0,a.__)("Bottom","advance-gb-library"),value:"bottom"},{label:(0,a.__)("Center","advance-gb-library"),value:"center"},{label:(0,a.__)("Left","advance-gb-library"),value:"left"},{label:(0,a.__)("Right","advance-gb-library"),value:"right"},{label:(0,a.__)("Top","advance-gb-library"),value:"top"},{label:(0,a.__)("Unset","advance-gb-library"),value:"unset"},{label:(0,a.__)("Center center","advance-gb-library"),value:"center center"},{label:(0,a.__)("Left top","advance-gb-library"),value:"left top"},{label:(0,a.__)("Left center","advance-gb-library"),value:"left center"},{label:(0,a.__)("Left bottom","advance-gb-library"),value:"left bottom"},{label:(0,a.__)("Right top","advance-gb-library"),value:"right top"},{label:(0,a.__)("Right center","advance-gb-library"),value:"right center"},{label:(0,a.__)("Right bottom","advance-gb-library"),value:"right bottom"},{label:(0,a.__)("Center top","advance-gb-library"),value:"center top"},{label:(0,a.__)("Center bottom","advance-gb-library"),value:"center bottom"}],c=({attributeKey:e="bgPosition",attributeValue:l={},setAttributes:r})=>(0,t.createElement)("div",{className:"setting-row"},(0,t.createElement)(n.SelectControl,{label:(0,a.__)("Background Position","advance-gb-library"),value:l,options:i,onChange:a=>r({[e]:a})})),b=[{label:(0,a.__)("Select Background Blend Mode","advance-gb-library"),value:""},{label:(0,a.__)("Normal","advance-gb-library"),value:"normal"},{label:(0,a.__)("Multiply","advance-gb-library"),value:"multiply"},{label:(0,a.__)("Screen","advance-gb-library"),value:"screen"},{label:(0,a.__)("Overlay","advance-gb-library"),value:"overlay"},{label:(0,a.__)("Darken","advance-gb-library"),value:"darken"},{label:(0,a.__)("Lighten","advance-gb-library"),value:"lighten"},{label:(0,a.__)("Color Dodge","advance-gb-library"),value:"color-dodge"},{label:(0,a.__)("Color Burn","advance-gb-library"),value:"color-burn"},{label:(0,a.__)("Hard Light","advance-gb-library"),value:"hard-light"},{label:(0,a.__)("Soft Light","advance-gb-library"),value:"soft-light"},{label:(0,a.__)("Difference","advance-gb-library"),value:"difference"},{label:(0,a.__)("Exclusion","advance-gb-library"),value:"exclusion"}],o=({attributeKey:e="bgBlendMode",attributeValue:l={},setAttributes:r})=>(0,t.createElement)("div",{className:"setting-row"},(0,t.createElement)(n.SelectControl,{label:(0,a.__)("Background Blend Mode","advance-gb-library"),value:l,options:b,onChange:a=>r({[e]:a})})),s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"advance-gb-learning/hero-block","version":"0.1.0","title":"Hero Block","category":"advance-gb-learning","icon":"lock","description":"This is a static Hero Block which has elements and design related settings.","keywords":["Hero","Block"],"supports":{"html":false},"textdomain":"advance-gb-learning","attributes":{"blockID":{"type":"string","default":""},"backgroundImage":{"type":"object"},"heading":{"type":"string","default":""},"description":{"type":"string","default":""},"button":{"type":"string","default":""},"bgPosition":{"type":"string","default":""},"bgBlendMode":{"type":"string","default":""}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');(0,e.registerBlockType)(s,{edit:function(e){const{attributes:i,setAttributes:b,clientId:s}=e,{blockID:d,heading:g,description:u,button:m,backgroundImage:v,bgPosition:_,bgBlendMode:h}=i;b({blockID:`hero-block-${s}`});const y=(0,l.useBlockProps)({className:"hero-block",id:d}),p={};return v&&v.url&&(p.backgroundImage=`url(${v.url})`),_&&(p.backgroundPosition=_),h&&(p.backgroundBlendMode=h),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(n.TabPanel,{className:"my-tab-panel",activeClass:"active-tab",tabs:[{name:"general",title:"General",className:"general-tab"},{name:"design",title:"Design",className:"design-tab"},{name:"advance",title:"Advance",className:"advance-tab"}]},(e=>(0,t.createElement)("div",{className:"tab-panel-description-area"},"General"===e.title?(0,t.createElement)("div",null,(0,t.createElement)(n.PanelBody,{title:(0,a.__)("Background Image","advance-gb-library"),initialOpen:!1},(0,t.createElement)(r,{attributeKey:"backgroundImage",attributeValue:v,setAttributes:b}),(0,t.createElement)(c,{attributeKey:"bgPosition",attributeValue:_,setAttributes:b}),(0,t.createElement)(o,{attributeKey:"bgBlendMode",attributeValue:h,setAttributes:b}))):"Design"===e.title?(0,t.createElement)("div",null,"this is Design tab"):(0,t.createElement)("div",null,"this is Advance tab"))))),(0,t.createElement)("div",{...y,style:p},(0,t.createElement)("div",{className:"container"},(0,t.createElement)("div",{className:"hero-block__content"},(0,t.createElement)(l.RichText,{tagName:"h1",placeholder:(0,a.__)("Enter Heading","advance-gb-library"),onChange:e=>b({heading:e}),value:g,className:"hero-block__heading"}),(0,t.createElement)(l.RichText,{tagName:"p",placeholder:(0,a.__)("Enter Description","advance-gb-library"),onChange:e=>b({description:e}),value:u,className:"hero-block__description"}),(0,t.createElement)("div",{className:"btn-wrap hero-block__button"},(0,t.createElement)(l.RichText,{tagName:"p",placeholder:(0,a.__)("Enter button text","advance-gb-library"),keepPlaceholderOnFocus:"true",value:m,className:"btn btn-primary",onChange:e=>b({button:e})}))))))},save:function(e){const{attributes:a}=e,{blockID:n,heading:r,description:i,button:c,backgroundImage:b,bgPosition:o}=a,s=l.useBlockProps.save({className:"hero-block",id:n}),d={};return b&&b.url&&(d.backgroundImage=`url(${b.url})`),o&&(d.backgroundPosition=o),(0,t.createElement)("div",{...s,style:d},(0,t.createElement)("div",{className:"container"},(0,t.createElement)("div",{className:"hero-block__content"},(0,t.createElement)(l.RichText.Content,{tagName:"h1",value:r,className:"hero-block__heading"}),(0,t.createElement)(l.RichText.Content,{tagName:"p",value:i,className:"hero-block__description"}),(0,t.createElement)("div",{className:"btn-wrap hero-block__button"},(0,t.createElement)(l.RichText.Content,{tagName:"p",value:c,className:"btn btn-primary"})))))}})})();