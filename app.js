const questions = document.querySelectorAll('.question-answer');
questions.forEach(function(question)
{
    const btn = question.querySelector('.btn-chev');
        
        btn.addEventListener('click', () => {
            questions.forEach(function(item){
                if(item !== question) {
                    item.classList.remove('show-text')
                }
            })
            question.classList.toggle('show-text');
        })
})