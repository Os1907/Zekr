import { decrement, increment, incrementByAmount } from '@/Rdeux/counter';
import { RootState } from '@/Rdeux/store';
import Zekr from '@/Types/Azkar';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const useAzkarIndex = (data: Zekr[]) => {
  const [index, setIndex] = useState<number>(0);
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.reducerOne);

  useEffect(() => {
    if(index < 0){
      setIndex(0)
    }
    if (data[index]?.count) {
      dispatch(incrementByAmount(Number(data[index]?.count)));
    } else {
      dispatch(incrementByAmount(0));
    }
    if (data[index]?.category === "stop" ) {
      setIndex((prev) => prev + 1);
    }

    
  }, [index,data]);

  return { index, setIndex , count , dispatch, decrement, increment};
};
