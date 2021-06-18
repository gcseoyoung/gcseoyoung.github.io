/*
활동에 따른 열량 소모량 Kcal/Hr
계단 141	등산 196	줄넘기 224		조깅 196	수영 518	수영(평형)273	파도타기 176		에어로빅126		테니스	176		
스키 186	농구 200	볼링 90	소프트폴 90	배구 200	탁구 200	야구180		사이클 111		수상스키 200		피구102

걷기	80
계단	141
줄넘기	224
등산	196
수영	518
요가	25
자전거	250
달리기	196
사이클	111
테니스 176
에어로빅 126
탁구 200
농구 200
스키 186
*/
$(document).ready(function(){
 //ani number test
	$(".nav-tabs > li").click(function(){
			athReset();
			var setkcal=$(this).attr("s_kcal");
			//alert(setkcal);
			$("#setkcal").val(setkcal);
		});
});
function athCal(){
	var kg=$("#kg").val();
	var minute=$("#minute").val();
	var setkcal=$("#setkcal").val();
	var minutecal=setkcal/60;
	if(!minute){ $("#minute").focus(); alert("오늘 운동하신 시간을 분단위로 입력하시면 칼로리가 출력됩니다.");  return;}

	var rtncal=minutecal*minute;
	rtncal=roundPrecision(rtncal,1);
	$(".kcal").text(rtncal);
	return;
}
function roundPrecision (val,precision)
{
		//precision 
		var p=Math.pow(10,precision);
		return Math.round(val*p)/p;
}
function athReset(){
		$("#kg").val("");
		$("#minute").val("");
		$("#setkcal").val("");
		$(".kcal").text("0");
}