import { baseExperiment } from '../System/experiments/base';
import { EXPERIMENTS } from './constants';

export const getMachinesBasedOnKey = currentExperiment => {
  switch (currentExperiment) {
    case EXPERIMENTS.baseExperiment:
      return baseExperiment;

    default:
      return baseExperiment;
  }
};

