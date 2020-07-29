// ==UserScript==
// @name         [vk.com] VK Wider (with user.js base)
// @version      0.0.7
// @description  More reasonable space use
// @author       stsyn
// @match        https://vk.com/*
// @require      https://github.com/stsyn/derpibooruscripts/raw/master/YouBooru/lib.js
// @require      https://github.com/stsyn/vkRestyle/raw/master/styleHandler.js
// @downloadURL  https://github.com/stsyn/vkRestyle/raw/master/styles/vk_wider/style.user.js
// @updateURL    https://github.com/stsyn/vkRestyle/raw/master/styles/vk_wider/style.user.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const wide_atattach_base = `.popup_box_container .photos_container_albums .photos_album:nth-child(3) {margin-left:2px}
.popup_box_container .photos_container_albums .photos_album:first-child {margin-left:4px}
.im-important-box{width:100%}
.im-member-item .im-member-item--left, .im-member-item .im-member-item--right{width:50%}
.im-member-item .im-member-item--kick{right:15px; left:auto}`;

  const fotowide_atalbum_1x = `#pva_content_photos {zoom:75%}
@media (min-width: 770px) {#pva_content_photos {zoom:85%}}
@media (min-width: 800px) {#pva_content_photos {zoom:90%}}
@media (min-width: 1100px) {#pva_content_photos {zoom:100%}}
@media (min-width: 1250px) {#pva_content_photos {zoom:115%}}
@media (min-width: 1400px) {#pva_content_photos {zoom:130%}}
@media (min-width: 1550px) {#pva_content_photos {zoom:145%}}
@media (min-width: 1700px) {#pva_content_photos {zoom:160%}}
@media (min-width: 1850px) {#pva_content_photos {zoom:175%}}
@media (min-width: 2000px) {#pva_content_photos {zoom:190%}}`;
  const fotowide_atalbum_2x = `#pva_content_photos {zoom:75%}
@media (min-width: 770px) {#pva_content_photos {zoom:85%}}
@media (min-width: 800px) {#pva_content_photos {zoom:90%}}
@media (min-width: 1100px) {#pva_content_photos {zoom:100%}}
@media (min-width: 1250px) {#pva_content_photos {zoom:115%}}
@media (min-width: 1400px) {#pva_content_photos {zoom:65%}}
@media (min-width: 1550px) {#pva_content_photos {zoom:72.5%}}
@media (min-width: 1700px) {#pva_content_photos {zoom:80%}}
@media (min-width: 1850px) {#pva_content_photos {zoom:87.5%}}
@media (min-width: 2000px) {#pva_content_photos {zoom:95%}}`;
  const fotowide_atalbum_base = `.pv_narrow_column_wrap{float:right}
.pv_cont .pv_left_wrap{width:calc(100% - 310px)}
@media (max-width: 950px) {
    #layer{margin-top:10px !important;}
    .pv_cont{max-width:90vw}
    .pv_cont .pv_left_wrap, .pv_cont .pv_reply_form_wrap {width:100%}
    .pv_narrow_column_wrap{float:none; width:100%}
    #pv_narrow {width:100% !important;height:auto !important}
    .pv_no_commments_placeholder_wrap {margin-top:0 !important}
    .pv_cont .pv_closed_commments_placeholder {height:120px}
}
#pv_photo{width:100% !important}
.pva_period_fixed {width:100% !important;text-align:center;left:0 !important}`;

  const wide_athistory_base = `.wk_history_content #wk_content{width:934px}
#wk_history_wall {text-align:center}
.audio_row, .page_doc_row{text-align:left}
.photos_row {height:25vh !important}
.photos_container .photos_row_wrap,.photos_container{display:inline;white-space:normal;margin-right:5px}
.photos_container .photos_row_wrap:last-child{margin-right:0}`;

  const top_base = `[dir] #page_header {width:calc(100% - 80px) !important; padding-left:25px; padding-right:55px}
[dir] .head_nav_item:nth-child(2) {width:calc(30% - 40px)}
[dir] .ts_cont_wrap{left:190px;width:calc(30% - 53px)}
[dir] .input_back,.input_back_wrap,#ts_wrap{width:100%}
[dir] .input_back_content,
[dir] input.text.ts_input {width:100% !important;}
[dir] #top_notify_wrap {width:calc(50%); position:fixed; left:25%}
[dir] #top_notify_cont {width:100% !important}`

  let exw_base = `#side_bar .left_label{width:0px}
#side_bar {width:auto}
#side_bar .side_bar_inner {width:48px}
#side_bar .left_icon{width:25px}
.left_menu_nav_wrap, #ads_left, #left_blocks, #side_bar .more_div {display:none}
#page_body {width: calc(100% - 80px) !important;}
.im-right-menu {left:95px; width: calc(100% - 115px);max-width: calc(100% - 115px);}
.im-page.im-page_classic .im-page--chat-input, .im-page.im-page_classic .im-page--dialogs-footer, .im-create.im-create_classic {max-width: calc(100% - 110px);width: calc(100% - 110px);}
.top_home_link {width:50px}
.top_audio_player{max-width:250px;font-size:90%}
.head_nav_item:nth-child(2) {width: calc(30% - 80px);}
.ts_cont_wrap {left: 60px;width:30vw}
#page_header_wrap {width: 100% !important;}
#page_header {padding-right:5px; padding-left:5px; width: 100% !important}
.im-page .im-page--dialogs, #im_dialogs{width:256px !important}
.im-page.im-page_classic .im-page--dialogs, .im-page.im-page_classic #im_dialogs {width:100% !important}
.im-page .im-page--history {margin-left: 257px;}
.im-page--dialogs-footer.ui_grey_block._im_dialogs_settings {zoom:0.87}`;
  const exw_leftside = `.im-chat-input .im-chat-input--send {left:368px}
.im-page.im-page_classic .im-chat-input .im-chat-input--send {left:122px}
.im-page.im-page_classic .im-page--members{left:321px}`;





  const data = {
    name:'VK wider',
    id:'vk_wider',
    root:`/*
Global
*/
body {background-position:center !important; background-size:cover !important}
#page_layout{width: calc(100% - 30px) !important;}
#page_body{width: calc(100% - 180px) !important; min-height:calc(100vh - 60px)}
.side_bar_inner,.im-right-menu{width:154px}
.scroll_fix:not(#page_layout){width:auto !important}
.left_menu_nav_wrap .ui_actions_menu {right: -125px;}
.ui_actions_menu_top .ui_actions_menu:after, .ui_actions_menu_top .ui_actions_menu:before{right:140.5px}
#side_bar_inner{z-index:20;position:fixed!important;top:0;margin-top:37px!important;padding:10px;background: rgba(237, 238, 240, .5);border-radius:20px}
#stl_text{bottom:20px;position:fixed}

#narrow_column{margin-top:0 !important;top:0 !important; position:absolute !important}
.im-page.im-page_classic{height: auto !important}
.im_stickers_layer_close {position:absolute !important;right:0}

/*[[round]]*/

/*
Wall
*/

.wall_post_cont .page_album_wrap {width:100% !important}
.wall_post_cont .page_album_row {display: inline-block;}
.wall_post_cont .page_album_wrap .page_post_sized_thumbs,
.wall_post_cont .page_album_wrap .page_album_under_row,
.wall_post_cont .page_album_wrap .page_album_photos {display:inline; }
.wall_post_cont .page_album_wrap .page_post_sized_thumbs a {margin-left:5px; display:inline-block}

/*
Сover gropus
*/

.page_cover{height:calc(((100vw - 180px) / 795) * 200)}


/*
Videos
*/

.video_items_list {width:100%}


/*
Music
*/

[dir] #audio_layer_tt{width:calc(100% - 200px) !important; position:fixed; top:42px !important; left:100px !important; margin-left:0 !important}
[dir] .audio_page_layout .audio_friends_list_content,
[dir] .audio_layer_container .audio_page_content_block_wrap {width:100% !important}
[dir] .audio_layer_container .has_friends_block .audio_page__rows_wrap {width:calc(67% - 8px)}
[dir] .audio_layer_container .audio_friends_list_wrap {width:calc(33% - 4px) !important}
[dir] .audio_page_layout .has_friends_block .audio_page__rows_wrap{width:calc(67% - 14px)}
[dir] .audio_page_layout .audio_friends_list_wrap{width:calc(33% - 7px) !important}
.audio_layer_container .CatalogSection__leftColumn {max-width: none}
[dir] .audio_friends_fixed{position:static !important}


/*
Page editor
*/

.wk_page_acts a {display: inline-block;width:30px;height:30px;background-size:100%}
#wk_page_acts {margin-left:0;top:60px;right:30px}
.wk_page_acts a.history{background-position: 0 -60px;}
.wk_page_acts a.edit{background-position: 0 -30px;}

.group_edit_input, .group_edit_textarea,
.group_edit_prefix_wrap,
.group_edit_field .selector_container,
.group_edit_field .results_container,
.pedit_relation_input .result_list,
.pedit_labeled .result_list,
.pedit_labeled{width: 42vw !important}

.group_edit_field .result_list,
#profile_editor input.dark,
#profile_editor textarea,
.pedit_labeled .selector_container,
.pedit_labeled .results_container,
.pedit_relation_input{width:100% !important}

.pedit_relation_input .fl_l{width:calc(100% - 30px) !important}

.pedit_bday,
.pedit_bmonth,
.pedit_byear,
.pedit_bday .result_list,
.pedit_bmonth .result_list,
.pedit_byear .result_list,
.pedit_relation_input .pedit_bday,
.pedit_relation_input .pedit_bmonth,
.pedit_relation_input .pedit_byear{width:calc(14vw - 6px) !important}

/*

Widers

*/

.page_gif_preview, .pages_gif_img {width:auto!important;height:auto!important}

/*[[fotowide_atpost]]*/

/*[[fotowide_atfoto]]*/

/*[[wide_atattach]]*/

/*[[fotowide_atalbum]]*/

/*[[wide_athistory]]*/

/*[[top]]*/

/*
Apps
*/

.apps_recent_block, .apps_feed_block{width:calc(50% - 8px)}
.apps_recent_apps_wrap .apps_recent_all, .apps_featured_slider {width:100%}
.apps_featured_thumbs {margin-left: calc(50% - 400px)}
.apps_feed_str_cont br {content: ""}
.apps_feed_str_cont br:after {content: ""}

/*
Messages
*/

.im-chat-input .im-chat-input--textarea{width:calc(100% - 60px)}
.im-mess, ._im_mess {padding-right:40px}
.nim-dialog--content{border-top:none !important}
.im-page{min-height: calc(100vh - 43px) !important;max-height: calc(100vh - 43px) !important; padding-bottom:0}
.im-page .im-page--top-date-bar-wrap {width:100%}
.im-mess.im-mess_selected:before,
.im-mess.im-mess_unread:before{display:none !important}
.im-page .im-page--history-new-bar_days>span {margin:2px 0;top:0}
.im-mess-stack .im-mess-stack--mess li:last-of-type {margin-top:0; margin-bottom:0}
.im-mess-stack .im-mess-stack--mess li:not(.im-mess_unread):last-of-type,
.im-mess:not(.im-mess_unread) {margin-left:0}
.im-mess .im-mess--text {margin-left:92px}
.im-page .im-page--chat-body-abs {width:100% !important}
#im_dialogs, .im-page--dialogs, .im-page {z-index:auto !important}
.im-page .im-page--chat-body-abs>.ui_scroll_overflow>.ui_scroll_outer {height:100%}
.ui_scroll_overflow  {height:100%}
.im-page--dialogs-footer .vk_msg_info_icon, .im-page--dialogs-footer .im-page--dialogs-settings {margin:14px 10px}
.im-page--dialogs-footer .msg_mark_read_icon {margin:11px 7px}
.im-page--dialogs-footer .im-page--dialogs-filter {padding:15px 11px}
.im-page div.media_preview {max-width:100%}

.media_link--sized .media_link__media {padding:6em 0 !important}

/*[[msg_bg_color]]*/


/*
Old messages
*/

[dir] .im-page{padding-top:0}
[dir] .im-page .im-page--dialogs{padding-top:60px}
[dir] .im-page.im-page_classic,
[dir] .im-page.im-page_classic .nim-dialog--preview._dialog_body,
[dir] .nim-dialog.nim-dialog_classic .nim-dialog--text-preview {max-width:100%; width:100%}
[dir] .im-right-menu .ui_rmenu {max-width:none}
[dir] .im-page.im-page_classic .im-mess-stack,
[dir] .im-page.im-page_classic .im_msg_text,
[dir] .im-page.im-page_classic .im-page--chat-body-abs,
[dir] .im-page.im-page_classic .im-page--chat-body-wrap-inner-2,
[dir] .im-page.im-page_classic .im-page--chat-body-wrap-inner,
[dir] .im-page.im-page_classic .im-mess:not(.im-mess_fwd){max-width:100%; width:100%; display:block}
[dir] .im-page.im-page_classic .im-mess:not(.im-mess_fwd){margin:0;padding-left:4px}
[dir] .im-page.im-page_classic .im-mess:not(.im-mess_fwd).im-mess_unread.im-mess_selected {margin-left:0}
[dir] .im-page.im-page_classic .im-mess:not(.im-mess_fwd).im-mess_unread {margin-left:24px}
[dir] .im-page.im-page_classic .im-mess-stack--mess li:last-of-type {margin-bottom:0}
[dir] .im-page.im-page_classic .im-page--history_search .im-mess--text {max-width:calc(100% - 98px); width:calc(100% - 98px)}
[dir] .im-page.im-page_classic .nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text {max-width:calc(100% - 29px); width:calc(100% - 29px)}
[dir] .im-page_classic.im-page .im-mess:not(.im-mess_fwd).im-mess_unread:not(.im-mess_selected):not(.im-mess_light),
[dir] .im-page.im-page_classic .im-mess:not(.im-mess_fwd).im-mess_unread:not(.im-mess_selected){max-width:calc(100% - 50px); width:calc(100% - 50px)}
[dir] .im-page.im-page_classic .im-page--chat-input,
[dir] .im-page.im-page_classic .im-page--mess-search,
[dir] .im-page.im-page_classic .im-page--dialogs-footer,
[dir] .im-page.im-page_classic .im-page--chat-header,
[dir] .im-create.im-create_classic {max-width:calc(100% - 210px); width:calc(100% - 210px)}
[dir] .im-page.im-page_classic .im-page--pinned {max-width:500px; width:500px}
[dir] .im-page.im-page_classic .im-page--dialogs-footer{padding-right:60px}
[dir] .im-chat-input.im-chat-input_classic .im-chat-input--textarea{width:calc(100% - 120px)}
[dir] .im-page.im-page_classic .im-page--chat-input{border-bottom-width:1px}

[dir] .im-create.im-create_classic{top: 43px;}
[dir] .im-create .im-create--dcontent{width:100% !important}
[dir] .im-create.im-create_classic .im-creation--item{width:calc(50% - 40px); display:inline-block}

[dir] .im-page.im-page_classic .im-page--toolsw {background: none}
[dir] .im-page.im-page_classic .im-page--chat-header{right: 14px; top: 58px; z-index:111 !important; position:fixed; height:41px; border:none; background:none; width:auto}
[dir] .im-page.im-page_classic .im-page--chat-header-in {box-shadow:none; width:auto}
[dir] .im-page.im-page_classic .im-search .im-search--wrap .ui_search .ui_search_field {padding:12px 44px 11px 28px}
[dir] .im-page.im-page_classic .im-search .im-search--btn {margin-top:8px}
[dir] .im-page.im-page_classic .im-search .im-search--calendar {margin-top:14px}
[dir] .im-page.im-page_classic #im_search_history_cal_box {margin-top:4px!important}
[dir] .im-page.im-page_classic .im-page--aside-photo {position:fixed; bottom:30px; right:23px}
[dir] .im-page.im-page_classic .nim-peer.nim-peer_smaller .nim-peer--photo .im_grid>img,
[dir] .im-page.im-page_classic .nim-peer.nim-peer_smaller {width:50px; height:50px}
[dir] .im-page.im-page_classic .im-page--back-btn,
[dir] .im-page.im-page_classic .im-page--back,
[dir] .im-page.im-page_classic .im-page--title-main{display:none}
[dir] .im-page.im-page_classic .im-page--toolsw,
[dir] .im-page.im-page_classic .im-page--header-icon,
[dir] .im-page.im-page_classic .im-page--header-more .ui_actions_menu_icons{height:41px}
[dir] .im-page.im-page_classic .im-page--header.ui_search,
[dir] .im-page.im-page_classic .im-page--mess-actions{width: 420px; right: 15px; top: 38px; z-index: 111; border: none; position: fixed; text-align:right}
[dir] .im-page.im-page_classic .im-page--header.ui_search {top:106px; transform:none !important}
[dir] .im-page.im-page_classic .im-page--selected-messages {right: 454px; top: 38px; z-index: 111; border: none; position: fixed;}
[dir] .im-page.im-page_classic .im-page--dialogs-search {box-shadow:none}
[dir] .im-page.im-page_classic .im-page--dcontent{margin-top:37px}
[dir] .im-page.im-page_classic .im-page--pinned._im_pinned{position: relative; top: 45px}
[dir] .im-page.im-page_classic .im-dialog-select.im-dialog-select_classic {padding: 21px 20px 9px 10px;}
[dir] .im-right-menu {bottom:auto; top:27px; left:195px; z-index:10; margin-left:0;width:calc(100% - 210px);max-width:calc(100% - 210px);border-top:1px solid RGBA(207,207,207,0.09); border-radius:0}
[dir] .im-right-menu .ui_rmenu {padding-left:20px}
[dir] .im-right-menu a,
[dir] .body_im .ui_ownblock{display:inline-block !important;padding-right:20px; margin-right:2px;background:rgba(0,0,0,.075); border-radius:10px; border:none !important}
[dir] .im-right-menu ._im_ui_peers_list a {padding-right:28px}
[dir] .im-right-menu ._im_ui_peers_list a:hover{padding-right:0}
[dir] .im-right-menu a:hover{background:rgba(97, 147, 197, 0.15)}
[dir] .im-right-menu_item_sel {background:rgba(118, 141, 165, 0.24) !important}
[dir] .im-right-menu_sep {margin: 6px 15px 6px -5px;}
[dir] .im-right-menu .im-right-menu--count.ui_rmenu_count  {padding:1px 0; margin: 2px 6px 6px 0}
[dir] .im-right-menu .im-right-menu--unread .ui_rmenu_count{display:block !important; float:left}
[dir] .im-right-menu--text{float:none}
[dir] .ui_rmenu_slider, [dir] .ui_ownblock{display:none !important}
[dir] .ui_ownblock ~ .ui_rmenu_sep{display:none !important}
[dir] .im-page_classic.im-page .im-page--history_search .im-page--chat-body-wrap-inner{padding-top:100px}
[dir] .im-page.im-page_classic .im-chat-input--rcemoji {float:left; padding-left:120px;}
[dir] .im-page.im-page_classic .im-page--members {position:fixed;bottom:17px; left:421px}
[dir] .im-page.im-page_classic .im-page--header-tools,
[dir] .im-page.im-page_classic ._im_dialogs_search {top:130px;position:relative}
[dir] .im-page.im-page_classic .im-page--title {display:flex !important; width:0}
[dir] .im-page.im-page_classic .im-page--search-header {width:550px; position:absolute; right:0; left:auto}
[dir] .im-page.im-page_classic .im-page--top-date-bar-wrap {top:130px; width:87.5%; left:12.5%; position:fixed}
[dir] .im-page.im-page_classic.im-page_history-show .im-page--header.ui_search{display:none}
[dir] .im-page.im-page_classic .im-page--chat-search-empty {margin-top:90px}

[dir] .body_im .ui_rmenu_count {margin-right:0; margin-top:3px; padding-right:0}
[dir] .body_im .ui_search_custom_ctrl {margin-top:-3px}
[dir] .body_im .ui_ownblock_hint, .ui_ownblock_img {display:none}
[dir] .body_im .ui_ownblock {padding-top:0; padding-bottom:0}
[dir] .body_im .ui_ownblock_label {line-height:24px; padding-top:0; height:26px}

[dir] .im-right-menu .ui_rmenu_item, .ui_rmenu_subitem, .body_im .ui_ownblock {line-height:24px; height:26px}
[dir] .im-right-menu .im-right-menu--close {margin: 1px 6px 0 0;}
[dir] .im-right-menu .im-right-menu--count {margin-top:2px}
[dir] ._im_ui_peers_list{min-width:100%; overflow: hidden; overflow-x: auto; white-space:nowrap}
[dir] .im-page.im-page_classic .im-page--dialogs-search .ui_search_field {padding: 0 44px 0 48px; height:41px}

[dir] #layer_stl{position: fixed;left: 0 !important;top: 0 !important;z-index: 0 !important;}
[dir] #box_layer{height: 0;z-index:1}
[dir] .box_layout {z-index:1}

@media (min-width: 1100px) {
[dir] .page_media_link_photo {text-align:center}
[dir] .page_media_link_img {width:387px;height: auto}
}
@media (min-width: 1400px) {
[dir] .page_media_link_photo {width:387px;display:inline-block}
[dir] .wall_module div.page_media_link_desc_wrap {width:calc(100% - 400px);display:inline-block;vertical-align: 300%;}
}
@media (min-width: 800px) {
[dir] .im-page.im-page_classic .page_media_link_photo {text-align:center}
[dir] .im-page.im-page_classic .page_media_link_img {width:387px;height: auto}
}
@media (min-width: 1100px) {
[dir] .im-page.im-page_classic .page_media_link_photo {width:387px;display:inline-block;height: auto}
[dir] .im-page.im-page_classic .wall_module div.page_media_link_desc_wrap {width:calc(100% - 400px);display:inline-block;vertical-align: 300%;}
}
[dir] .wall_module td.page_media_link_desc_td div.page_media_link_desc_wrap  {width:100%}
`,

  options:[
    {
      name:'1. Расширять фотографии в постах до полной ширины',
      id:'fotowide_atpost',
      type:'boolean',
      actions:{
        '/*[[fotowide_atpost]]*/':`.post .page_post_sized_thumbs, #page_photos_module {zoom:0.5}
@media (min-width: 810px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:0.625}}  /*+75*/
@media (min-width: 885px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:0.75}}   /*+70*/
@media (min-width: 955px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:0.875}}  /*+65*/
@media (min-width: 1020px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:1}}     /*+65*/
@media (min-width: 1085px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:1.125}} /*+65*/
@media (min-width: 1155px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:1.25}}  /*+70*/
@media (min-width: 1220px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:1.375}} /*+65*/
@media (min-width: 1285px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:1.5}}   /*+65*/
@media (min-width: 1350px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:1.625}} /*+65*/
@media (min-width: 1420px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:1.75}}  /*+70*/
@media (min-width: 1485px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:1.875}} /*+65*/
@media (min-width: 1550px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:2}}     /*+65*/
@media (min-width: 1670px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:2.25}}  /*+120*/
@media (min-width: 1800px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:2.5}}   /*+130*/
@media (min-width: 1925px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:2.75}}  /*+120*/
@media (min-width: 2150px) {.post .page_post_sized_thumbs, #page_photos_module {zoom:3}}     /*+130*/
.post .page_post_sized_thumbs .video_box_wrap   {zoom:2}
@media (min-width: 810px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:1.6}}
@media (min-width: 885px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:1.333}}
@media (min-width: 955px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:1.143}}
@media (min-width: 1020px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:1}}
@media (min-width: 1085px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.889}}
@media (min-width: 1155px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.8}}
@media (min-width: 1220px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.727}}
@media (min-width: 1285px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.667}}
@media (min-width: 1350px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.615}}
@media (min-width: 1420px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.571}}
@media (min-width: 1485px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.533}}
@media (min-width: 1550px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.5}}
@media (min-width: 1670px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.444}}
@media (min-width: 1800px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.4}}
@media (min-width: 1920px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.364}}
@media (min-width: 2150px) {.post .page_post_sized_thumbs .video_box_wrap  {zoom:0.333}} `
      }
    },
    {
      name:'2. Расширять превью фотографии в общем листе до полной ширины всего ряда',
      id:'fotowide_atfoto',
      type:'boolean',
      actions:{
        '/*[[fotowide_atfoto]]*/':`#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:0.5}
@media (min-width: 740px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:0.625}}
@media (min-width: 835px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:0.75}}
@media (min-width: 930px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:0.875}}
@media (min-width: 1025px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:1}}
@media (min-width: 1120px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:1.125}}
@media (min-width: 1210px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:1.25}}  /*+90*/
@media (min-width: 1300px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:1.375}} /*+90*/
@media (min-width: 1395px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:1.5}}   /*+95*/
@media (min-width: 1485px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:1.625}} /*+90*/
@media (min-width: 1575px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:1.75}}  /*+90*/
@media (min-width: 1665px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:1.875}} /*+90*/
@media (min-width: 1760px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:2}}     /*+95*/
@media (min-width: 1850px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:2.125}} /*+90*/
@media (min-width: 1940px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:2.25}}  /*+90*/
@media (min-width: 2030px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:2.375}} /*+90*/
@media (min-width: 2125px) {#photos_container_photos .photos_row_wrap, .apps_cat_wrap {zoom:2.5}}   /*+95*/`
      }
    },
    {
      name:'3. Расширять прикрепления',
      id:'wide_atattach',
      type:'list',
      options:{
        meeeeeeeeeeh:{
          name:'Нет',
          actions:{}
        },
        wide_atattach_150:{
          name:'150% (>940 пикселей)',
          actions:{
            '/*[[wide_atattach]]*/':'.popup_box_container, #wk_summary, .wk_likes #wk_content {width:937px !important}'+wide_atattach_base
          }
        },
        wide_atattach_200:{
          name:'200% (>1240 пикселей)',
          actions:{
            '/*[[wide_atattach]]*/':'.popup_box_container, #wk_summary, .wk_likes #wk_content {width:1237px !important}'+wide_atattach_base
          }
        },
        wide_atattach_250:{
          name:'250% (>1540 пикселей)',
          actions:{
            '/*[[wide_atattach]]*/':'.popup_box_container, #wk_summary, .wk_likes #wk_content {width:1537px !important}'+wide_atattach_base
          }
        },
        wide_atattach_300:{
          name:'300% (>1840 пикселей)',
          actions:{
            '/*[[wide_atattach]]*/':'.popup_box_container, #wk_summary, .wk_likes #wk_content {width:1837px !important}'+wide_atattach_base
          }
        },
        wide_atattach_o75:{
          name:'75% экрана',
          actions:{
            '/*[[wide_atattach]]*/':'.popup_box_container, #wk_summary, .wk_likes #wk_content {width:75vw !important}'+wide_atattach_base
          }
        },
        wide_atattach_o90:{
          name:'90% экрана',
          actions:{
            '/*[[wide_atattach]]*/':'.popup_box_container, #wk_summary, .wk_likes #wk_content {width:90vw !important}'+wide_atattach_base
          }
        }
      }
    },
    {
      name:'4. Расширять обзор альбомов и фотографии',
      id:'fotowide_atalbum',
      type:'list',
      options:{
        meeeeeeeeeeeh:{
          name:'Нет',
          actions:{}
        },
        fotowide_atalbum_200:{
          name:'Не менее 75% экрана',
          actions:{
            '/*[[fotowide_atalbum]]*/':'.pv_cont{min-width:75vw !important}'+fotowide_atalbum_1x+fotowide_atalbum_base
          }
        },
        fotowide_atalbum_233:{
          name:'Не менее 75% (двойная емкость)',
          actions:{
            '/*[[fotowide_atalbum]]*/':'.pv_cont{min-width:75vw !important}'+fotowide_atalbum_2x+fotowide_atalbum_base
          }
        },
        fotowide_atalbum_133:{
          name:'Не менее 90% экрана',
          actions:{
            '/*[[fotowide_atalbum]]*/':'.pv_cont{min-width:90vw !important}'+fotowide_atalbum_1x+fotowide_atalbum_base
          }
        },
        fotowide_atalbum_167:{
          name:'Не менее 90% (двойная емкость)',
          actions:{
            '/*[[fotowide_atalbum]]*/':'.pv_cont{min-width:90vw !important}'+fotowide_atalbum_2x+fotowide_atalbum_base
          }
        }
      }
    },
    {
      name:'5. Расширять историю вложений',
      id:'wide_athistory',
      type:'list',
      options:{
        meeeeeeeeeeeeh:{
          name:'Нет',
          actions:{}
        },
        wide_athistory150:{
          name:'150% (>940 пикселей)',
          actions:{
            '/*[[wide_athistory]]*/':'.wk_history_content #wk_content{width:934px}'+wide_athistory_base
          }
        },
        wide_athistory200:{
          name:'200% (>1240 пикселей)',
          actions:{
            '/*[[wide_athistory]]*/':'.wk_history_content #wk_content{width:1230px}'+wide_athistory_base
          }
        },
        wide_athistory250:{
          name:'250% (>1530 пикселей)',
          actions:{
            '/*[[wide_athistory]]*/':'.wk_history_content #wk_content{width:1526px}'+wide_athistory_base
          }
        },
        wide_athistory300:{
          name:'300% (>1820 пикселей)',
          actions:{
            '/*[[wide_athistory]]*/':'.wk_history_content #wk_content{width:1822px}'+wide_athistory_base
          }
        },
        wide_athistoryo75:{
          name:'75% экрана',
          actions:{
            '/*[[wide_athistory]]*/':'.wk_history_content #wk_content{width:75vw !important}'+wide_athistory_base
          }
        },
        wide_athistoryo90:{
          name:'90% экрана',
          actions:{
            '/*[[wide_athistory]]*/':'.wk_history_content #wk_content{width:90vw !important}'+wide_athistory_base
          }
        }
      }
    },
    {
      name:'6. Установить кнопки в порядке до обновления',
      id:'old_buttons',
      type:'list',
      options:{
        def_buttons_code:{
          name:'Да',
          actions:{
            __append:`.im-chat-input .im-chat-input--textarea {margin-left:4px}
.post_full_like_wrap .reply_link_wrap{float:left}
.post_full_like_wrap .post_like, .post_full_like_wrap .post_share{float:right}
.im-chat-input .im-chat-input--txt-wrap{padding-bottom:36px;padding-right: 4px;padding-left:4px;}
.im-chat-input .im-chat-input--textarea .placeholder {margin-left:4px;}
.im-chat-input--rcemoji {float:left; padding-left:10px;}
.im-chat-input .im-chat-input--attach {right: 70px;}
.im-chat-input .im-chat-input--send {left:-51px;right:auto}
[dir] .im-send-btn {width:170px; height:30px; border-radius:10px; margin-top:0px; background:rgba(118, 141, 165, 0.24)}
.im-chat-input .im-chat-input--send {position:relative;left:8px;padding:0; bottom:-2px}
[dir] .im-chat-input.im-chat-input_classic .im-chat-input--textarea{margin-left:0}
[dir] .im-chat-input.im-chat-input_classic .im-chat-input--textarea{width:calc(100% - 67px)}
.im-chat-input .im-chat-input--text {padding-right:11px}
.draggable_thumb,.thumb_wrap {min-height:100px !important; min-width:120px !important; display:inline-block; margin: 0 5px 5px 0 !important}
.ui_thumb_x_button._close_btn {z-index:119}
div.media_preview {max-width: none;}
.editable_thumbs {width:100% !important}
.draggable_thumb img {min-width:100% !important; min-height:100% !important; margin:0 !important}
.im-chat-input .im-chat-input--send {position: fixed;left: 528px;padding: 0;bottom: 12px; z-index:-1}
.im-chat-input .im-chat-input--attach {position:fixed; right: 130px; bottom:11px}
.im-chat-input .im-chat-input--smile-wrap {position:fixed; right: 60px; bottom:12px}
._im_media_selector.im-chat-input--selector .media_selector {position:fixed; right: 100px; bottom:12px}
.im-page.im-page_classic .im-chat-input .im-chat-input--send {position: fixed;left: 222px;padding: 0;bottom: 12px; z-index:-1}
.im-page.im-page_classic .im-chat-input .im-chat-input--attach {position:fixed; right: 145px; bottom:11px}
.im-page.im-page_classic .im-chat-input .im-chat-input--smile-wrap {position:fixed; right: 75px; bottom:12px}
.im-page.im-page_classic ._im_media_selector.im-chat-input--selector .media_selector {position:fixed; right: 115px; bottom: 12px; z-index: 100}
[dir] .im-chat-input .im-chat-input--selector .ms_item_more{padding: 6px 5px;}
.im-chat-input--txt-wrap._im_text_wrap {padding-bottom:0}
.im-chat-input--scroll{padding-bottom:38px; z-index:-2}
.im-chat-input--txt-wrap {z-index:119}
.im_editable.im-chat-input--text._im_text {z-index:-3}
.placeholder {z-index:-1}`
          }
        },
        meeeeh:{
          name:'Нет (НЕ рекомендуется в классических диалогах)',
          actions:{__append:`.im-page.im-page_classic .im-page--aside-photo {display:none}
.im-chat-input .im-chat-input--textarea{width:calc(100% - 100px)}`}
        }
      }
    },
    {
      name:'7. Видео не поверх всего',
      id:'video_zindex',
      type:'boolean',
      actions:{
        __append:`#mv_layer_wrap.mv_minimized, .video_thumb_label, .video_item_private, .video_thumb_actions {z-index:1}`
      }
    },
    {
      name:'8. Совместимость с Vanilla Dark 2 (не использовать без необходимости)',
      id:'vd2',
      type:'boolean',
      actions:{
        __append:`#side_bar_inner{background:none !important}
.im-page.im-page_classic .im-page--chat-body-abs {height:auto !important}`
      }
    },
    {
      name:'9. Использовать собственный фон непрочитанных (не рекомендуется совместно с Vanilla Dark 2)',
      id:'custom_unread',
      type:'boolean',
      actions:{
        '/*[[msg_bg_color]]*/':`.nim-dialog:hover{background:rgba(107, 167, 227, 0.15)}
.nim-dialog_unread{background:rgba(97, 147, 197, 0.15)!important}
.nim-dialog_unread:hover{background:rgba(87, 127, 167, 0.15) !important}
.nim-dialog_unread-out .nim-dialog--text-preview {background:rgba(97, 147, 197, 0.15);padding:5px; margin-top:-3px;}
.nim-dialog_unread-out .nim-dialog--unread{display:none !important}
.nim-dialog_selected{background:#82A3C6}
.nim-dialog_selected:hover{background:#6283A6 !important}
.nim-dialog_selected.nim-dialog_unread-out .nim-dialog--text-preview {background:#82A3C6;}`
      }
    },
    {
      name:'10. Панель быстрого доступа к смайлам около сообщений  (НЕ рекомендуется, если не отмечено 6)',
      id:'emoji',
      type:'boolean',
      actions:{
        __append:`@media (min-width: 980px) {
.im-page.im-page_classic .im-chat-input .im-chat-input--smile-wrap {z-index:2}
#page_wrap .im-page.im-page_classic .emoji_cat_title_helper[data-id="-1"] {display:none}
#page_wrap .im-page.im-page_classic .emoji_smiles_row:nth-child(2) {position:fixed;bottom:4px; left:calc(630px - 100vw);}
#page_wrap .im-page.im-page_classic .im-chat-input .emoji_tt_wrap.tt_down{
  display: block !important;
  opacity: 1 !important;
  position: fixed;
  margin-left: -100px;
  bottom: -250px;
  left: calc(130px - 100vw);
  transition: .2s;
  transition-timing-function: ease;
  right: auto}
#page_wrap .im-page.im-page_classic .im-chat-input .emoji_tt_wrap.tt_down:hover{margin-left:0;bottom:-12px;transition:.2s;transition-timing-function:ease}
}
@media (min-width: 1165px) {
#page_wrap .im-page .emoji_cat_title_helper[data-id="-1"] {display:none}
#page_wrap .im-page .emoji_smiles_row:nth-child(2) {position:fixed;bottom:4px; left:calc(830px - 100vw);}
#page_wrap .im-chat-input .emoji_tt_wrap.tt_down{display:block !important; opacity:1 !important; position:fixed;margin-left:-100px;bottom:-250px;left:calc(130px - 100vw);transition:.2s;transition-timing-function:ease; right:auto}
#page_wrap .im-chat-input .emoji_tt_wrap.tt_down:hover{margin-left:0;bottom:-12px;transition:.2s;transition-timing-function:ease}
}
@media (min-width: 1250px) {
#page_wrap .im-page.im-page_classic .emoji_smiles_row:nth-child(3) {position:fixed;bottom:4px; left:calc(900px - 100vw);; width: 270px;}
}
@media (min-width: 1435px) {
#page_wrap .im-page .emoji_smiles_row:nth-child(3) {position:fixed;bottom:4px; width: 270px; left:calc(1100px - 100vw);}
}
.emoji_tt_wrap {visibility: visible;}`
      }
    },
    {
      name:'11. Расширить верхнюю панель вместе с уведомлениями',
      id:'top',
      type:'list',
      options:{
        top_player_code:{
          name:'Да + широкий плеер',
          actions:{
            '/*[[top]]*/':`.top_audio_layer{width:calc(100% - 200px) !important; position:fixed; top:42px; left:100px; margin-left:0 !important}`+top_base
          }
        },
        top_player_code:{
          name:'Да',
          actions:{
            '/*[[top]]*/':top_base
          }
        },
        meeeeh:{
          name:'Нет',
          actions:{}
        }
      }
    },
    {
      name:'12. Уменьшать строки в музыке',
      id:'compact_player',
      type:'boolean',
      actions:{
        __append:`.audio_w_covers .audio_row .audio_row__performers,
.audio_w_covers .audio_row .audio_row__title {position:static; display:inline-block;}
.audio_w_covers .audio_row .audio_row__performer_title {display:block !important}
.audio_w_covers .audio_row .audio_row__title_inner:before {content:"— ";}
.audio_w_covers .audio_row .audio_row__performer_title {height:auto;padding-top:6px;}
.audio_w_covers .audio_row .audio_row__cover, .audio_w_covers .audio_row .audio_row__cover_back, .audio_w_covers .audio_row .audio_row__cover_icon, .audio_w_covers .audio_row .audio_row__sound_bars {height:22px;width:22px;top:4px}
.audio_w_covers .audio_row .audio_row__inner {height:auto;padding-top:2px;padding-left:32px;}
.audio_w_covers .audio_row .audio_row__duration {top:5px;}
.audio_row.audio_hq .audio_row__duration:before {top:3px}
.audio_w_covers .audio_row .audio_row__actions {margin-top:-14px;}
.audio_w_covers .vk_audio_size_info_wrap {margin-top:4px}
.vk_audio_size_info_wrap span {display:inline-block}
.audio_w_covers .audio_row {height:31px;padding:0;}`
      }
    },
    {
      name:'13. Убирать мелкое быстрое окошко сообщений',
      id:'remove_small_chat',
      type:'boolean',
      actions:{
        __append:'#chat_onl_wrap{display:none !important}'
      }
    },
    {
      name:'14. Удалять подписи левого меню, если окно браузера слишком узкое',
      id:'compact',
      type:'list',
      options:{
        exw_code:{
          name:'Автоматически (6. отмечено)',
          actions:{
            __append:'@media (max-width: 900px) {'+exw_base+exw_leftside+'}'
          }
        },
        exw_code6:{
          name:'Автоматически (6. НЕ отмечено)',
          actions:{
            __append:'@media (max-width: 900px) {'+exw_base+'}'
          }
        },
        exwi_code:{
          name:'Всегда (6. отмечено)',
          actions:{
            __append:exw_base+exw_leftside
          }
        },
        exw_code6:{
          name:'Всегда (6. НЕ отмечено)',
          actions:{
            __append:exw_base
          }
        },
        meeeeh:{
          name:'Нет',
          actions:{}
        }
      }
    },
    {
      name:'15. Оквадратить аватарки',
      id:'round',
      type:'boolean',
      actions:{
        '/*[[round]]*/':'.ow_ava.ow_ava_small,.page_list_module .thumb,.ow_ava.ow_ava_comm, .nim-peer .nim-peer--photo-w,img,.chat_tab_img,.im-member-item--photo, .ui_zoom_inner,.fans_idolph_wrap,.like_share_ava.wdd_imgs {border-radius:0!important}'
      }
    }
  ]
};
initiate(data);

})();
