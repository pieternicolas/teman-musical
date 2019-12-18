import { useMemo, useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface useMediaProps {
  xs: any;
  sm: any;
  md: any;
  lg: any;
  xl: any;
};

const useMedia = ({ xs, sm, md, lg, xl }: useMediaProps) => {
  const theme = useContext(ThemeContext);

  const options = [
    { size: theme.screenXl, query: xl },
    { size: theme.screenLg, query: lg },
    { size: theme.screenMd, query: md },
    { size: theme.screenSm, query: sm },
    { size: '0', query: xs },
  ];

  return useMemo(
    () => options.find(
      option => window.matchMedia(`(min-width: ${option.size})`).matches,
    ).query,
    [options],
  );
};

export default useMedia;
