import { createMachine } from 'xstate';

const baseExperiment = () =>
  createMachine({
    id: 'example',
    initial: 'home',
    context: {
      retries: 0,
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
            },
            {
              target: 'onboardingQuestion2',
            },
          ],
          PREV: 'home',
        },
      },
      onboardingQuestion1a: {
        on: {
          NEXT: 'onboardingQuestion2',
          PREV: [
            {
              target: 'onboardingQuestion1',
            },
            {
              target: 'onboardingQuestion2',
            },
          ],
        },
      },
      onboardingQuestion2: {
        on: {
          NEXT: 'onboardingQuestion3',
          PREV: 'onboardingQuestion1',
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
