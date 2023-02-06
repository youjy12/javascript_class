
$(function(){
    //모달 띄우기

    let modal = `
    <div class="modal">
      <div class="m_inner">
        <img src="./images/pc_prod_notice_20230203.jpg" alt="모달배너">
        <p><input type="checkbox" id="ch"> <label for="ch">일주일간 열지 않음</label><a href="#" title="닫기">닫기</a></p>
      </div>
    </dv>
    `;

    $('body').append(modal);

// 쿠키생성하기
    let ch = $('.modal #ch'); //체크박스 변수선언

    //쿠키파일이 현재 브라우저 존재하면 모달창이 안나오도록 한다.
    if($.cookie('popup')=='none'){
      $('.modal').hide();
    }

    //쿠키의 존재여부를 체크하여 쿠키를 생성하거나 모달을 숨긴다.
    function closeModal(){
      if(ch.is(':checked')){ //체크박스 체크한 경우라면
        //쿠키를 생성하고
        $.cookie('popup', 'none', {expires:7, path:'/'});
      }
      //체크박스에 체크 안한 경우는 그냥 모달을 숨긴다.
      $('.modal').hide(); 
    }

    //닫기 버튼을 클릭하며 closeModal함수를 동작하게 한다.
    $('.modal a').click(function(){
      closeModal();
    });

});
