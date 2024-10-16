
    $('#quiz').quiz({
      //resultsScreen: '#results-screen',
      //counter: false,
      //homeButton: '#custom-home',
      counterFormat: 'Question %current of %total',
      questions: [
        {
          'q': 'According to the latest textbook, who was responsible for the start of the Korean War?',
          'options': [
            'US imperialism',
            'Stalin',
            'North Korea',
          ],
          'correctIndex': 2,
          'correctResponse': 'Correct!',
          'incorrectResponse': 'Not correct! Correct answer:"North Korea"'
        },

        // {
        //   'q': 'What is this image? <img src="https://picsum.photos/100/100">',
        //   'options': [
        //     'Answer 1',
        //     'Answer 2'
        //   ],
        //   'correctIndex': 1,
        //   'correctResponse': 'Custom correct response.',
        //   'incorrectResponse': 'Custom incorrect response.'
        // },

        // {
        //   'q': 'Which image is the correct answer?',
        //   'options': [
        //     '<img src="https://picsum.photos/100/100">',
        //     '<img src="https://picsum.photos/100/100">'
        //   ],
        //   'correctIndex': 0,
        //   'correctResponse': 'Custom correct response.',
        //   'incorrectResponse': 'Custom incorrect response.'
        // },


        {
          'q': 'According to the Soviet textbooks, what was NOT one of the reasons for building the Berlin Wall?',
          'options': [
            'The FRG exporting goods that were in short supply',
            'Armed gangs from West Berlin sought to disrupt the building of socialism in the GDR',
            'Foundation of the GDR'

          ],
          'correctIndex': 2,
          'correctResponse': 'Correct!',
          'incorrectResponse': 'Not correct! Correct answer:"Foundation of the GDR"'
        },
        {
          'q': 'How many days did the Cuban Crisis last?',
          'options': [
            '13',
            '30',
            '33',
          ],
          'correctIndex': 0,
          'correctResponse': 'Correct!',
          'incorrectResponse': 'Not correct! Correct answer: "13"'
        }
      ]
    });
 