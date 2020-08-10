//한글주석 처리방법
/*
여document.write($nullData,"<br>");러줄 주석 처리방법,
여러줄 주석 처리방법,
여러줄 주석 처리방법;
*/
//01.문서상의 표현
document.write("안녕하세요","<br>");
//문서에 ("안녕하세요") 작성해라/,의 의미:and개념/;의 개념:코드는 여기까지임
document.write("자바스크립트,제이쿼리 강의 입니다;거기까지야.종료","<br>");
document.write("9시반~6시반"+"<br>");//+의 개념:and/도큐먼트를,에,가 '객체_도큐먼트'."메서드_롸이트"()

//02.변수:언제든지 변할수 있는 수(데이터).데이터에 대한 병경이 가능
var a=17;//변수의 초기화(초기 셋팅)
document.write("a라는 그릇에 담겨진 데이터 값:" + a ,"<br>");
a=24;//데이터 값을 변경하는 재할당
document.write("변수 a의 그릇에 담겨진 최종 데이터 값:" + a + "<br>")

var bob="자장면";
bob="짬뽕";
bob="유산슬";
document.write("무적의 신입사원이 시킨 메뉴 :"+bob+"<br>");

//03.자바스크립트의 환경적 요인(경고창,질문창,확인창)
//03-01.경고창 (사용자의 상황에 대한 경고 메시지를 표현.브라우저 팝업창)
//alert("이곳은 경고창입니다.");

//03-02.확인창(사용자에게 확인 또는 취소여부를 인지시킬 때 사용. 회원탈퇴시 확인 여부를 묻는다.)
//confirm("확인 여부를 물을때")

//03-03.질문창(질의 응답창)
//<input type="text" placeholder="미리보기 내용">
// prompt("질문내용->당신의 이름은?","홍길동->값");
//prompt("질문내용","답변에 대한 초기값")
//prompt("질문내용","")

//04. console창(검사창 내부에 존재)
console.log("진행사항 완료");
console.log("안녕하세요");//"출력하겟다"
console.log(bob);//변수의값
/* 
<콘솔창을 사용해야하는 이유>
1.실제 데이터값이 어떤 것인지를 확인하고자 할 때 사용.
2.에러메세지를 확인 가능. 
3.스크립트 파트에서 어디가지 진행이 되었는지를확인할 때 
console.log("진행완료");문장을 에러가 발생할 수 있는 위치에 배치하여 진행여부를 확인  
*/

//05.변수 선언
var msg;//초기 변수명만 선언 
msg="오늘 뭐할래?";//기존에 선언된 변수명에 데이터를 담는다. 
document.write(msg, "<br>");//화면상에 출력
var your_msg="집에가자";//초기변수명부터 데이터를 담는다. 
//변수명 var ="데이터"
document.write(your_msg,"<br>");

//06. 변수명 작성시 주의사항
//06-01.대소문자를 구별
//var num=7;document.write(Num,"<br>")
var num=7;document.write(num,"<br>")

//06-02. 변수명의 첫글자엔 영문,_, $만 가능 (숫자불가능)
var _num="14;";
document.write(_num,"<br>");
var $txt="오늘 날씨 맑음";
document.write($txt,"<br>");

//06-03.변수명 내부에는 영문,숫자,_,$만 사용 할수있음
var num01=27; //1)변수명 선언
document.write(num01,"<br>");//2)출력하자



//-6-04자바스크립트 관련 예약어 사용 금지
var $str_01="자바스크립트";
document.write($str_01,"<br>")

//07.\문제형데이터:큰따옴표,또는 작은 타옴표로 감싸주는 형태 
var $str_02="10000";//사칙연상이 불가능
document.write($str_02,"<br>")//사진연식이 불가능

var $str_03="<h1 class='font_red'>문단 타이틀 태그</h1>"
document.write($str_03,"<br>");

//08.숫자형데이터:숫자를 데이터 값으로 지정한 형태
var $num_01=24;
var $num_02= Number("12");//"12라는 " 문자형데이터를 숫자형 데이터로 변환(명시적 형변환)
document.write($num_01+$num_02,"<br>");

//09.논리형 데이터:true 또는 false, Bolean("유효값")=>true,Boolean("햄버거메뉴")=>false
var isChk=true;
document.write(isChk,"<br>");//true
var $than=16<12;
document.write($than,"<br>");//false
var $value=Boolean("아이디명");//Boolean("아이디명"):값이 존재한다면 true
document.write($value,"<br>");//true
var $value=Boolean("");//Boolean(""):값이 없다면 false
document.write($value,"<br>");//false

//10.초기변수명만 선언되고 아직 데이터 값이 존재하지않은 상태 :undefined
var $detail;
document.write($detail,"<br>");

//11.값이 없음을 선어:null
var $nullData=null;
document.write($nullData,"<br>");

//12.데이터의 형태를 파악할 수 있는 typeof 변수명
var $str_type="빙그레 바나나";
document.write(typeof $str_type,"<br>");//string
var $num_type_01=42;
document.write( typeof $num_type_01,"br");

var $num_type_02="37";
document.write(typeof $num_type_02,"<br>");//string
var $num_type_02=Number("37");
document.write(typeof $num_type_02,"<br>");//number

var $bool_type=true;//논리형 데이터
document.write(typeof $bool_type,"<br>");

var $undefined_type;
document.write($undefined_type,"<br>");//undefined