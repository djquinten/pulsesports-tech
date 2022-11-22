// document.getElementById('backButton').addEventListener('click', () => {
//     window.location.href = './survey.html';
// });
// let test = {hans: {[0]: 55, achternaam: "Pongpong"}, peter: 6};
const test = {
    [0]: {
        title: "RPE Survey",
        description: "Let us know how your workout went.",
        duration: "30/40 seconds",
        Regularity: "after each training session",
        questions: {
            [0]: {
                question: "How was your session today?",
                answers: {
                    [0]: "Very Easy",
                    [1]: "Easy",
                    [2]: "Moderate",
                    [3]: "Somewhat Hard",
                    [4]: "Hard",
                    [5]: "Very Hard",
                    [6]: "Very Very Hard"
                }
            }
        }
    },
    [1]: {
        title: "Mental Health Survey",
        description: "Let us know how you have been feeling lately.",
        duration: "30/40 seconds",
        Regularity: "every 3 days",
        questions: {
            [0]: {
                question: "How do you feel (mentally) today?",
                answers: {
                    [0]: "Bad",
                    [1]: "Normal",
                    [2]: "Good",
                    [3]: "Great"
                }
            },
            [1]: {
                question: "How have you been (mentally) feeling in the past days?",
                answers: {
                    [0]: "Exhausted",
                    [1]: "Tired",
                    [2]: "Neutral",
                    [3]: "Energetic"
                }
            }
        }
    }
}


console.log(JSON.stringify(test));
