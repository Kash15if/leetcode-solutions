export function useDebounce(value, delay){
    const [debouncedValue, setDebouncedValue] = useState();

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay)
        
        return ()=>clearTimeout(timeOut);

    }, [value, delay]);

    return debouncedValue;
}

export function useThrottle(value, delay){
    const [throttledValue, useThrottledValue] = useState(value);
    const dateNow = useRef(Date.now());

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            if(Date.now() - dateNow >= delay){
                setThrottledValue(value);
                lastExecuted.current = Date.now();
            }
        }, delay);

        return ()=>clearTimeout(timeout);

    }, [value, delay])
}





import { useEffect, useState } from 'react';

export function useApi({ url, method = 'GET', body = null, headers = {} }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null); // capture status code

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          ...(body ? { body: JSON.stringify(body) } : {}),
        });

        setStatus(res.status);

        if (!res.ok) {
          let msg = `Error: ${res.status}`;
          if (res.status === 400) msg = 'Bad Request (400)';
          else if (res.status === 401) msg = 'Unauthorized (401)';
          else if (res.status === 404) msg = 'Not Found (404)';
          else if (res.status === 500) msg = 'Internal Server Error (500)';
          throw new Error(msg);
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, JSON.stringify(body)]); // re-run when these change

  return { data, loading, error, status };
}


const debounce = (fun, delay=500)=>{
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        setTimeout(()=>{
            fun.apply(this, args);
        }, delay);
    }
}



const throttle = (fun, delay=500)=>{
    let lastTime = 0;
    return function(...args){
        let now = neq Date().now();
        if(now() - lastTime >= delay){
            fun.apply(this, args);
            lastTime = now;
        }
        
    }
}
