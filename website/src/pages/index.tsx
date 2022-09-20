import React, {useEffect, useLayoutEffect, useState} from 'react';
import {HeadFC, Link} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

import DeviceSVG from '../assets/Devices.svg';
import MediaQueries from '../styles/ts/MediaQueries';
import {BigTitle, devicesBreakingRangeWidth, DevicesImage, GetStartedButton, Section1, SubBigTitle} from '../styles/ts/Page-Index';
import useMediaQuery from '../hooks/useMediaQuery';
import {FadeIn, wipeInY} from 'react-animated-components';

const IndexPage = () => {
  const breakDevices = useMediaQuery(`(max-width: ${devicesBreakingRangeWidth})`);

  return (
    <>
      <Layout>
        <FadeIn durationMs={3000}>
          <Section1>
            <div>
              <BigTitle>
                Cross-Platform Input Handler <br /> for React and React Native.
              </BigTitle>
              <SubBigTitle>
                <span>Mouse</span>, <span>Touches</span>, <span>Keyboard</span> and <span>Gamepad</span>
              </SubBigTitle>
              <FadeIn delayMs={1500} durationMs={2500}>
                <Link style={{display: breakDevices ? 'none' : 'flex', width: 'fit-content'}} to={'/docs'}>
                  <GetStartedButton>Get started</GetStartedButton>
                </Link>
              </FadeIn>
            </div>

            <DevicesImage>
              <DeviceSVG />
            </DevicesImage>
            <FadeIn delayMs={1500} durationMs={2500}>
              <Link style={{display: !breakDevices ? 'none' : 'flex', width: 'fit-content'}} to={'/docs'}>
                <GetStartedButton>Get started</GetStartedButton>
              </Link>
            </FadeIn>
          </Section1>
        </FadeIn>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXN Input - Cross Platform Input Handler for React and React Native.</title>;
