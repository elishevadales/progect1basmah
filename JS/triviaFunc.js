// פונקציה שדואגת להצגי בבאדי את השאלה עם התשובות
// והאזנה לכפתורים של התשובות

function addSingleQuestion(_name,_img,_quesiton,_answers_ar,_correcttAnswer){
  let questionDiv = document.createElement("div");
  questionDiv.className = "question";
  document.querySelector("#id_parent").append(questionDiv);

  questionDiv.innerHTML += `
  <div class="d-flex justify-content-center align-items-center mb-3">
    <img alt="${_name}" src=${_img} style="width:300px; border: 10px solid white; border-radius: 25px;">
  </div>
    <h2 class="display-6">${_quesiton}</h2>
  `;
  let answerDiv = document.createElement("div");
  answerDiv.className = "answers row";
  questionDiv.append(answerDiv);

  _answers_ar.forEach(function(answerItem,i){
    let btn = document.createElement("button");
    btn.className ="col-md-5 ";
    btn.innerHTML = answerItem;
    answerDiv.append(btn);
    btn.addEventListener("click",function(){
      if(i == _correcttAnswer){
        successAnswer();
      }
      else{
        failAnswer();
      }
    })
  })
}