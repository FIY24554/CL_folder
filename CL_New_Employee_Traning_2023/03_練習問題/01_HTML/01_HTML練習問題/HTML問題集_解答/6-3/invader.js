// インベーダーの数  ※インベーダーの数 / 編隊の列数 が整数になるよう設定する
const invQty = 40;
// 編隊の列数
const invRow = 4;

// インベーダー編隊の表示領域
const invDispArea = 400;
// 1列に表示するインベーダーの数
const invRowQty = (invQty / invRow);
// インベーダー同士の間隔
const invDistance = invDispArea / invRowQty * 0.3;
// インベーダーの縦横幅
const invW = invDispArea / invRowQty - invDistance;
// インベーダーのドットの幅・高さ ※ドットの数 = 横：11個, 縦：8個
const invDotW = invW / 11;
const invDotH = invW / 8;

let invMaxX = 0;
let invMaxY = 0;
// 配置情報を格納
let invaders = [];
for (let y=0; y<invRow; y++){
	for (let x=0; x<invRowQty; x++){
		invaders.push({
			x: x * invW + (x + 2) * invDistance,
			y: y * invW + (y + 2) * invDistance + 30,
			flg: true
		});
		if (invMaxX < invaders[invaders.length - 1]["x"]){
			invMaxX = invaders[invaders.length - 1]["x"];
		}
	}
	if (invMaxY < invaders[invaders.length - 1]["y"]){
		invMaxY = invaders[invaders.length - 1]["y"];
	}
}
// 横方向に移動する回数
const invMoveXCnt = 100;
// 縦方向に移動する回数
const invMoveYCnt = 20;
// インベーダーの横方向に進む距離
const invMoveX = (600 - invMaxX) / invMoveXCnt;
// インベーダーの縦方向に進む距離
const invMoveY = (invDispArea - invMaxY) / invMoveYCnt;

// インベーダーの弾
let invBullet = {
	x: 0,
	y: 0,
	flg: false
};

// ドット絵生成
let invElm1 = "";
let invElm2 = "";
let invElm3 = "";
for (let y=0; y<8; y++){
	for (let x=0; x<11; x++){
		if (invLayout1[y][x] == 0){
			invElm1 += x * invDotW + "px " + y * invDotH +"px black,";
		}
		else{
			invElm1 += x * invDotW + "px " + y * invDotH +"px white,";
		}
		if (invLayout2[y][x] == 0){
			invElm2 += x * invDotW + "px " + y * invDotH +"px black,";
		}
		else {
			invElm2 += x * invDotW + "px " + y * invDotH +"px white,";
		}
		if (invLayout3[y][x] == 0){
			invElm3 += x * invDotW + "px " + y * invDotH +"px black,";
		}
		else {
			invElm3 += x * invDotW + "px " + y * invDotH +"px white,";
		}
	}
}
invElm1 = invElm1.slice(0, invElm1.length-1);
invElm2 = invElm2.slice(0, invElm2.length-1);
invElm3 = invElm3.slice(0, invElm3.length-1);

// 初期表示
for (let i=0; i<invaders.length; i++){
	$("#game").append("<div id='inv_" + i + "' class='invader'></div>");
	$("#inv_" + i).css({"margin-left": invaders[i]["x"] +"px", "margin-top": invaders[i]["y"] +"px"});
}
$(".invader").css({
	"position": "absolute",
	"width": invDotW + "px",
	"height": invDotH + "px",
	"box-shadow": invElm1
});
// ゲーム開始時は必ず1体目から弾が発射される
$("#game").append("<div id='inv_bullet'></div>");
invBullet.x = invaders[0]["x"] + invW / 2;
invBullet.y = invaders[0]["y"] + invW;
invBullet.flg = true;
$("#inv_bullet").css({
	"position": "absolute",
	"width": invDotW + "px",
	"height": invDotH * 10 + "px",
	"margin-left": invBullet.x +"px",
	"margin-top": invBullet.y +"px",
	"box-shadow": invDotW + "px " + invDotH +"px white"
});

// インベーダーの動き(true：右, false：左)
let direction = true;

function invaderAct(stepCnt){
	for (let i=0; i<invaders.length; i++){
		if (invaders[i]["flg"]){
			// 進行方向
			if (direction){
				// 右方向
				invaders[i]["x"] += invMoveX;
			}
			else{
				// 左方向
				invaders[i]["x"] -= invMoveX;
			}
			// インベーダー表示位置変更
			$("#inv_" + i).css({"margin-left": invaders[i]["x"] +"px", "margin-top": invaders[i]["y"] +"px"});

			// インベーダーレイアウト変更
			if (stepCnt % 10 <= 5){
				$("#inv_" + i).css("box-shadow", invElm1);
			}
			else{
				$("#inv_" + i).css("box-shadow", invElm2);
			}
		}

		// 弾発射
		if (!invBullet.flg){
			let rnd = Math.floor(Math.random() * invaders.length);
			if (invaders[rnd]["flg"]){
				invBullet.x = invaders[rnd]["x"] + invW / 2;
				invBullet.y = invaders[rnd]["y"] + invW;
				invBullet.flg = true;
				$("#inv_bullet").css({"margin-left": invBullet.x +"px", "margin-top": invBullet.y +"px"});
			}
		}
	}
	if (stepCnt % invMoveXCnt == 0){
		// 進行方向を逆向きにする
		if (direction){
			direction = false;
		}
		else{
			direction = true;
		}
		for (let i=0; i<invaders.length; i++){
			// 下方向に進む
			if (invaders[i]["flg"]){
				invaders[i]["y"] += invMoveY;
			}
		}
	}

	// 弾の処理
	invBullet.y += invDotH * 5;
	$("#inv_bullet").css("margin-top", invBullet.y +"px");
	// 弾が命中したかを判定
	if (shooter.flg){
		if (invBullet.x >= shooter.x && invBullet.x <= shooter.x + shooterDotW * 11){
			if (invBullet.y >= shooter.y){
				invBullet.flg = false;
				shooter.flg = false;
				shooter.life -= 1;
				playerCount();
				$("#shooter").css("box-shadow", shooterElm2);

				setTimeout(function(){
					if (shooter.life <= 0){
						gameOver();
					}
					shooter.flg = true;
					shooter.x = (640 - (shooterDotW * 11)) / 2;
					$("#shooter").css({
						"margin-left": shooter.x +"px",
						"box-shadow": shooterElm1
					});
				}, 500);
			}
		}
	}
	if (invBullet.y + invDotH * 10 > 480){
		// 弾が画面外に出た場合
		invBullet.flg = false;
	}

	// インベーダーが最下層まで移動したらゲームオーバー
	if (stepCnt > invMoveXCnt * invMoveYCnt){
		return true;
	}
	return false;
}
