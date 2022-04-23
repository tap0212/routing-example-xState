import { useMachine } from '@xstate/react';
import { usePersistState } from '../../hooks/usePersistState';
import { CURRENT_EXPERIMENT } from '../../utils/constants';
import { getMachinesBasedOnKey } from '../../utils';

const useMachineWrapper = () => {
  const [currentExperiment] = usePersistState(CURRENT_EXPERIMENT);

  const xStateConfig = getMachinesBasedOnKey(currentExperiment);
  const initialRouteName = '/';
  const xStateMachine = useMachine(xStateConfig);
  return {
    initialRouteName,
    xStateMachine,
  };
};
export { useMachineWrapper };
