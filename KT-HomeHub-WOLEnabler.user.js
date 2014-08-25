// ==UserScript==
// @name        KT-HomeHub-WOLEnabler
// @namespace   https://github.com/iAmGhost/KT-HomeHub-WOLEnabler
// @description Brings back WOL menu from KT HomeHub
// @include     http://172.30.1.254/new/user_main.asp
// @version     1.0
// @grant       none
// ==/UserScript==

$(document).ready(function() {
	var ddns_button = $("#additional_func_btn_1");

	if (ddns_button) {
		ddns_button.parent().after($('<div id="additional_func_btn_2" class="detail_sub_btn_3item">| Wake On LAN 설정</div>'));
		$('#additional_func_btn_2').click(function() {
			LetsGo('/new/user_03_6_2_wakeonlan.asp');
		});
	}
});
 