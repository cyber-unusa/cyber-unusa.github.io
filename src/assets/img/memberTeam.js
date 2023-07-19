export const mockUp =(asset)=>{
    return (
      <>
        <svg
          width="auto"
          height="auto"
          viewBox="0 0 408 1100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_375_171"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width=""
            height="auto"
          >
            <path d="M0 245.078L408 0V860.622L0 1100V245.078Z" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_375_171)">
            <image
              xlinkHref={asset}
              x="0"
              y="0"
              width="408"
              height="1100"
              preserveAspectRatio="xMidYMid slice"
            />
            <mask
              id="mask0_375_172"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width=""
              height="auto"
            >
              <path
                d="M0 245.078L408 0V860.622L0 1100V245.078Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_375_172)">
              <path
                d="M0 245.078L408 0V860.622L0 1100V245.078Z"
                fill="rgba(245, 40, 145, 0)"
              />
              <text x="50" y="50" font-size="30" fill="red">
                Hello, SVG Text!
              </text>
            </g>
          </g>
        </svg>
      </>
    );
}