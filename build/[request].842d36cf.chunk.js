"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[6750],{

/***/ 55949:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.triggerBuild=void 0;var _requestPluginEndpoint=__webpack_require__(50131);var route='build';var triggerBuild=function triggerBuild(){return(0,_requestPluginEndpoint.requestPluginEndpoint)(route,{method:'POST'});};exports.triggerBuild=triggerBuild;

/***/ }),

/***/ 83978:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.fetchBuildLogs=exports.deleteBuildLog=exports.createBuildLog=void 0;var _requestPluginEndpoint=__webpack_require__(50131);var route='logs';var fetchBuildLogs=function fetchBuildLogs(){return(0,_requestPluginEndpoint.requestPluginEndpoint)(route);};exports.fetchBuildLogs=fetchBuildLogs;var createBuildLog=function createBuildLog(_ref){var status=_ref.status;return(0,_requestPluginEndpoint.requestPluginEndpoint)('actions',{method:'POST',body:{status:status}});};exports.createBuildLog=createBuildLog;var deleteBuildLog=function deleteBuildLog(_ref2){var id=_ref2.id;return(0,_requestPluginEndpoint.requestPluginEndpoint)("".concat(route,"/").concat(id),{method:'DELETE'});};exports.deleteBuildLog=deleteBuildLog;

/***/ }),

/***/ 40438:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.buildLogs=exports.build=void 0;var _build=_interopRequireWildcard(__webpack_require__(55949));exports.build=_build;var _buildLogs=_interopRequireWildcard(__webpack_require__(83978));exports.buildLogs=_buildLogs;function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}

/***/ }),

/***/ 85894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.LogTableHeaders=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _Table=__webpack_require__(43546);var _Typography=__webpack_require__(33483);var _reactIntl=__webpack_require__(97132);var _getTrad=__webpack_require__(56739);var headers=['ID','Status','Trigger','Timestamp','Actions'];var LogTableHeaders=function LogTableHeaders(){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;return/*#__PURE__*/_react["default"].createElement(_Table.Thead,null,/*#__PURE__*/_react["default"].createElement(_Table.Tr,null,headers.map(function(header,i){return/*#__PURE__*/_react["default"].createElement(_Table.Th,{key:i},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma"},formatMessage({id:(0,_getTrad.getTrad)("log-table.header.".concat(header.toLowerCase())),defaultMessage:header})));})));};exports.LogTableHeaders=LogTableHeaders;

/***/ }),

/***/ 99402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.LogTableRowEmpty=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _Table=__webpack_require__(43546);var _helperPlugin=__webpack_require__(68547);var LogTableRowEmpty=function LogTableRowEmpty(){return/*#__PURE__*/_react["default"].createElement(_Table.Tr,null,/*#__PURE__*/_react["default"].createElement(_Table.Td,{colSpan:5},/*#__PURE__*/_react["default"].createElement(_helperPlugin.NoContent,{content:{id:'Settings.apiTokens.emptyStateLayout',defaultMessage:'No Build logs'}})));};exports.LogTableRowEmpty=LogTableRowEmpty;

/***/ }),

/***/ 91079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(25108);
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.LogTableRow=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _react=_interopRequireDefault(__webpack_require__(53547));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Table=__webpack_require__(43546);var _Typography=__webpack_require__(33483);var _IconButton=__webpack_require__(49549);var _Trash=_interopRequireDefault(__webpack_require__(62982));var _useReactQuery2=__webpack_require__(80560);var LogTableRow=function LogTableRow(_ref){var log=_ref.log;var id=log.id,status=log.status,trigger=log.trigger,createdAt=log.createdAt;var _useReactQuery=(0,_useReactQuery2.useReactQuery)(),buildLogMutations=_useReactQuery.buildLogMutations;var handleBuildLogDelete=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(id){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return buildLogMutations["delete"].mutate({id:id});case 3:_context.next=8;break;case 5:_context.prev=5;_context.t0=_context["catch"](0);console.error(_context.t0);case 8:case"end":return _context.stop();}}},_callee,null,[[0,5]]);}));return function handleBuildLogDelete(_x){return _ref2.apply(this,arguments);};}();var isSuccessFullBuild=status>=200&&400>status;return/*#__PURE__*/_react["default"].createElement(_Table.Tr,null,/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral900"},id)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:isSuccessFullBuild?'success500':'danger500'},status)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral900"},trigger)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral900"},createdAt)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{onClick:function onClick(){return handleBuildLogDelete(id);},label:"Delete",noBorder:true,icon:/*#__PURE__*/_react["default"].createElement(_Trash["default"],null)})));};exports.LogTableRow=LogTableRow;LogTableRow.propTypes={log:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,status:_propTypes["default"].number.isRequired,trigger:_propTypes["default"].string.isRequired,createdAt:_propTypes["default"].string.isRequired}).isRequired};

/***/ }),

/***/ 9113:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.LogTable=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _Table=__webpack_require__(43546);var _LogTableHeaders=__webpack_require__(85894);var _LogTableRow=__webpack_require__(91079);var _LogTableRowEmpty=__webpack_require__(99402);var _useReactQuery2=__webpack_require__(80560);var LogTable=function LogTable(){var _useReactQuery=(0,_useReactQuery2.useReactQuery)(),buildLogQueries=_useReactQuery.buildLogQueries;var _buildLogQueries$getB=buildLogQueries.getBuildLogs(),isLoading=_buildLogQueries$getB.isLoading,data=_buildLogQueries$getB.data;return/*#__PURE__*/_react["default"].createElement(_Table.Table,null,/*#__PURE__*/_react["default"].createElement(_LogTableHeaders.LogTableHeaders,null),/*#__PURE__*/_react["default"].createElement(_Table.Tbody,null,!isLoading&&data.logs.length?data.logs.map(function(log){return/*#__PURE__*/_react["default"].createElement(_LogTableRow.LogTableRow,{key:log.id,log:log});}):/*#__PURE__*/_react["default"].createElement(_LogTableRowEmpty.LogTableRowEmpty,null)));};exports.LogTable=LogTable;

/***/ }),

/***/ 80560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.useReactQuery=void 0;var _reactQuery=__webpack_require__(23724);var _helperPlugin=__webpack_require__(68547);var _api=__webpack_require__(40438);var _getTrad=__webpack_require__(56739);var triggerBuild=_api.build.triggerBuild;var fetchBuildLogs=_api.buildLogs.fetchBuildLogs,createBuildLog=_api.buildLogs.createBuildLog,deleteBuildLog=_api.buildLogs.deleteBuildLog;var getQuerykey=function getQuerykey(_ref){var base=_ref.base;return[base];};var useReactQuery=function useReactQuery(){var queryClient=(0,_reactQuery.useQueryClient)();var toggleNotification=(0,_helperPlugin.useNotification)();// universal handlers
var handleError=function handleError(error){var message=error.response?error.response.error.message:error.message;toggleNotification({type:'warning',message:message});};var handleSuccess=function handleSuccess(_ref2){var invalidate=_ref2.invalidate,notification=_ref2.notification;if(invalidate){queryClient.invalidateQueries(invalidate);}toggleNotification({type:notification.type,message:{id:(0,_getTrad.getTrad)(notification.tradId)}});};// build
var buildMutations={create:(0,_reactQuery.useMutation)(triggerBuild,{onSuccess:function onSuccess(){var querykey=getQuerykey({base:'get-build-logs'});handleSuccess({invalidate:querykey,notification:{type:'success',tradId:"build.notification.trigger.success"}});},onError:function onError(error){return handleError(error);}})};// build logs
var buildLogQueries={getBuildLogs:function getBuildLogs(params){var queryKey=getQuerykey({base:'get-build-logs'});return(0,_reactQuery.useQuery)(queryKey,function(){return fetchBuildLogs(params).then(function(r){return r.data;});});}};var buildLogMutations={"delete":(0,_reactQuery.useMutation)(deleteBuildLog,{onSuccess:function onSuccess(){var querykey=getQuerykey({base:'get-build-logs'});handleSuccess({invalidate:querykey,notification:{type:'success',tradId:"build-logs.notification.delete.success"}});},onError:function onError(error){return handleError(error);}}),create:(0,_reactQuery.useMutation)(createBuildLog,{onSuccess:function onSuccess(){var querykey=getQuerykey({base:'get-build-logs'});handleSuccess({invalidate:querykey});},onError:function onError(error){return handleError(error);}})};return{buildLogQueries:buildLogQueries,buildLogMutations:buildLogMutations,buildMutations:buildMutations};};exports.useReactQuery=useReactQuery;

/***/ }),

/***/ 97139:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _reactRouterDom=__webpack_require__(39711);var _helperPlugin=__webpack_require__(68547);var _pluginId=__webpack_require__(88257);var _HomePage=_interopRequireDefault(__webpack_require__(86363));/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */var App=function App(){return/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch,null,/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{path:"/plugins/".concat(_pluginId.pluginId),component:_HomePage["default"],exact:true}),/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{component:_helperPlugin.NotFound})));};var _default=App;exports["default"]=_default;

/***/ }),

/***/ 7455:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.HomeContentLayout=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _Layout=__webpack_require__(35395);var _Stack=__webpack_require__(9524);var _LogTable=__webpack_require__(9113);var HomeContentLayout=function HomeContentLayout(){return/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:4},/*#__PURE__*/_react["default"].createElement(_LogTable.LogTable,null)));};exports.HomeContentLayout=HomeContentLayout;

/***/ }),

/***/ 96101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.HomeHeaderLayout=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _react=_interopRequireDefault(__webpack_require__(53547));var _Play=_interopRequireDefault(__webpack_require__(4753));var _Layout=__webpack_require__(35395);var _Button=__webpack_require__(64459);var _useReactQuery2=__webpack_require__(80560);var HomeHeaderLayout=function HomeHeaderLayout(){var _useReactQuery=(0,_useReactQuery2.useReactQuery)(),buildMutations=_useReactQuery.buildMutations;var handleTrigger=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",buildMutations.create.mutate());case 1:case"end":return _context.stop();}}},_callee);}));return function handleTrigger(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{primaryAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:handleTrigger,variant:"primary",startIcon:/*#__PURE__*/_react["default"].createElement(_Play["default"],null),size:"L"},"Trigger Build"),title:"Website Builder",subtitle:"The right way to build websites."});};exports.HomeHeaderLayout=HomeHeaderLayout;

/***/ }),

/***/ 86363:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireWildcard(__webpack_require__(53547));var _Box=__webpack_require__(94117);var _HomeHeaderLayout=__webpack_require__(96101);var _HomeContentLayout=__webpack_require__(7455);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}/*
 *
 * HomePage
 *
 */var HomePage=function HomePage(){return/*#__PURE__*/_react["default"].createElement(_Box.Box,null,/*#__PURE__*/_react["default"].createElement(_HomeHeaderLayout.HomeHeaderLayout,null),/*#__PURE__*/_react["default"].createElement(_HomeContentLayout.HomeContentLayout,null));};var _default=/*#__PURE__*/(0,_react.memo)(HomePage);exports["default"]=_default;

/***/ }),

/***/ 75931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.getPluginEndpointURL=void 0;var _pluginId=__webpack_require__(88257);/**
 * Auto prefix URLs with the plugin id
 *
 * @param {String} endpoint plugin specific endpoint
 * @returns {String} plugin id prefixed endpoint
 */var getPluginEndpointURL=function getPluginEndpointURL(endpoint){return"/".concat(_pluginId.pluginId,"/").concat(endpoint);};exports.getPluginEndpointURL=getPluginEndpointURL;

/***/ }),

/***/ 56739:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.getTrad=void 0;var _pluginId=__webpack_require__(88257);var getTrad=function getTrad(id){return"".concat(_pluginId.pluginId,".").concat(id);};exports.getTrad=getTrad;

/***/ }),

/***/ 50131:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.requestPluginEndpoint=void 0;var _helperPlugin=__webpack_require__(68547);var _getPluginEndpointURL=__webpack_require__(75931);var requestPluginEndpoint=function requestPluginEndpoint(endpoint,data){var url=(0,_getPluginEndpointURL.getPluginEndpointURL)(endpoint);return(0,_helperPlugin.request)(url,data);};exports.requestPluginEndpoint=requestPluginEndpoint;

/***/ })

}]);