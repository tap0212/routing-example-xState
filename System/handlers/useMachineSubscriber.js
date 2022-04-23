import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { XStateMachineContext } from '../../context/xStateContext';

import { xStatevalueToRouteMap } from '../../utils/constants';

export function useMachineSubscriber() {
  const router = useRouter();
  const [current, send, service] =  useContext(XStateMachineContext);
 
  useEffect(() => {
    const subscription = service.subscribe(state => {
      router.push(xStatevalueToRouteMap[state.value])
    });
    return subscription.unsubscribe;
  }, [service]);

  return {
    currentLevelsState: current,
    send,
    service,
  };
}
