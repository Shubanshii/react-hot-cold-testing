import reducer from './reducer';
import {restartGame, makeGuess, generateAuralUpdate} from './actions';

describe('reducer', () => {
    // const guesses = [10, 50, 75];
    // const feedback = "You're Hot!";
    // const auralStatus = `Here's the status of the game right now: You're Hot! You've made 3 guesses.`;
    // const correctAnswer= 70;
    const initialState = {
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: 55
    };

    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(initialState, {type: '_UNKNOWN'});
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 55
        });
        
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '_UNKOWN'});
        expect(state).toBe(currentState);
    });

    describe('restartGame', () => {
        it('Should restart the game', () => {
            let state;
            let correctAnswer = 15
            state = reducer(initialState, restartGame(correctAnswer));
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer
            })
        });

    });

    describe('makeGuess', () => {
        it('should add a new guess', () => {
            let state;
            let guess = 25;
            state = reducer(initialState, makeGuess(guess));
            
            expect(state).toEqual({
                guesses: [guess],
                feedback: 'You\'re Cold...',
                auralStatus: '',
                correctAnswer: 55
            })
        });
    });

    describe('generateAuralUpdate', () => {
        it('Should generate an aural update upon 0 guesses', () => {
            let state;
            // let newState = { guesses: [1],
            // feedback: 'Make your guess!',
            // auralStatus: '',
            // correctAnswer: 55}
            // state = reducer(initialState, makeGuess(1));
            state = reducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual('Here\'s the status of the game right now: Make your guess! You\'ve made 0 guesses.');
            
        });
        // it('Should generate an aural update upon 1 guess', () => {
        //     let state;

        //     state = reducer(state, makeGuess(1));
           
        //     state = reducer(state, generateAuralUpdate());
           
        //     expect(state.auralStatus).toEqual('Here\'s the status of the game right now: You\'re Ice Cold... You\'ve made 1 guess. It was: 1');
        // });
    });
});