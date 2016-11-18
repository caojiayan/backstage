$(function() {
	initUEditor();

	// 初始化百度副文本编辑器
	function initUEditor() {
		var editor = UE.getEditor('editor', {
			initialFrameWidth: null,
			initialFrameHeight:600,
			scaleEnabled: true,
			autoHeightEnabled: false,
		});
	}
})