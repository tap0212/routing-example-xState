import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Layout from '../Components/Layout'
import Header from '../Components/Header'
import { XStateMachineContext } from '../context/xStateContext';

import '../styles/globals.css'
import { usePersistState } from '../hooks/usePersistState';
import { CURRENT_EXPERIMENT, EXPERIMENTS } from '../utils/constants';
import { useMachineWrapper } from '../System/handlers/useMachineWrapper';
function MyApp({ Component, pageProps }) {
  const [currentExperiment, setCurrentExperiment] = usePersistState(
    CURRENT_EXPERIMENT,
    EXPERIMENTS.baseExperiment,
  );
  useEffect(() => {
    if (currentExperiment !== EXPERIMENTS.baseExperiment) {
      setCurrentExperiment(EXPERIMENTS.baseExperiment);
    }
  }, []);
  const { xStateMachine } = useMachineWrapper();

  return (
    <XStateMachineContext.Provider value={xStateMachine}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </XStateMachineContext.Provider>
    
  )
}

export default MyApp