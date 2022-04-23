import { createMachine, assign } from 'xstate';

const assignShouldGoTo1a = assign({
  shouldGoTo1a: (_context, event) => event.shouldGoTo1a
});

const baseExperiment = () =>
  createMachine({
    id: 'example',
    initial: 'home',
    context: {
      shouldGoTo1a: false,
    },
    states: {
      home: {
        on: {
          NEXT: 'onboardingQuestion1',
        },
      },
      onboardingQuestion1: {
        on: {
          NEXT: [
            {
              target: 'onboardingQuestion1a',
              cond: (_context, event) => event.shouldGoTo1a,
              actions: [
                assignShouldGoTo1a
              ]
            },
            {
              target: 'onboardingQuestion2',
              actions: [
                assignShouldGoTo1a
              ]
            },
          ],
          PREV: 'home',
        },
      },
      onboardingQuestion1a: {
        on: {
          NEXT: 'onboardingQuestion2',
          PREV: 'onboardingQuestion1'
        },
      },
      onboardingQuestion2: {
        on: {
          NEXT: 'onboardingQuestion3',
          PREV: [
            {
              target: 'onboardingQuestion1a',
              cond: (context, _event) => context.shouldGoTo1a
            },
            {
              target: 'onboardingQuestion1',
            },
          ],
        },
      },
      onboardingQuestion3: {
        on: {
          SIGNUP: 'signup',
          EMAIL_US: 'emailUs',
          PREV: 'onboardingQuestion2',
        },
      },
      signup: {
        on: {
          NEXT: [
            {
              target: 'error',
              cond: (_context, event) => event.error,
            },
            {
              target: 'connectBank',
            },
          ],
          PREV: 'onboardingQuestion3',
        },
      },
      connectBank: {
        on: {
          PREV: 'signup',
          NEXT: [
            {
              target: 'error',
              cond: (_context, event) => event.error,
            },
            {
              target: 'success',
            },
          ],
        },
      },
      emailUs: {
        on: {
          PREV: 'onboardingQuestion3',
          NEXT: 'success',
        },
      },
      success: {
        on: {
          PREV: 'signup',
        },
      },
      error: {
        on: {},
      },
    },
  });

export { baseExperiment };
