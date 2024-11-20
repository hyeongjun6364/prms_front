import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface Props {
  onCompleted: (address: string) => void;
}

const SCRIPT_URL =
  '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const FindAddressButton = ({ onCompleted }: Props) => {
  const handleOpen = () => {
    new window.daum.Postcode({
      onComplete: (data: any) => {
        onCompleted(data.address as string);
      },
    }).open();
  };

  useEffect(() => {
    const script = document.createElement('script'); // <script></script>
    script.src = SCRIPT_URL; //<script src=URL></script>
    script.async = true;
    document.head.appendChild(script); // <head><script src=URL></script></head>

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Button type="button" size="medium" scheme="normal" onClick={handleOpen}>
      주소 찾기
    </Button>
  );
};

const FindAddressButtonSytle = styled.div``;
export default FindAddressButton;
