"use strict";
(self["webpackChunkstrapi"] = self["webpackChunkstrapi"] || []).push([[6831],{

/***/ 217:
/***/ ((module) => {

module.exports = JSON.parse('{"header.actions.add-assets":"添加新素材","header.actions.add-folder":"添加新文件夹","button.next":"下一步","checkControl.crop-duplicate":"复制裁剪素材","checkControl.crop-original":"裁剪原始素材","control-card.add":"添加","control-card.cancel":"取消","control-card.copy-link":"复制链接","control-card.crop":"裁剪","control-card.download":"下载","control-card.edit":"编辑","control-card.replace-media":"替换媒体文件","control-card.save":"保存","filter.add":"添加筛选条件","form.button.replace-media":"替换媒体","form.input.decription.file-alt":"当此素材无法显示时，会显示该文本。","form.input.label.file-alt":"备用文本","form.input.label.file-caption":"标题","form.input.label.file-name":"文件名","form.input.label.file-location":"位置","form.input.label.folder-name":"文件夹名称","form.input.label.folder-location":"位置","form.input.label.folder-location-default-label":"媒体库","form.upload-url.error.url.invalid":"有一个链接格式不合法","form.upload-url.error.url.invalids":"{number}个链接格式不合法","header.actions.upload-assets":"上传素材","header.content.assets":"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 个素材} other {# 个素材}}","input.button.label":"浏览文件","input.label-bold":"拖拽至此","input.label-normal":"并上传","input.placeholder":"点击选择一个素材，或者拖拽文件至区域","input.placeholder.icon":"在此区域内放置素材","input.url.description":"回车键分隔URL链接","input.url.label":"URL","list.assets-empty.subtitle":"添加一个到列表中","list.assets-empty.title":"暂无素材","list.assets-empty.title-withSearch":"无素材符合当前筛选条件","list.assets.empty":"上传你的第一个素材","list.assets.loading-asset":"正在为媒体加载预览: {path}","list.assets.not-supported-content":"无可用预览","list.assets.preview-asset":"预览视频（路径：{path}）","list.assets.selected":"{number, plural, one {# 个素材} other {# 个素材}}准备上传","list.assets.type-not-allowed":"文件类型不合法","list.table.header.actions":"操作","list.table.header.preview":"预览","list.table.header.name":"名称","list.table.header.ext":"扩展名","list.table.header.size":"大小","list.table.header.createdAt":"创建时间","list.table.header.updatedAt":"最后更新时间","list.table.header.sort":"按{label}排序","list.table.content.empty-label":"此字段为空","list.assets.title":"资源({count})","list.asset.at.finished":"资源已经加载完毕","list.assets-empty.search":"未找到结果","list.assets.empty-upload":"上传你的第一个资源...","list.assets.empty.no-permissions":"没有查看权限","list-assets-select":"选择{name}资源","list.assets.to-upload":"有{number, plural, =0 {没有资源} one {1个资源} other {#个资产}}可以上传","list.folder.edit":"编辑文件夹","list.folder.select":"选择{name}文件夹","list.folder.subtitle":"{folderCount, plural, =0 {#个文件夹} one {#个文件夹} other {#个文件夹}}, {filesCount, plural, =0 {#个资源} one {#个资源} other {#个资源}}","list.folders.title":"文件夹（{count}）","list.folders.link-label":"访问文件夹","mediaLibraryInput.actions.nextSlide":"下一张幻灯片","mediaLibraryInput.actions.previousSlide":"上一张幻灯片","mediaLibraryInput.placeholder":"点击添加素材，或拖放一个素材到当前区域","mediaLibraryInput.slideCount":"共 {m} 张，第 {n} 张","modal.file-details.date":"日期","modal.file-details.dimensions":"尺寸","modal.file-details.extension":"扩展名","modal.file-details.size":"大小","modal.file-details.id":"资源ID","modal.folder.elements.count":"{folderCount}个文件夹，{assetCount}个资源","modal.folder.move.title":"将元素移动到","modal.remove.success-label":"元素已成功删除","modal.move.success-label":"元素已成功移动","modal.upload.cancelled":"手动上传已中止","modal.folder.create.title":"新增文件夹","modal.folder.create.submit":"新增","modal.folder.cancel":"取消","modal.header.go-back":"返回","modal.header.browse":"上传素材","modal.header.file-detail":"详情","modal.header.pending-assets":"素材上传中","modal.header.select-files":"选中文件","modal.nav.browse":"浏览","modal.nav.computer":"从本地","modal.nav.selected":"选中","modal.nav.url":"从链接","modal.selected-list.sub-header-subtitle":"拖拽排序字段中的素材","modal.upload-list.footer.button":"上传 {number, plural, one {# 个素材} other {# 个素材}}到媒体库","modal.upload-list.sub-header-subtitle":"在添加到媒体库之前，管理你的素材","modal.upload-list.sub-header.button":"添加更多的素材","page.title":"设置 - 媒体库","plugin.description.long":"媒体文件管理","plugin.description.short":"媒体文件管理","plugin.name":"媒体库","settings.section.doc.label":"文档","search.placeholder":"搜索素材...","search.clear.label":"清除搜索","search.label":"搜索资源","settings.blockTitle":"资源管理","settings.form.autoOrientation.description":"根据EXIF orientation标签自动旋转图像","settings.form.autoOrientation.label":"开始自动旋转功能","settings.form.responsiveDimensions.description":"上传素材将会自动生成大，中，小三种尺寸","settings.form.responsiveDimensions.label":"启动响应式图片上传","settings.form.sizeOptimization.label":"开启图片大小优化(无损)","settings.form.sizeOptimization.description":"启用此选项将缩小图像大小并略微降低其质量。","settings.form.videoPreview.description":"自动生成6秒钟的视频预览（GIF）","settings.form.videoPreview.label":"预览","settings.header.label":"媒体库 - 设置","settings.section.image.label":"图片","settings.section.video.label":"视频","settings.sub-header.label":"媒体库设置","sort.created_at_asc":"最早上传","sort.created_at_desc":"最近上传","sort.label":"排序","sort.name_asc":"字母顺序 (A to Z)","sort.name_desc":"字母倒序 (Z to A)","sort.updated_at_asc":"最早更新","sort.updated_at_desc":"最近更新","window.confirm.close-modal.file":"你确定吗？你的更改将会丢失","window.confirm.close-modal.files":"你确定吗？你还有一些文件还没有被上传","apiError.FileTooBig":"上传的文件超过允许的最大资源大小","upload.generic-error":"上传文件时发生错误","bulk.select.label":"选择所有资源","content.isLoading":"内容正在加载中","control-card.stop-crop":"停止裁剪","header.actions.add-assets.folder":"文件夹","header.actions.upload-new-asset":"上传新资源","header.content.assets-empty":"无资源","input.label":"拖拽到此处或","input.notification.not-supported":"您无法上传此类型的文件，仅接受以下类型 - {fileTypes}","permissions.not-allowed.update":"您无权编辑此文件","tabs.title":"您希望如何上传您的资源？","config.title":"配置视图 - 媒体库","config.back":"返回","config.subtitle":"定义媒体库的视图设置","config.entries.title":"每页条目数","config.sort.title":"默认排序顺序","config.entries.note":"媒体库中默认显示的资源数量","config.note":"注意：您可以在媒体库中覆盖此值","config.popUpWarning.warning.updateAllSettings":"这将修改您的所有设置","view-switch.list":"列表视图","view-switch.grid":"网格视图"}');

/***/ })

}]);