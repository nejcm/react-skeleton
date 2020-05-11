import styled from '@emotion/styled';

export const SkeletonWrapper = styled.div`
  .s-loader {
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.055);

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.07),
        rgba(0, 0, 0, 0)
      );
      transform: translateX(-100%);
    }
  }

  &.s-active {
    .s-loader {
      &:after {
        animation: loading 1.75s 0.5s infinite;
      }
    }
  }

  &.s-inactive {
    .s-loader {
      &:after {
        animation: none;
      }
    }
  }

  &.s-dark {
    .s-loader {
      background-color: rgba(255, 255, 255, 0.175);
      &:after {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.12),
          rgba(255, 255, 255, 0)
        );
      }
    }
  }

  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }

  .s-rect {
    border-radius: 2px;
  }
  .s-circ {
    border-radius: 50%;
  }
`;
