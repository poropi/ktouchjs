var NumberSuccessDetail = new Object();
NumberSuccessDetail["1971"]  = res.lap_effect_1go_mp3;
NumberSuccessDetail["19711"] = res.lap_effect_1go_mp3;
NumberSuccessDetail["19712"] = res.lap_effect_2go_mp3;
NumberSuccessDetail["1973"]  = res.lap_effect_v3_mp3;
NumberSuccessDetail["19731"] = res.lap_effect_v3_mp3;
NumberSuccessDetail["19732"] = res.lap_effect_riderman_mp3;
NumberSuccessDetail["1974"]  = res.lap_effect_xrider_mp3;
NumberSuccessDetail["1975"]  = res.lap_effect_amazon_mp3;
NumberSuccessDetail["1976"]  = res.lap_effect_stronger_mp3;
NumberSuccessDetail["1980"]  = res.lap_effect_skyrider_mp3;
NumberSuccessDetail["1981"]  = res.lap_effect_superone_mp3;
NumberSuccessDetail["1984"]  = res.lap_effect_zx_mp3;
NumberSuccessDetail["1988"]  = res.lap_effect_black_mp3;
NumberSuccessDetail["1989"]  = res.lap_effect_rx_mp3;
NumberSuccessDetail["1992"]  = res.lap_effect_sin_mp3;
NumberSuccessDetail["1993"]  = res.lap_effect_zo_mp3;
NumberSuccessDetail["1994"]  = res.lap_effect_riderj_mp3;
NumberSuccessDetail["2000"]  = res.lap_effect_kuga_mp3;
NumberSuccessDetail["2001"]  = res.lap_effect_agito_mp3;
NumberSuccessDetail["20011"] = res.lap_effect_agito_mp3;
NumberSuccessDetail["20012"] = res.lap_effect_g4_mp3;
NumberSuccessDetail["2002"]  = res.lap_effect_ruki_mp3;
NumberSuccessDetail["20021"] = res.lap_effect_ruki_mp3;
NumberSuccessDetail["20022"] = res.lap_effect_ryuga_mp3;
NumberSuccessDetail["2003"]  = res.lap_effect_555_mp3;
NumberSuccessDetail["20031"] = res.lap_effect_555_mp3;
NumberSuccessDetail["20032"] = res.lap_effect_ohga_mp3;
NumberSuccessDetail["555"]   = res.lap_effect_555_mp3;
NumberSuccessDetail["000"]   = res.lap_effect_ohga_mp3;
NumberSuccessDetail["2004"]  = res.lap_effect_blade_mp3;
NumberSuccessDetail["20041"] = res.lap_effect_blade_mp3;
NumberSuccessDetail["20042"] = res.lap_effect_glive_mp3;
NumberSuccessDetail["2005"]  = res.lap_effect_hibiki_mp3;
NumberSuccessDetail["20051"] = res.lap_effect_hibiki_mp3;
NumberSuccessDetail["20052"] = res.lap_effect_kabuki_mp3;
NumberSuccessDetail["2006"]  = res.lap_effect_kabuto_mp3;
NumberSuccessDetail["20061"] = res.lap_effect_kabuto_mp3;
NumberSuccessDetail["20062"] = res.lap_effect_caucasus_mp3;
NumberSuccessDetail["2007"]  = res.lap_effect_denoh_mp3;
NumberSuccessDetail["20071"] = res.lap_effect_denoh_mp3;
NumberSuccessDetail["20072"] = res.lap_effect_gaoh_mp3;
NumberSuccessDetail["2008"]  = res.lap_effect_kiva_mp3;
NumberSuccessDetail["20081"] = res.lap_effect_kiva_mp3;
NumberSuccessDetail["20082"] = res.lap_effect_arch_mp3;
NumberSuccessDetail["2009"]  = res.lap_effect_decade_mp3;
NumberSuccessDetail["20091"] = res.lap_effect_decade_mp3;
NumberSuccessDetail["20092"] = res.lap_effect_diend_mp3;
NumberSuccessDetail["2010"]  = res.lap_effect_riderw_mp3;
NumberSuccessDetail["20101"] = res.lap_effect_riderw_mp3;
NumberSuccessDetail["20102"] = res.lap_effect_scull_mp3;
NumberSuccessDetail["2011"]  = res.lap_effect_ooo_mp3;

var Icon_Number = {
		ICON_KUUGA:0,
		ICON_AGITO:1,
		ICON_RYUUKI:2,
		ICON_FAIZU:3,
		ICON_BRADE:4,
		ICON_HIBIKI:5,
		ICON_KABUTO:6,
		ICON_DENOH:7,
		ICON_KIBA:8,
		ICON_DECADE:9,
		ICON_FINAL:10,
		ICON_CANCEL:11,
		ICON_SUM:12
}

var Icon_Type = {
		TYPE_RIDER:0,
		TYPE_DECADE:1,
		TYPE_FINAL:2,
		TYPE_CANCEL:3,
		TYPE_NUMBER:4,
		TYPE_ZERO:5,
		TYPE_ENTER:6,
		TYPE_X:7,
		TYPE_NULL:8,
		TYPE_SUM:9
}

var DEFAULT_SPRITE_SCALE = 1.2;

function InitIconStatus () {
	this.iconNumber = 0;
	this.iconType = 0;
	this.iconPosition = 0;
	this.iconNormalFileName = 0;
	this.iconTouchFileName = "";
	this.iconTouchSoundFileName = "";
	this.iconKamenSoundFileName = "";
	this.iconFinalSoundFileName = "";
}
function IconStatus (
		iconNumber, 
		iconType, 
		iconPosition, 
		iconNormalFileName, 
		iconTouchFileName,
		iconTouchSoundFileName,
		iconKamenSoundFileName,
		iconFinalSoundFileName
		) {
	this.iconPosition = cc.p(0, 0);
	this.iconNumber = iconNumber;
	this.iconType = iconType;
	this.iconPosition = iconPosition;
	this.iconNormalFileName = iconNormalFileName;
	this.iconTouchFileName = iconTouchFileName;
	this.iconTouchSoundFileName = iconTouchSoundFileName;
	this.iconKamenSoundFileName = iconKamenSoundFileName;
	this.iconFinalSoundFileName = iconFinalSoundFileName;
}

var Mode = {
		DECADE : 1,
		DIEND  : 2,
		SHOWA1 : 3,
		SHOWA2 : 4};

var KTouchMode = {
		TESTMODE : [
		          new IconStatus(Icon_Number.ICON_KUUGA,  Icon_Type.TYPE_RIDER,  cc.p(80, 270), res.kuga_png, res.kuga_png, res.effect_kuga_mp3, res.effect_ultimate_mp3, res.lap_effect_kuga_mp3)
		          ],
		DECADE : [
		          new IconStatus(Icon_Number.ICON_KUUGA,  Icon_Type.TYPE_RIDER,  cc.p(80, 270), res.kuga_png,   res.kuga_png, res.effect_kuga_mp3, res.effect_ultimate_mp3, res.lap_effect_kuga_mp3),
		          new IconStatus(Icon_Number.ICON_AGITO,  Icon_Type.TYPE_RIDER,  cc.p(80, 170), res.agito_png,  res.agito_png, res.effect_agito_mp3, res.effect_shining_mp3, res.lap_effect_agito_mp3),
		          new IconStatus(Icon_Number.ICON_RYUUKI, Icon_Type.TYPE_RIDER,  cc.p(80,  70), res.ryuki_png,  res.ryuki_png, res.effect_ruki_mp3, res.effect_survivor_mp3, res.lap_effect_ruki_mp3),
		          new IconStatus(Icon_Number.ICON_FAIZU,  Icon_Type.TYPE_RIDER,  cc.p(280,270), res.faiz_png,   res.faiz_png, res.effect_555_mp3, res.effect_blaster_mp3, res.lap_effect_555_mp3),
		          new IconStatus(Icon_Number.ICON_BRADE,  Icon_Type.TYPE_RIDER,  cc.p(180,270), res.blade_png,  res.blade_png, res.effect_blade_mp3, res.effect_king_mp3, res.lap_effect_blade_mp3),
		          new IconStatus(Icon_Number.ICON_HIBIKI, Icon_Type.TYPE_RIDER,  cc.p(280,170), res.hibiki_png, res.hibiki_png, res.effect_hibiki_mp3, res.effect_armd_mp3, res.lap_effect_hibiki_mp3),
		          new IconStatus(Icon_Number.ICON_KABUTO, Icon_Type.TYPE_RIDER,  cc.p(180,170), res.kabuto_png, res.kabuto_png, res.effect_kabuto_mp3, res.effect_hyper_mp3, res.lap_effect_kabuto_mp3),
		          new IconStatus(Icon_Number.ICON_DENOH,  Icon_Type.TYPE_RIDER,  cc.p(280, 70), res.deno_png,   res.deno_png, res.effect_denoh_mp3, res.effect_liner_mp3, res.lap_effect_denoh_mp3),
		          new IconStatus(Icon_Number.ICON_KIBA,   Icon_Type.TYPE_RIDER,  cc.p(180, 70), res.kiva_png,   res.kiva_png, res.effect_kiva_mp3, res.effect_emperor_mp3, res.lap_effect_kiva_mp3),
		          new IconStatus(Icon_Number.ICON_DECADE, Icon_Type.TYPE_DECADE, cc.p(400,170), res.decade_png, res.decade_png, res.effect_decade_mp3, res.effect_decade_mp3, res.lap_effect_decade_mp3),
		          new IconStatus(Icon_Number.ICON_FINAL,  Icon_Type.TYPE_FINAL,  cc.p(400,270), res.finish_png, res.finish_png, "", "", "", ""),
		          new IconStatus(Icon_Number.ICON_CANCEL, Icon_Type.TYPE_CANCEL, cc.p(400, 70), res.cancel_png, res.cancel_png, "", "", "", "")
		],
		DIEND : [
		         new IconStatus(Icon_Number.ICON_KUUGA,  Icon_Type.TYPE_RIDER,  cc.p(80, 270), res.g4_png,       res.g4_png,       res.effect_g4_mp3,       res.effect_g4_mp3,       res.lap_effect_g4_mp3),
		         new IconStatus(Icon_Number.ICON_AGITO,  Icon_Type.TYPE_RIDER,  cc.p(80, 170), res.ryuga_png,    res.ryuga_png,    res.effect_ryuga_mp3,    res.effect_survivor_mp3, res.lap_effect_ryuga_mp3),
		         new IconStatus(Icon_Number.ICON_RYUUKI, Icon_Type.TYPE_RIDER,  cc.p(80,  70), res.orga_png,     res.orga_png,     res.effect_ohga_mp3,     res.effect_ohga_mp3,     res.lap_effect_ohga_mp3),
		         new IconStatus(Icon_Number.ICON_FAIZU,  Icon_Type.TYPE_RIDER,  cc.p(280,270), res.graive_png,   res.graive_png,   res.effect_glive_mp3,    res.effect_king_mp3,     res.lap_effect_glive_mp3),
		         new IconStatus(Icon_Number.ICON_BRADE,  Icon_Type.TYPE_RIDER,  cc.p(180,270), res.hibiki_png,   res.hibiki_png,   res.effect_kabuki_mp3,   res.effect_armd_mp3,     res.lap_effect_kabuki_mp3),
		         new IconStatus(Icon_Number.ICON_HIBIKI, Icon_Type.TYPE_RIDER,  cc.p(280,170), res.cucasias_png, res.cucasias_png, res.effect_caucasus_mp3, res.effect_hyper_mp3,    res.lap_effect_caucasus_mp3),
		         new IconStatus(Icon_Number.ICON_KABUTO, Icon_Type.TYPE_RIDER,  cc.p(180,170), res.arch_png,     res.arch_png,     res.effect_arch_mp3,     res.effect_arch_mp3,     res.lap_effect_arch_mp3),
		         new IconStatus(Icon_Number.ICON_DENOH,  Icon_Type.TYPE_RIDER,  cc.p(280, 70), res.scall_png,    res.scall_png,    res.effect_scull_mp3,    res.effect_scull_mp3,    res.lap_effect_scull_mp3),
		         new IconStatus(Icon_Number.ICON_KIBA,   Icon_Type.TYPE_NULL ,  cc.p(180, 70), res.null_png,     res.null_png,     "",                      "",                      ""),
		         new IconStatus(Icon_Number.ICON_DECADE, Icon_Type.TYPE_DECADE, cc.p(400,170), res.diend_png,    res.diend_png,    res.effect_diend_mp3,    res.effect_diend_mp3,    res.lap_effect_diend_mp3),
		         new IconStatus(Icon_Number.ICON_FINAL,  Icon_Type.TYPE_FINAL,  cc.p(400,270), res.finish_png,   res.finish_png,   "",                      "",                      ""),
		         new IconStatus(Icon_Number.ICON_CANCEL, Icon_Type.TYPE_CANCEL, cc.p(400, 70), res.cancel_png,   res.cancel_png,   "",                      "",                      "")
		],
		SHOWA1 : [
                 new IconStatus(Icon_Number.ICON_KUUGA,  Icon_Type.TYPE_RIDER,  cc.p(80, 270), res.rider_png,    res.rider_png,    res.effect_1go_mp3,      res.effect_1go_mp3,          res.lap_effect_1go_mp3   ),
		         new IconStatus(Icon_Number.ICON_AGITO,  Icon_Type.TYPE_RIDER,  cc.p(80, 170), res.rider2_png,   res.rider2_png,   res.effect_2go_mp3,      res.effect_2go_mp3,          res.lap_effect_2go_mp3   ),
		         new IconStatus(Icon_Number.ICON_RYUUKI, Icon_Type.TYPE_RIDER,  cc.p(80,  70), res.v3_png,       res.v3_png,       res.effect_v3_mp3,       res.effect_v3_mp3,           res.lap_effect_v3_mp3    ),
		         new IconStatus(Icon_Number.ICON_FAIZU,  Icon_Type.TYPE_RIDER,  cc.p(280,270), res.riderman_png, res.riderman_png, res.effect_riderman_mp3, res.effect_riderman_mp3,     res.lap_effect_riderman_mp3),
		         new IconStatus(Icon_Number.ICON_BRADE,  Icon_Type.TYPE_RIDER,  cc.p(180,270), res.x_png,        res.x_png,        res.effect_xrider_mp3,   res.effect_xrider_mp3,       res.lap_effect_xrider_mp3  ),
		         new IconStatus(Icon_Number.ICON_HIBIKI, Icon_Type.TYPE_RIDER,  cc.p(280,170), res.amazon_png,   res.amazon_png,   res.effect_amazon_mp3,   res.effect_amazon_mp3,       res.lap_effect_amazon_mp3  ),
		         new IconStatus(Icon_Number.ICON_KABUTO, Icon_Type.TYPE_RIDER,  cc.p(180,170), res.stronger_png, res.stronger_png, res.effect_stronger_mp3, res.effect_stronger_mp3,     res.lap_effect_stronger_mp3),
		         new IconStatus(Icon_Number.ICON_DENOH,  Icon_Type.TYPE_RIDER,  cc.p(280, 70), res.sky_png,      res.sky_png,      res.effect_skyrider_mp3, res.effect_skyrider_mp3,     res.lap_effect_skyrider_mp3),
		         new IconStatus(Icon_Number.ICON_KIBA,   Icon_Type.TYPE_RIDER,  cc.p(180, 70), res.superone_png, res.superone_png, res.effect_superone_mp3, res.effect_superone_mp3,     res.lap_effect_superone_mp3),
		         new IconStatus(Icon_Number.ICON_DECADE, Icon_Type.TYPE_DECADE, cc.p(400,170), res.decade_png, res.decade_png, res.effect_decade_mp3, res.effect_decade_mp3, res.lap_effect_decade_mp3),
		         new IconStatus(Icon_Number.ICON_FINAL,  Icon_Type.TYPE_FINAL,  cc.p(400,270), res.finish_png, res.finish_png, "", "", "", ""),
		         new IconStatus(Icon_Number.ICON_CANCEL, Icon_Type.TYPE_CANCEL, cc.p(400, 70), res.cancel_png, res.cancel_png, "", "", "", ""),
		         ],
		SHOWA2 : [
		          new IconStatus(Icon_Number.ICON_KUUGA,  Icon_Type.TYPE_RIDER,  cc.p(80, 270), res.rider_png,    res.rider_png,    res.effect_1go_mp3,      res.effect_1go_mp3,    res.lap_effect_1go_mp3   ),
		          new IconStatus(Icon_Number.ICON_AGITO,  Icon_Type.TYPE_RIDER,  cc.p(80, 170), res.rider2_png,   res.rider2_png,   res.effect_2go_mp3,      res.effect_2go_mp3,    res.lap_effect_2go_mp3   ),
		          new IconStatus(Icon_Number.ICON_RYUUKI, Icon_Type.TYPE_RIDER,  cc.p(80,  70), res.v3_png,       res.v3_png,       res.effect_v3_mp3,       res.effect_v3_mp3,     res.lap_effect_v3_mp3    ),
		          new IconStatus(Icon_Number.ICON_FAIZU,  Icon_Type.TYPE_RIDER,  cc.p(280,270), res.zx_png,       res.zx_png,       res.effect_zx_mp3,       res.effect_zx_mp3,     res.lap_effect_zx_mp3    ),
		          new IconStatus(Icon_Number.ICON_BRADE,  Icon_Type.TYPE_RIDER,  cc.p(180,270), res.black_png,    res.black_png,    res.effect_black_mp3,    res.effect_black_mp3,  res.lap_effect_black_mp3 ),
		          new IconStatus(Icon_Number.ICON_HIBIKI, Icon_Type.TYPE_RIDER,  cc.p(280,170), res.rx_png,       res.rx_png,       res.effect_rx_mp3,       res.effect_rx_mp3,     res.lap_effect_rx_mp3    ),
		          new IconStatus(Icon_Number.ICON_KABUTO, Icon_Type.TYPE_RIDER,  cc.p(180,170), res.sin_png,      res.sin_png,      res.effect_sin_mp3,      res.effect_sin_mp3,    res.lap_effect_sin_mp3   ),
		          new IconStatus(Icon_Number.ICON_DENOH,  Icon_Type.TYPE_RIDER,  cc.p(280, 70), res.zo_png,       res.zo_png,       res.effect_zo_mp3,       res.effect_zo_mp3,     res.lap_effect_zo_mp3    ),
		          new IconStatus(Icon_Number.ICON_KIBA,   Icon_Type.TYPE_RIDER,  cc.p(180, 70), res.j_png,        res.j_png,        res.effect_riderj_mp3,   res.effect_riderj_mp3, res.lap_effect_riderj_mp3),
                  new IconStatus(Icon_Number.ICON_DECADE, Icon_Type.TYPE_DECADE, cc.p(400,170), res.decade_png, res.decade_png, res.effect_decade_mp3, res.effect_decade_mp3, res.lap_effect_decade_mp3),
	              new IconStatus(Icon_Number.ICON_FINAL,  Icon_Type.TYPE_FINAL,  cc.p(400,270), res.finish_png, res.finish_png, "", "", "", ""),
	              new IconStatus(Icon_Number.ICON_CANCEL, Icon_Type.TYPE_CANCEL, cc.p(400, 70), res.cancel_png, res.cancel_png, "", "", "", ""),
		],
}

var IconNumberToNumber = [
                          "9",
                          "8",
                          "7",
                          "3",
                          "6",
                          "2",
                          "5",
                          "1",
                          "4",
                          "0",
                          "0",
                          "0"
                          ];

var CallSequenceNumber = [
                          Icon_Number.ICON_KUUGA,
                          Icon_Number.ICON_AGITO,
                          Icon_Number.ICON_RYUUKI,
                          Icon_Number.ICON_KIBA,
                          Icon_Number.ICON_DENOH,
                          Icon_Number.ICON_HIBIKI,
                          Icon_Number.ICON_FAIZU,
                          Icon_Number.ICON_BRADE,
                          Icon_Number.ICON_KABUTO,
                          Icon_Number.ICON_DECADE,
                          Icon_Number.ICON_DECADE,
                          Icon_Number.ICON_DECADE
                          ];
var CommonUtil = {
		mTouchControlFlg : false,
		mFinishAnimationFlg : true,
		mCallAnimationFinishFlg : false,
		mCallIconCount : 0,
		mDecadeAnimationFlg : true,
		mLongTapSprite : Icon_Number.ICON_SUM,
		mLastPushIconNum : Icon_Number.ICON_DECADE,
		mSumPushIconCount : 0,
		mPushIconNumArray : "",
		mCompleteFlg : false
}
