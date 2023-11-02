function setupFAQ() {
    console.log("Funktionen körs");

    const questions = document.querySelectorAll('.question');

    if (questions.length === 0) {
        console.error('Inga frågelement hittades.');
        return;
    }

    questions.forEach(question => {
        const plusSign = question.querySelector('.plus');
        const answer = question.querySelector('.answer');

        if (!plusSign || !answer) {
            console.error('Fråge- eller svarselement hittades inte.');
            return;
        }

        plusSign.addEventListener('click', () => {
            document.querySelectorAll('.answer').forEach(ans => {
                if (ans !== answer && ans.classList.contains('show')) {
                    ans.classList.remove('show');
                }
            });
            answer.classList.toggle('show');
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupFAQ();
});