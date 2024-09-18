// 自機のドットの幅・高さ ※ドットの数 = 横：11個, 縦：7個
const shooterDotW = 3;
const shooterDotH = 4;

// ドット絵生成
let shooterElm1 = "";
let shooterElm2 = "";
for (let y=0; y<7; y++){
	for (let x=0; x<11; x++){
		if (shooterLayout1[y][x] == 0){
			shooterElm1 += x * shooterDotW + "px " + y * shooterDotH +"px black,";
		}
		else{
			shooterElm1 += x * shooterDotW + "px " + y * shooterDotH +"px white,";
		}
		if (shooterLayout2[y][x] == 0){
			shooterElm2 += x * shooterDotW + "px " + y * shooterDotH +"px black,";
		}
		else{
			shooterElm2 += x * shooterDotW + "px " + y * shooterDotH +"px white,";
		}
	}
}
shooterElm1 = shooterElm1.slice(0, shooterElm1.length-1);
shooterElm2 = shooterElm2.slice(0, shooterElm2.length-1);

// 自機情報
let shooter = {
	x: (640 - (shooterDotW * 11)) / 2,
	y: (480 - 20 - (shooterDotH * 7)),
	flg: true,
	life: 3,
	bulletX: 0,
	bulletY: 0,
	bulletFlg: false
};
$("#shooter").css({
	"position": "absolute",
	"width": shooterDotW + "px",
	"height": shooterDotH + "px",
	"margin-left": shooter.x +"px",
	"margin-top": shooter.y +"px",
	"box-shadow": shooterElm1
});
$("#bullet").css({
	"position": "absolute",
	"width": shooterDotW + "px",
	"height": shooterDotH * 5 + "px",
	"margin-left": shooter.bulletX +"px",
	"margin-top": shooter.bulletY +"px",
	"box-shadow": shooterDotW + "px " + shooterDotH +"px white"
});

function playerCount(){
	$("#p_cnt").text("");
	for (let i=0; i<shooter.life; i++){
		$("#p_cnt").text($("#p_cnt").text() + "★");
	}
}

function shooterAct(){
	// 弾の処理
	if (shooter.bulletFlg){
		shooter.bulletY -= shooterDotH * 10;
		$("#bullet").css("margin-top", shooter.bulletY + "px");
		if (shooter.bulletY < 0){
			// 弾が画面外に出た場合
			shooter.bulletFlg = false;
			$("#bullet").hide();
		}
		else {
			// 撃破数
			let defeatCnt = 0;
			for (let i=0; i<invaders.length; i++){
				if (invaders[i]["flg"]){
					if (shooter.bulletFlg){
						// 弾が命中したかを判定
						if (shooter.bulletX >= invaders[i]["x"] && shooter.bulletX <= invaders[i]["x"] + invW){
							if (shooter.bulletY <= invaders[i]["y"] + invW){
								shooter.bulletFlg = false;
								$("#bullet").hide();
								invaders[i]["flg"] = false;
								$("#inv_" + i).css("box-shadow", invElm3);
								setTimeout(function(){$("#inv_" + i).hide();}, 500);
								defeatCnt++;
							}
						}
					}
				}
				else {
					defeatCnt++;
				}
			}
			if (defeatCnt == invaders.length){
				// インベーダー全機撃破時
				return true;
			}
		}
	}

	return false;
}